const jwt = require("jsonwebtoken");

const adminAuthentication = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET,{maxAge: 1000*60*60*24});
  req.admin = decoded;
  next();
};

module.exports = adminAuthentication;