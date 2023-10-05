import express from "express";
import { login, logout, myProfile, register } from "../controller/user.js"
import passport from "passport";
import { isPassportAuthenticated } from "../middleware/authentication.js";


const router = express.Router();

router.route("/register").post(register)

router.route("/login").post(passport.authenticate('local'), login);

router.route("/me").get(isPassportAuthenticated, myProfile)

router.route("/logout").get(isPassportAuthenticated, logout)

export default router;