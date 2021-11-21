const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static('public'))

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
})

router.get('/login',function(req,res){
    res.sendFile(path.join(__dirname+'/login.html'));
})

router.get('/signup',function(req,res){
    res.sendFile(path.join(__dirname+'/signup.html'));
})

app.use('/',router);
app.listen(process.env.port || 3000);

console.log("SERVER ON");