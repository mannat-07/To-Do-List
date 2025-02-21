const joi = require('joi');

const signupValidation = async (req, res, next)=>{
    try{
        const schema = joi.object({
            userName : joi.string().required().min(3).max(20),
            email : joi.string().email().required(),
            password : joi.string().required().min(4).max(20)
        });

        const {error} = await schema.validate(req.body);
        if(error){
            return res.status(400).json({msg : "Bad request", success : false});
        }

        // res.status(200).json({msg : "OKK", success : true});
        next();
    }

    catch (err){
        res.status(500).json({msg : "Server error", success : false});
    }
};

const loginValidation = async (req, res, next)=>{
    try {
        const schema = joi.object({
            email : joi.string().email().required(),
            password : joi.string().required().min(4).max(20)
        });
    
        const {error} = schema.validate(req.body);
        if(error){
            return res.status(400).json({msg : "Bad request", success : false});
        }
        
        next();
        // res.status(200).json({msg : "Okk", success : true});
    }

    catch (err){
        res.status(500).json({msg : "Server error", success : false});
    }
};

module.exports = { signupValidation, loginValidation};