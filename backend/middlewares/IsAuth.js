import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated. Please login first."
      });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "Invalid token"
      });
    }

    req.id = decoded.userId; 
    next();

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Authentication error"
    });
  }
};

export default isAuth;
