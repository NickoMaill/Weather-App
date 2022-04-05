const nodemailer = require("nodemailer");
const {SERVICE_MAIL, USER_MAIL, PASSWORD_MAIL} = process.env
const transporter = nodemailer.createTransport({
  service: SERVICE_MAIL,
  auth: {
    user: USER_MAIL,
    pass: PASSWORD_MAIL,
  },
});

function sendMail(to, firstName, lastName, token) {

    const mailInfo = {
      from: USER_MAIL,
      to: to,
      subject: "Please confirm your mail address",
      html: `<h1>Email Confirmation</h1>
			<h2>Hello ${firstName} ${lastName}</h2>
			<p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
      <a href="http://localhost:8000/user/confirm/${token}"> click here to confirm</a>`,
    };

  transporter.verify((err, success) => {
    if (err) {
      return console.log(err);
    } else {
      return console.log("Server is ready to take our messages", success);
    }
  });
  transporter.sendMail(mailInfo, (err, info) => {
    if (err) {
      return console.error(err);
    } else {
      return console.log("email send", info.response);
    }
  });
}

function sendFinalEmail(to, firstName, lastName) {
  let mailInfo = {
    from: USER_MAIL,
    to: to,
    subject: "Welcome to WeatherApp",
    html: `<h1>Welcome to CRManagement</h1>
			<h2>Hello ${firstName} ${lastName}</h2>
      <p>Welcome to the WeatherApp family, enjoy our service</p>`,
  };
  transporter.verify((err, success) => {
    if (err) {
      return console.log(err);
    } else {
      return console.log("Server is ready to take our messages", success);
    }
  });
  transporter.sendMail(mailInfo, (err, info) => {
    if (err) {
      return console.error(err);
    } else {
      return console.log("email send", info.response);
    }
  });
}

module.exports = {
  sendMail,
  sendFinalEmail,
}