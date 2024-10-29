function sendSuccessResponse(res, data) {
  res.status(200).json({
    status: "success",
    data,
  });
}

function sendErrorResponse(res, error) {
  res.status(error.statusCode || 500).json({
    status: "error",
    message: error.message || "An unexpected error occurred.",
  });
}

module.exports = {
  sendSuccessResponse,
  sendErrorResponse,
};

// const { sendSuccessResponse, sendErrorResponse } = require('./responseHandler');

// app.get('/some-endpoint', (req, res) => {
//     // Example of sending a success response
//     sendSuccessResponse(res, { message: 'Data retrieved successfully.' });
// });
