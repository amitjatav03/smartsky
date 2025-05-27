const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// signup controller
exports.signUp = async (req, res) => {
    try {
        // fetch data from request body
        const { firstname, lastname, email, password, contact } = req.body;

        // data validation
        if(!firstname || !lastname || !email || !password || !contact) {
            return res.status(403).json({
                success: false,
                message: "All fields are required"
            });
        }

        // check user already exist or not
        const existingUser = await User.findOne({ email });
        if(existingUser) {
            return res.status(400).json({
                succses: false,
                message: "User already exists."
            });
        }

        // hash password
        const hash = await bcrypt.hash(password, 10);

        // create the user
        const user = await User.create({
            firstname, 
            lastname,
            email,
            password: hash,
            contact
        });

        // return success response
        return res.status(200).json({
            success: true,
            message: "User Successfully Registered",
            data: user
        });
        
    } catch(error) {

    }
}

// login controller
exports.login = async (req, res) => {
    try {
        // fetch data from request body
        const { email, password } = req.body; 

        // perform data validation
        if(!email || !password) {
            return res.status(403).json({
                success: false,
                message: "All Fields are Required"
            }); 
        }

        // check user exists or not
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(401).json({
                succses: false,
                message: "User is not Registered. Please SignUp Later"
            })
        }

        // match password 
        const match = await bcrypt.compare(password, user.password);
        if(!match) {
            return res.status(401).json({
                success: false,
                message: "Password is Incorrect"
            });
        }

        // generate jwt token
        const payload = {
            email: user.email,
            id: user._id,
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h" });

        // save token to user document in database
        user.token = token;
        user.password = undefined;

        // create cookie and send response
        const options = {
            expires: new Date(Date.now() + 3*34*60*60*1000),
            httpOnly: true
        }

        // return success response 
        res.cookie("token", token, options)
        .status(200).json({
            success: true,
            token: token,
            user: user,
            message: "Logged In Successfully!"
        });

    } catch(error) {
        return res.status(500).json({
            success: false,
            error: error.message,
            message: "Login Failure, Please Try Again"
        });
    }
}

// logout controller
exports.logout = async (req, res) => {
    try {
        // clear the token cookie
        res.cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true
        });

        // Send success response
        return res.status(200).json({
            success: true,
            message: "Logged Out Successfully"
        });

    } catch(error) {
        return res.status(500).json({
            success: false,
            error: error.message,
            message: "Error while logging out"
        });
    }
}