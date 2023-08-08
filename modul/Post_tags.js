const { Sequelize, DataTypes } = require("sequelize");

module.exports=(sequelize,DataTypes)=>{
    const Post_tags = sequelize.define('Post_tags',{
        post_id:DataTypes.STRING,
        tagsid:DataTypes.STRING
    },{
          timestamps:false
    });
    return Post_tags;
}