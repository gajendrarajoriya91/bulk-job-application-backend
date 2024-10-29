const xlsx = require("xlsx");
const Joi = require("joi");

const validateFileContent = (file) => {
  const workbook = xlsx.read(file.buffer, { type: "buffer" });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(sheet);

  const schema = Joi.object({
    hr_email: Joi.string().email().required(),
  });

  data.forEach((row) => {
    const { error } = schema.validate(row);
    if (error) throw new Error(`Invalid email format in Excel`);
  });
  return data;
};

module.exports = { validateFileContent };
