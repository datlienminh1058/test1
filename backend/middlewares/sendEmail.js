const nodeMailer = require('nodemailer');

exports.sendEmail = async (options) => {

    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
          user: "datlienminh1051@gmail.com",
          pass: "dat123123"
        }
      });

    const mailOptions = {
        from: 'datlienminh1051@gmail.com',
        to: options.email,
        subject: options.subject,
        text: options.message,
    }
    await transporter.sendMail(mailOptions);
}