import express from "express";
import { register, login } from "../Controllers/User.Controller.js";

const router = express.Router();
//http://localhost:5000/api/v1/user/register
router.post("/register", register);
//http://localhost:5000/api/v1/user/login
router.post("/login", login);

export default router;
