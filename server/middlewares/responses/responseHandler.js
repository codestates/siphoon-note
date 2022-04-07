const successResponse = ({ req, res, data = {}, status = 0, message = '' }) =>
  res.status(status).json({ status, message, data });

const successResponseWithToken = ({
  req,
  res,
  token = '',
  data = {},
  status = 0,
  message = '',
}) => {
  res.cookie('Bearer', token);
  res.status(status).json({ status, message, data });
};

const errorResponse = ({
  req,
  res,
  error = null,
  status = 0,
  message = '',
}) => {
  if (error) {
    error.status = status;
    error.message = message;
    error.data = data;
    console.error(error);
  }

  return res.status(status).json({
    status,
    message,
  });
};

module.exports = {
  successResponse,
  successResponseWithToken,
  errorResponse,
};