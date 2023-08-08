const { Sequelize } = require("sequelize");

module.exports=(sequelize , DataTypes)=>{
    const post = sequelize.define('post',{
        name:DataTypes.STRING,
        email:DataTypes.STRING,
        contect:DataTypes.STRING
    },{
        createdAt:'create_id',
        updataAt:'update_id'
    })
    return post;
}