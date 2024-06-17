import { PassportStatic, session } from "passport";
import { Strategy } from "passport-local";
import UserModel, { user } from "../models/User";

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
}

export default passportConfig