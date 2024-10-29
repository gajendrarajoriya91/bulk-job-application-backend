require("dotenv").config();
const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const emailRoutes = require("./routes/emailRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api", emailRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
