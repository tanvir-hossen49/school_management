const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import bcryptjs from "bcryptjs";

const userSchema:any = new Schema({
  username: {
     type: String, 
     trim: true,
     unique: true,
     minlength: [3, "The length of user name can be maximum 31 characters"],
     maxlength: [31, "The length of user name can be maximum 3 characters"],
     required: [true, "please provide a username"],
  },
  password: { 
    type: String, 
    required: [true, "please provide a password"],
    minlength: [6, "The length of password can be minimum 6 characters"],
    set: (value:string) => bcryptjs.hashSync(value, bcryptjs.genSaltSync(10)),
  },
  email: { 
    type: String,
    trim: true,
    validate: {
        validator: function (value: string) {
          return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            value
          );
        },
        message: "Please enter a valid email",
    },
    unique:true
  },
  phone: {
    type: Number,
    trim: true,
    required: [true, "please provide a phone number"]
  },
  profileImg: {
    type: String,
    required: [true, "image not found"]
  },
  role: { 
    type: String, 
    enum: ['admin', 'student', 'instructor'],
    required: true
  },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;
