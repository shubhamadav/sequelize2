const express = require('express')
const app = express();

require('./modul');

var userCtrl = require('./controller/userController');

app.get('/',(req , res)=>{
    res.send("Hello world");
})

app.get("/add", userCtrl.addUser);

app.get("/onetoone",userCtrl.onetoone);

app.get("/manytomany", userCtrl.manytomany);

app.listen(3000)