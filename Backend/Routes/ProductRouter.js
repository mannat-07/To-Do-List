const express = require('express')
const router = express.Router()
const ensureAuthentication = require('../Middlewares/Auth');

router.get('/', ensureAuthentication, (req, res)=>{

    console.log('---- Logged in user details ----', req.user);
    res.status(200).json({ Welcome });
});

module.exports = router;