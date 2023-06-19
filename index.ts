import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { Database } from "./src/models/data-source";
import { authRouter } from "./src/routers/auth.routers";
import session from "express-session";
import passport from "./src/middlewarres/passport";

const app = express();
const PORT = 5000;

//configuration:
app.set("view engine", "ejs");
console.log(__dirname);

app.set("views", "./src/views");
app.use(bodyParser.urlencoded({ extended: true }));

//Connect:
Database.connectDB()
  .then(() => console.log(`DB connected!`))
  .catch((err) => console.log(`DB connect error : ${err.message}`));

//router:

app.use(
  session({
    secret: "SECRET",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", authRouter);

//listen:
app.listen(PORT, "localhost", () => {
  console.log(`App is running at http://localhost:${PORT}/auth/login`);
});
