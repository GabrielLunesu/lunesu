import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, message } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Naam, e-mail en bericht zijn verplicht' },
        { status: 400 }
      );
    }

    // Prepare email content
    const emailContent = `
      Nieuw contactformulier bericht:
      
      Naam: ${name}
      E-mail: ${email}
      Telefoon: ${phone || 'Niet opgegeven'}
      
      Bericht:
      ${message}
    `;

    // In a real implementation, you would use a service like Nodemailer, SendGrid, etc.
    // For demonstration purposes, we'll log the email content and return a success response
    console.log('Email would be sent to contact@lunesu.nl with content:');
    console.log(emailContent);

    // For actual implementation, uncomment and configure the following code:
    /*
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: 'contact@lunesu.nl',
      subject: 'Nieuw contactformulier bericht van website',
      text: emailContent,
    });
    */

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Er is een fout opgetreden bij het verzenden van uw bericht' },
      { status: 500 }
    );
  }
} 