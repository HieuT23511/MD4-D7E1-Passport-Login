import { Schema,model } from "mongoose";

interface IUser {
    username: string,
    password: string
}

//Create Schema:
const userSchema = new Schema <IUser>({
    username: String,
    password: String
})

//Create module and export: 
export const UserModel = model <IUser>('user',userSchema);