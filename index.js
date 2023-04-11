const express = require("express");
const mailer = require("nodemailer");
require("dotenv").config();
const app = express();

const absolutePath = __dirname + "/views/";
app.use(express.static(absolutePath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const transporter = mailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});
function sendEmail(to, name, email, subject, phone, company) {
  transporter.sendMail(
    {
      from: email,
      to,
      // attachments: [{
      //     filename: 'snow_mountain.jpg',
      //     path: __dirname + '/style/snow_mountain.jpg',
      //     cid: 'birthday'
      // }],
      subject: "Contact Form on DBallot Decentralized Voting Website",
      // html: '<h1>Happy Birthday!</h1><img src="cid:birthday"/>',
      html: `<b>Name: </b>${name} <br><b>Email: </b>${email} <br><b>Subject: </b>${subject} <br><b>Phone: </b>${phone} <br><b>Company: </b>${company}`,
    },
    (error, info) => {
      if (error) return console.error(error);
      else console.log("Email sent: " + info.response);
    }
  );
}

app.post("/submit", (req, res) => {
  console.log("Send Email");
  const { name, email, subject, phone, company } = req.body;
  const to = process.env.EMAIL;
  sendEmail(to, name, email, subject, phone, company);

  // To Koxy: Replace <YOUR EMAIL> with your email address to receive the emails
  // sendEmail(<YOUR EMAIL>, name, email, subject, phone, company);
  res.status(201).json({
    status: "success",
    message: "Email sent successfully",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
