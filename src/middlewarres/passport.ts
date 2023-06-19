import passport from "passport";
import {Strategy as LocalStrategy}  from "passport-local";
import { UserModel } from "../models/schema/user.model";

// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser(function (user, done) {
//   done(null, user);
// });

// passport.use("local",new LocalStrategy(async (username, password, done) => {
//     const user = await UserModel.findOne({ username: username });
    
//     if (!user) {
//       return done(null, false);
//     } else {
//       if (user.password === password) {
//         return done(null, user);
//       } else {
//         return done(null, false);
//       }
//     }
//   })
// );

passport.use(new LocalStrategy(async function verify(username: string, password: string, cb:any){
    const user = await UserModel.findOne({username});
    if (!user) {
        return cb(null, false, { message: 'Incorrect username or password.' });
    }
    if (user.password !== password) {
        return cb(null, false, { message: 'Incorrect username or password.' });
    }
    return cb(null, user);
}))

passport.serializeUser(function(user: any, cb) {
    process.nextTick(function() {
        cb(null, { id: user._id, username: user.username });
    });
});

passport.deserializeUser(function(user: any, cb): any {
    process.nextTick(function(): any {
        return cb(null, user);
    });
});

export default passport;
