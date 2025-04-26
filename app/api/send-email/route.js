import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, company, message, services } = await request.json();

    // Create a transporter object using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Format selected services
    const selectedServices = Object.entries(services)
      .filter(([_, selected]) => selected)
      .map(([service]) => {
        switch (service) {
          case 'linkbuilding':
            return 'Linkbuilding';
          case 'software':
            return 'Softwareentwicklung';
          case 'ki':
            return 'Künstliche Intelligenz';
          default:
            return service;
        }
      })
      .join(', ');

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'angebot@daplie.com',
      subject: `Neue Anfrage von ${name}`,
      html: `
        <h2>Neue Anfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Unternehmen:</strong> ${company || 'Nicht angegeben'}</p>
        <p><strong>Interessierte Dienstleistungen:</strong> ${selectedServices || 'Keine ausgewählt'}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 