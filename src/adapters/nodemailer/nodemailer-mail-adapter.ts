import { transport } from "../../instances/nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail ({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Matheus Almeida <oi@feedget.com>',
      subject,
      html: body,
   
    })
  };
}