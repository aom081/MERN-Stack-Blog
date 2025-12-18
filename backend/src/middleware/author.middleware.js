import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

export function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"]; // e.g. "Bearer <token>"
  const bearerToken =
    authHeader && authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;

  const token = bearerToken || req.headers["x-access-token"];

  if (!token) {
    return res.status(401).json({ message: "Token is missing" });
  }

  if (!JWT_SECRET) {
    return res
      .status(500)
      .json({ message: "JWT secret not configured on server" });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    // Match payload from login: { username, id }
    req.username = decoded.username;
    req.authorId = decoded.id;

    next();
  });
}

export default verifyToken;
