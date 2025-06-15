import { Request, Response } from "express";


export default class AuthController {
  static showSignupForm(
    req: Request,
    res: Response) {
    res.render("auth/signup", { heading: "signup" });
  }

  static signup(
    req: Request,
    res: Response) {
    res.send("showSingupForm?")
  }

  static showLoginForm(
    req: Request,
    res: Response) {
    res.render("auth/login", { heading: "login" });
  }

  static login(
    req: Request,
    res: Response) {
    res.send("showSingupForm?")
  }

  static showResetPasswordForm(
    req: Request,
    res: Response) {
    res.send("showSingupForm?")
  }

  static resetPassword(
    req: Request,
    res: Response) {
    res.send("showSingupForm?")
  }

  static getMe(
    req: Request,
    res: Response) {
    res.send("showSingupForm?")
  }

}
