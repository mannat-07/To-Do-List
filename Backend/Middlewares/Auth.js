const jwt = require('jsonwebtoken');
const ensureAuthentication = (req, res,next)=>{

    const auth = req.header('authorization').split(' ')[1];
    if(!auth){
        return res.status(401).json({msg : 'Unauthorized, JWT token is required'});
    }

    try {
        const decode = jwt.verify(auth, process.env.JWT_SECRET);
        req.user = decode;
        next();

    }

    catch(err){
        return res.status(403).json({msg : 'Unauthorized, JWT token wrong or expired'});
    }
}

module.exports = ensureAuthentication;