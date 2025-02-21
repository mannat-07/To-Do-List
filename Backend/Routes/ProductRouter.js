const express = require('express')
const router = express.Router()
const ensureAuthentication = require('../Middlewares/Auth');

router.get('/', ensureAuthentication, (req, res)=>{

    console.log('---- Logged in user details ----', req.user);
    res.status(200).json([ { name: 'mobile', price: 10000 }, { name: 'TV', price: 20000 } ]);
});

module.exports = router;