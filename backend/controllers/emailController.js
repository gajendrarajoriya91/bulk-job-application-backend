const { validateFileContent } = require("../services/fileService");
const { sendEmail } = require("../services/emailService");

const sendApplication = async (req, res, next) => {
  try {
    const { subject, message } = req.body;
    const attachments = req.files;
    const fileData = validateFileContent(req.file);

    const recipients = fileData.map((row) => row.hr_email);
    await sendEmail(subject, message, attachments, recipients);

    res
      .status(200)
      .json({ success: true, message: "Emails sent successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = { sendApplication };
