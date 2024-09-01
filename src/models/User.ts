import { model, Schema, Document } from "mongoose";
import PassportLocalMongoose from "passport-local-mongoose"

export interface user extends Document{
    username: string,
    password: string,
    salt: string
    isDemoAccount: boolean
}

const UserSchema = new Schema({
    isDemoAccount: {type: Boolean}
});
UserSchema.plugin(PassportLocalMongoose,{
    usernameField: 'username'
})

const User = model<user>("User",UserSchema);

export default User