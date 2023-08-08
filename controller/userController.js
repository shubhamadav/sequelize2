var db = require('../modul');


const Users =  db.users;
const Post = db.post;
const Tags = db.tags;

var addUser = async (req , res)=>{

   // let data = await Users.build({name:'test',email:'dlkmmlm@.com'}); 
     
   let data = await Users.create({name:'demo',email:'democnm@.com'});
      
   console.log(data.dataValues);

    let response ={
        data:'ok'
    }
    res.status(200).json(response)
}

var manytomany = async (req , res)=>{
   let data = await Post.findAll({
       attributes:['title','content'],
       incluid:[{
             module:Post,
             attributes:['title']
       }]
   }) 
   res.status(200).json(data);
}

module.exports = {
    
    addUser,
    onetoone,
    manytomany
};