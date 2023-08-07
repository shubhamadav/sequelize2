
module.exports=(sequelize , DataTypes)=>{
     const Users = sequelize.define("users",{
        name:DataTypes.STRING,
        email:{
            type:DataTypes.STRING,
            default:'dlkmmlm@.com'
        },
        gender:DataTypes.STRING
     });
}