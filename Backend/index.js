const express = require('express');
const app = express();

require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
const cors = require('cors');
app.use(cors())
const user = require('./Models/user.js');
const mongoose = require('./Models/db.js');
const AuthRouter = require('./Routes/AuthRouter.js');
const ProductRouter = require('./Routes/ProductRouter.js');

app.get('/ping', (req,res)=>{
    res.send('Pong');
})

app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

app.get('/', (req,res)=>{
    res.send('This is Home Route')
})

const port = process.env.PORT || 9090;

app.listen(port, async ()=>{
    try{
        console.log(`Server is running on port ${port}`);
    }
    catch(err){
        console.log(err);
    }
})