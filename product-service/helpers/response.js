const codeError = "SVC-PR";

exports.resSukses = (res, statusCode, message = "Proses Berhasil", data) => {
  return res.status(statusCode).json({
    success: true,
    message: message,
    data: data,
  });
};

exports.resGagal = (res, statusCode, message = "Proses Gagal", data) => {
  return res.status(statusCode).json({
    success: false,
    message: message,
    service: codeError,
    data: data,
  });
};
