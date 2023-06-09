let jwt = require("jsonwebtoken");

exports.checking_Admin_costomer = (permission) => {
  return (req, res, next) => {
    try {
      let token = req.header("auth");
      token
        ? permission.includes(jwt.verify(token, "code").role)
          ? next()
          : res.status(401).json({ status: "failed", message: "unAuthorized" })
        : res
            .status(403)
            .json({ status: "failed", message: "unAuthenticated" });
    } catch (er) {
      res.status(401).json({ message: er.message });
    }
  };
};
exports.checking_Admin_costomer_user = (permission) => {
  return (req, res, next) => {
    try {
      let token = req.header("auth");
      token
        ? permission.includes(jwt.verify(token, "code").role)
          ? next()
          : res.status(401).json({ status: "failed", message: "unAuthorized" })
        : res
            .status(403)
            .json({ status: "failed", message: "unAuthenticated" });
    } catch (er) {
      res.status(401).json({ message: er.message });
    }
  };
};
exports.checking_user = (permission) => {
  return (req, res, next) => {
    try {
      let token = req.header("auth");
      token
        ? permission.includes(jwt.verify(token, "code").role)
          ? next()
          : res.status(401).json({ status: "failed", message: "unAuthorized" })
        : res
            .status(403)
            .json({ status: "failed", message: "unAuthenticated" });
    } catch (er) {
      res.status(401).json({ message: er.message });
    }
  };
};

exports.checking_admin = (permission) => {
  return (req, res, next) => {
    try {
      let token = req.header("auth");
      token
        ? permission.includes(jwt.verify(token, "code").role)
          ? next()
          : res.status(401).json({ status: "failed", message: "unAuthorized" })
        : res
            .status(403)
            .json({ status: "failed", message: "unAuthenticated" });
    } catch (er) {
      res.status(401).json({ message: er.message });
    }
  };
};
