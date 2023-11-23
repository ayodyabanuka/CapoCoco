import nodemailer from 'nodemailer';

const email = 'mr.graphics.by.ab@gmail.com';
const pass = 'tfabufmltyyafydg';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
