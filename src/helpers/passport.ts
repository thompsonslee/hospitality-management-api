import { PassportStatic, session } from "passport";
import { Strategy } from "passport-local";
import UserModel, { user } from "../models/UserModel";

type _User = user;

declare global {
  namespace Express {
    interface User extends _User {
    }
  }
}

const passportConfig = (passport: PassportStatic) => {
    passport.use(new Strategy(UserModel.authenticate()));
    passport.serializeUser(UserModel.serializeUser());
    passport.deserializeUser(UserModel.deserializeUser());
    passport.initialize()
    passport.session()
}

export default passportConfig