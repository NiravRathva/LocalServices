export const appError = (message, statusCode) => {
  const err = new Error();
  err.statusCode = statusCode;
  err.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
  err.isOperational = true;
  err.message = message;
  return err;
};
