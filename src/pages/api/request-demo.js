import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, company, message } = req.body;

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

  try {
    // Email to the company
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'lulyabdy@gmail.com',
      subject: 'New StaffPesa Demo Request',
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Confirmation email to the user
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for requesting a StaffPesa demo',
      html: `
        <h2>Thank you for your interest in StaffPesa!</h2>
        <p>Dear ${name},</p>
        <p>We have received your demo request and will contact you shortly to schedule a personalized demonstration of our platform.</p>
        <p>In the meantime, if you have any questions, please don't hesitate to contact us at lulyabdy@gmail.com.</p>
        <p>Best regards,<br>The StaffPesa Team</p>
      `,
    });

    res.status(200).json({ message: 'Demo request sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send demo request' });
  }
} 