import LocalStrategy from "passport-local";
import User from "../models/user.js"
import passport from "passport";


export const initializingPassport = function () {

      passport.use(new LocalStrategy(async (username, password, done) => {
            try {
                  // console.log(username, password);
                  let user = await User.findOne({ email: username })
                  // console.log(user);
                  if (!user) return done(null, false)
                  if (user.password != password) return done(null, false);
                  return done(null, user)
            } catch (error) {
                  return done(error, false)
            }
      }));


      passport.serializeUser((user, done) => {
            done(null, user.id)
      })

      passport.deserializeUser(async (id, done) => {
            try {
                  const user = await User.findById(id);
                  done(null, user)
            } catch (error) {
                  done(error, false)
            }
      })
}