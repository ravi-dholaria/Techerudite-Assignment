import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT ?? '3000',
  jwtSecret: process.env.JWT_SECRET ?? 'secret',
  mailerSendApiKey: process.env.MAILER_SEND_API_KEY ?? '',
};
