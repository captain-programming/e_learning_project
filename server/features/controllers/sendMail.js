const nodemailer = require("nodemailer");

const sendMail = (text, email, subject) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.MAIL_AUTH_USERNAME,
      pass: process.env.MAIL_AUTH_PASSWORD
    }    
  });

  const mailOptions = {
    from: 'dkgroupofcompany363@gmail.com',
    to: email,
    subject: subject,
    html: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      // console.error(error);
      return res.status(500).send('Error sending confirmation email');
    } else {
      // console.log(`Confirmation email sent to ${email}: ${info.response}`);
    }
  });
}

module.exports = {sendMail};