var db = require('../modul');


const Users =  db.users;


var addUser = async (req , res)=>{

   // let data = await Users.build({name:'test',email:'dlkmmlm@.com'}); 
     
   let data = await Users.create({name:'demo',email:'democnm@.com'});
      
   console.log(data.dataValues);

    let response ={
        data:'ok'
    }
    res.status(200).json(response)
}

var onetoone = async (req , res)=>{
    let data ={
         data:'one to one'
    }
    res.status(200).json(data)
}

module.exports = {
    addUser,
    onetoone
};