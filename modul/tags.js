const { Sequelize } = require("sequelize");

module.exports=(Sequelize , DataTypes)=>{
    const Tags = Sequelize.difine('tags',{
        name:DataTypes.STRING
    },{
        createdAt : 'create_At',
        updateAt :'updateAt'
    });
     return Tags;
}