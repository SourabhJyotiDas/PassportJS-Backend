import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import expressSession from "express-session"
import passport from "passport";

const app = express()

// Using Middlewares
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(expressSession({
  secret: "secret", resave: false, saveUninitialized: false
}))
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
app.use(passport.initialize())
app.use(passport.session())


import path from "path";
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "./client/build")))    // deploy only

app.get('/', async (req, res) => {
   res.sendFile(path.join(__dirname, './client/build/index.html'));
});


import user from "./routes/user.js"
app.use("/api/v1", user)

export default app;