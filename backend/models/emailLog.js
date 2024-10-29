const fs = require("fs");
const path = require("path");

const emailLogFilePath = path.join(__dirname, "emailLog.json");

// Function to log email events
function logEmail(event) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    ...event,
  };

  // Append log entry to the email log file
  fs.readFile(emailLogFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading email log file:", err);
      return;
    }

    const log = JSON.parse(data || "[]");
    log.push(logEntry);

    fs.writeFile(emailLogFilePath, JSON.stringify(log, null, 2), (writeErr) => {
      if (writeErr) {
        console.error("Error writing to email log file:", writeErr);
      }
    });
  });
}

module.exports = {
  logEmail,
};
