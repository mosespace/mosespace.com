var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject, email, message) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
      pass: process.env.NEXT_PUBLIC_NODEMAILER_PW,
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
