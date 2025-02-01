import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required : [true,"Please provide the username"],
        unique:true,
    },
    email:{
        type:String,
        required:[true,"Please provide the email"]
    }
})

const User = mongoose.models.users || mongoose.model("users",userSchema);

export default User;