const { DataTypes } = require('sequelize');
module.exports = (sequelize) =>{
    sequelize.define("type",{

        id : {
          type: DataTypes.UUID,                             
          defaultValue: DataTypes.UUIDV4,     
          primaryKey: true,
          allowNull : false,
          },
      
        name: {
            type: DataTypes.STRING,
            unique : true,
          }


    }, {timestamps: false})
}
