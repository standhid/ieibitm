const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
export default async function sendMail(req, res) {
  const { name, email, message, mobile } = req.body;
  console.log({
    email,
    mobile,
    name,
    message,
  });
  try {
    let transporter = nodemailer.createTransport(
      smtpTransport({
        host: "smtp.hostinger.com",
        port: 465,
        secureConnection: false,
        auth: {
          user: process.env.NEXT_PUBLIC_EMAIL,
          pass: process.env.NEXT_PUBLIC_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      })
    );
    let mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL,
      to: "only123fortest@gmail.com",
      subject: `query from website by ${name}`,
      text: `sender details:
        name: ${name}
        email: ${email}
        mobile: ${mobile}
        message: ${message}`,
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        res.status(500).json({
          ok: false,
          message: "Error sending invitation mail to guests.",
          err,
        });
      } else {
        res.status(200).json({
          ok: true,
          message: "Mail sent.",
          info,
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Server error.",
      error,
    });
  }
}
