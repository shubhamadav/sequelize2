const {Sequelize , DataTypes}= require('sequelize')
const sequelize = new Sequelize('employee','root','toor',{
        host:'localhost',
        dialect:'mysql'
})

sequelize.authenticate()
.then(()=>{
    console.log("connection")
})
.catch(err=>{
    console.log(err)
})

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./users')(sequelize,DataTypes);

db.sequelize.sync()
.then(()=>{
    console.log("yes itis.....")
})

