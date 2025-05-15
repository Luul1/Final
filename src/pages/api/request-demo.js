import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, company, message } = req.body;

  // Validate required fields
  if (!name || !email || !phone || !company || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  // Create a transporter using SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // Verify SMTP connection configuration
  try {
    await transporter.verify();
  } catch (error) {
    console.error('SMTP connection error:', error);
    return res.status(500).json({ message: 'Email service configuration error' });
  }

  try {
    // Email to admin
    await transporter.sendMail({
      from: `"StaffPesa Demo Request" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Demo Request',
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // Confirmation email to user
    await transporter.sendMail({
      from: `"StaffPesa" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank you for requesting a demo',
      html: `
        <h2>Thank you for your interest in StaffPesa!</h2>
        <p>Dear ${name},</p>
        <p>We have received your demo request and will contact you shortly to schedule a demonstration of our platform.</p>
        <p>Best regards,<br>The Staffma Team</p>
      `,
    });

    res.status(200).json({ message: 'Demo request sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      message: 'Failed to send demo request',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
} 