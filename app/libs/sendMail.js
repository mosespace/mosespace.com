var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject, email, message) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  var mailOptions = {
    from: email,
    to: process.env.NODEMAILER_EMAIL,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw new Error(error);
    } else {
      console.log("Your Email Sent");
      return true;
    }
  });
}
