const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('pokemon', {
    
    id : {
      type: DataTypes.UUID,               
      defaultValue: DataTypes.UUIDV4,     
      primaryKey: true,
      allowNull : false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    img:{
      type:DataTypes.STRING,
      defaultValue :"https://images3.alphacoders.com/677/677583.png"
    },
    hp:{
      type:DataTypes.INTEGER,
      allowNull: false
    },
    attack:{
      type:DataTypes.INTEGER,
      allowNull: false
    },
    defense:{
      type:DataTypes.INTEGER,
      allowNull: false
    },
    speed : {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    height : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
};
