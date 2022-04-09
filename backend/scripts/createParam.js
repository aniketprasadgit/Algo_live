const params = require("../models/params");

async function main() {
    try {
        let newParam = new params({
            userID: "DU634",
            password: "Thankyou51@",
            pin: "515151",
            apikey: "6kjch6to4rfjz5hp",
            secret: "0lzdxyx9ralumaa83nd973560jw8rq72",
            accesstoken: "BNgegGGbAh8x4mKlSTBHMXVfo2rvTwF1",
            enctoken: "",
            auth_type: "",
            totp_secret: ""
        });
        await newParam.save();
        console.log("Successfully created new param");
    
    } catch (error) {
        console.log(error);
    }
        
    
}

main();