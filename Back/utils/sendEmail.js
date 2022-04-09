//LIBRARY IMPORT
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const { dirname } = require("path");
const path = require("path");

//VARIABLE
const { SERVICE_MAIL, USER_MAIL, PASSWORD_MAIL } = process.env;

const transporter = nodemailer.createTransport({
  service: SERVICE_MAIL,
  auth: {
    user: USER_MAIL,
    pass: PASSWORD_MAIL,
  },
});

const hbsOption = {
  viewEngine: {
    partialDir: path.resolve(__dirname, "views/partials"),
    layoutsDir: path.resolve(__dirname, "views/layouts"),
  },
  viewPath: path.resolve(__dirname, "views"),
};

transporter.use("compile", hbs(hbsOption));

function sendMail(to, firstName, lastName, token) {
  const mailInfo = {
    from: USER_MAIL,
    to: to,
    subject: "Please confirm your mail address",
    template: "confirmationEmail",
    context: {
      firstName: firstName,
      lastName: lastName,
      token: token,
    },
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
    html: `<h1>Welcome to WeatherApp</h1>
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
};
