import { Router } from "express";
import { AuthControllers } from "../controllers/auth.controllers";
import passport from "passport";

export const authRouter = Router();
authRouter.get("/success", AuthControllers.getSuccessPage);
authRouter.get("/login", AuthControllers.getLoginPage);
authRouter.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/auth/success",
    failureRedirect: "/auth/login",
  })
);
