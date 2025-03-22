import 'dotenv/config';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';
import config from '../../config';

const mailerSend = new MailerSend({
  apiKey: config.mailerSendApiKey,
});

const sendMail = async (email: string, url: string) => {
  const recipients = [new Recipient(email, 'Client')];
  const personalization = [
    {
      email: email,
      data: {
        url: url,
        support_email: 'abc@gmail.com',
      },
    },
  ];

  const emailParams = new EmailParams()
    .setFrom(new Sender('test@trial-51ndgwv7zwrlzqx8.mlsender.net', 'Test11'))
    .setTo(recipients)
    .setSubject('Verify your email')
    .setTemplateId('jpzkmgqxwvn4059v')
    .setPersonalization(personalization);

  await mailerSend.email.send(emailParams);
};

export default sendMail;
