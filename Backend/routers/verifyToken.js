const jwt = require("jsonwebtoken");
const JWTSEC = "@ee!$^$#@@#fekedek 99##";

const verifytoken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader;
    jwt.verify(token, JWTSEC, (err, user) => {
      if (err) return res.status(400).json("Some error occured");
      req.user = user;
      next();
    });
  } else {
    return res.status(400).json("Access token is not valid");
  }
};

module.exports = { verifytoken };
