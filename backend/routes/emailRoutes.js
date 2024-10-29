const express = require("express");
const router = express.Router();
const { sendApplication } = require("../controllers/emailController");
const upload = require("../middlewares/fileValidator");

router.post("/send-application", upload.single("file"), sendApplication);

module.exports = router;
