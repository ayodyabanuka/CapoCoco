// pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import sendEmail from '../../utils/sendEmail';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { to, subject, message } = req.body;

      await sendEmail({
        to,
        subject,
        html: `<p>${message}</p>`,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
