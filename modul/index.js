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
db.post = require('./post')(sequelize,DataTypes);
db.tags = require('./tags')(sequelize,DataTypes);
db.post_tags = require('./Post_tags')(sequelize,DataTypes);

//db.users.hasOne(db.post ,{forgeignkey:'user_id'});
//db.post.belongsTo(db.users,{forgeignkey:'post_id'});
  
db.post.belongsToMany(db.tags,{through:'Post_tags'})
db.tags.belongsToMany(db.post,{through:'post_tags'})

