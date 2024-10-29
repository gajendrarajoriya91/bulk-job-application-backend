const transporter = require("../config/nodemailer");
const logger = require("../utils/logger");
logger.info("Application started successfully.");

const sendEmail = async (subject, message, attachments, recipients) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: recipients.join(", "),
      subject,
      text: message,
      attachments,
    });
    logger.info(`Email sent: ${info.response}`);
  } catch (error) {
    logger.error(`Failed to send email: ${error.message}`);
  }
};

module.exports = { sendEmail };
