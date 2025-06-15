import express from "express";
import AuthController from "../controllers/AuthController";

const router = express.Router()

router.get("/signup", AuthController.showSignupForm);
router.post("/signup", AuthController.signup);

router.get("/login", AuthController.showLoginForm);
router.post("/login", AuthController.login)

router.get("/reset", AuthController.showResetPasswordForm);
router.post("/reset", AuthController.resetPassword);
router.get("/me", AuthController.getMe);

export default router
