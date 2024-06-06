import mongoose, {model} from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    Date : {
        type : Date,
        default : Date.now
    }
})

const User = model("user", userSchema)
User.createIndexes();
export default User;