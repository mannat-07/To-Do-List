const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserModel = require('../Models/user');

const signup = async (req, res)=>{
    try{
        const {userName, email, password} = req.body;

        const user = await UserModel.findOne({email});
        if (user){
            return res.status(409).json({msg : 'User already exists', success: false});
        }

        const userModel = new UserModel({userName, email, password});
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();

        res.status(201).json({msg : 'Signup successfully', success: true});
    }
    catch(err){
        res.status(500).json({msg : 'Internal server error', success: false});
    }
}

const login = async (req, res)=>{
    try{
        const {email, password} = req.body;
    
        const user = await UserModel.findOne({email});
        if (!user){
            return res.status(403)
            .json({
                msg : 'Email or password is wrong',
                success: false
            });
        };
    
        const isPswd = await bcrypt.compare(password, user.password);
        if (!isPswd){
            return res.status(403).json({msg : 'Password is wrong', success: false})
        }

        const jwtToken = jwt.sign( {email: user.email, _id: user._id}, process.env.JWT_SECRET)

        res.status(200)
            .json({
                msg: "Login Success",
                success: true,
                jwtToken,
                email,
                name: user.name
            })
    }
    catch(err){
        res.status(500).json({msg : 'Internal server error', success: false})
    }
}

module.exports = {signup, login};