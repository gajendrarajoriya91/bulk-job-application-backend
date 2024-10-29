const Queue = require("bull");
const { sendEmail } = require("../services/emailService");
const emailQueue = new Queue("email", process.env.REDIS_URL);

emailQueue.process(async (job) => {
  const { subject, message, attachments, recipients } = job.data;
  await sendEmail(subject, message, attachments, recipients);
});

const addEmailJob = (data) => {
  emailQueue.add(data, { attempts: 3 });
};

module.exports = { addEmailJob };
