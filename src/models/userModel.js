import { verify } from "crypto";
import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";
import { type } from "os";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required : [true,"Please provide the username"],
        unique:true,
    },
    email:{
        type:String,
        required:[true,"Please provide the email"],
        unique:true,
    },
    paswword:{
        trpe:String ,
        required:[true,"Provide the password"],
    },
    isVerfied:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry :Date,
})


const User = mongoose.models.users || mongoose.model("users",userSchema);

export default User;