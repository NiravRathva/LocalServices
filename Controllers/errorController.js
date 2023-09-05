const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};
const sendErrorProd = (err, res) => {
  console.error("ERROR ", err);

  res.status(500).json({
    status: "error",
    message: "Something went very wrong!",
  });
};

export const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
 
  const message = err.message || "error";
  if (process.env.NODE_ENV === "development") {
  
    sendErrorDev(err, res);
    
  } else if (process.env.NODE_ENV === "production") {
    let error = { ...err };
    sendErrorProd(error, res);
  }
};
