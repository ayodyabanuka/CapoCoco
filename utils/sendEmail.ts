// utils/sendEmail.ts
import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

const sendEmail = async ({ to, subject, html }: EmailOptions) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'youremail@gmail.com', // Your Gmail email address
        pass: 'yourpassword', // Your Gmail password (or an app-specific password)
      },
    });

    const mailOptions = {
      from: 'youremail@gmail.com',
      to,
      subject,
      html,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Error sending email');
  }
};

export default sendEmail;
