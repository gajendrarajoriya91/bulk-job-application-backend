const multer = require("multer");
const path = require("path");

const upload = multer({
  limits: { fileSize: 1024 * 1024 * 5 }, // Limit to 5MB
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ext === ".xlsx" || ext === ".pdf" || ext === ".docx") {
      cb(null, true);
    } else {
      cb(new Error("Unsupported file type"), false);
    }
  },
});

module.exports = upload;
