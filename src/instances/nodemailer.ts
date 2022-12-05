import nodemailer from 'nodemailer'
export const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1073748f8f247d",
    pass: "8944ce54749c25"
  }
});