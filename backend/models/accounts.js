const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

var AccountSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: "User",
        required: true,
    },
    userID: {
        type: String,
        required: true,
        unique: true,
    },
    broker: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    pin: String,
    
    auth_type: String,
    totp_secret: String,
    apiKey: String,
    secret: String,
    accessToken: String, // not to be shoqn
    enctoken: String, //
   
    balance: {
        //
        type: Number,
        required: true,
        default: 0,
    },
    
},
    { timestamps: true }
);

module.exports = mongoose.model("Account", AccountSchema);
