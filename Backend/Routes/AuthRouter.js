const express = require('express')
const router = express.Router();
const cors = require('cors');
const {signup, login} = require('../Controllers/AuthController');
const {signupValidation, loginValidation} = require('../Middlewares/AuthValidation');

router.post('/login', loginValidation, login);

router.post('/signup', signupValidation, signup);

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

module.exports= router;