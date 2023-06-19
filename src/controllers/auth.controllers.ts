import passport from "passport";

export class AuthControllers {
  static async getLoginPage(req: any, res: any) {
    res.render("login");
  }
  //   static async authenticateLogin(req: any, res: any, next: any) {
  //     passport.authenticate("local", (err: any, user: any) => {
  //       if (err) {
  //         return next(err);
  //       }

  //       if (!user) {
  //         return res.send("Wrong email or password");
  //       }

  //       req.login(user, () => {
  //         res.send("You are authenticated");
  //       });
  //     })(req, res, next);
  //   }
  static async authenticateLogin(req: any, res: any) {
    await passport.authenticate("local", {
      successRedirect: "/auth/success",
      failureRedirect: "/auth/login",
    });
  }
  static async getSuccessPage(req:any, res:any){
    res.render("success")
  }
  
}
