// utils/sendEmail.ts
import nodemailer from 'nodemailer';

interface EmailOptions {
  name: string;
  email: string;
  html: string;
}

const sendEmail = async ({ name, email, html }: EmailOptions) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mr.graphics.by.ab@gmail.com', // Your Gmail email address
        pass: 'tfabufmltyyafydg', // Your Gmail password (or an app-specific password)
      },
    });

    const mailOptions = {
      from: email,
      to: name,
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
