const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');
const { StatusCodes } = require('http-status-codes');

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'eark25@mailsac.com', // Change to your recipient
    from: 'eark25@hotmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  const info = await sgMail.send(msg);

  res.status(StatusCodes.OK).json({
    status: 'success',
    info,
  });
};

module.exports = sendEmail;
