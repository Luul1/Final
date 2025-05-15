import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { year } = req.query;
    const { db } = await connectToDatabase();

    // Validate year parameter
    if (!year || isNaN(year)) {
      return res.status(400).json({ message: 'Invalid year parameter' });
    }

    // Get user's tax information from the database
    // Note: In a real application, you would get this from the authenticated user's session
    const taxData = await db.collection('taxRecords').findOne({
      userId: /* user ID */,
      year: parseInt(year),
    });

    if (!taxData) {
      // If no tax data exists for the year, calculate it based on salary information
      const salaryData = await db.collection('employees').findOne(
        { /* user query */ },
        { projection: { salary: 1, allowances: 1, deductions: 1 } }
      );

      if (!salaryData) {
        return res.status(404).json({ message: 'User salary information not found' });
      }

      // Calculate tax based on Kenyan tax brackets
      const totalIncome = salaryData.salary + (salaryData.allowances || 0);
      const taxableIncome = totalIncome - (salaryData.deductions || 0);
      
      // Kenyan tax brackets (2024)
      const taxBrackets = [
        { threshold: 24000, rate: 0.1 },
        { threshold: 32333, rate: 0.25 },
        { threshold: 500000, rate: 0.3 },
        { threshold: Infinity, rate: 0.35 },
      ];

      let totalTaxDue = 0;
      let remainingIncome = taxableIncome;

      for (const bracket of taxBrackets) {
        if (remainingIncome <= 0) break;

        const taxableInBracket = Math.min(
          remainingIncome,
          bracket.threshold - (totalTaxDue === 0 ? 0 : taxBrackets[taxBrackets.indexOf(bracket) - 1].threshold)
        );

        totalTaxDue += taxableInBracket * bracket.rate;
        remainingIncome -= taxableInBracket;
      }

      // Create new tax record
      const newTaxData = {
        userId: /* user ID */,
        year: parseInt(year),
        totalIncome,
        taxableIncome,
        totalTaxDue,
        taxPaid: 0,
        balanceDue: totalTaxDue,
        filingStatus: 'Not Filed',
        monthlyPayments: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      await db.collection('taxRecords').insertOne(newTaxData);
      return res.status(200).json(newTaxData);
    }

    res.status(200).json(taxData);
  } catch (error) {
    console.error('Error fetching tax data:', error);
    res.status(500).json({ message: 'Failed to fetch tax data' });
  }
} 