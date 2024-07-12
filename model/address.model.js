import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";
import bcrypt from "bcryptjs";

const Address = sequelize.define("address",{
   id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
   },
   local:{
    type: DataTypes.STRING,
    allowNull: false
   },
   city:{
    type: DataTypes.STRING,
    allowNull: false
   },
   state:{
    type: DataTypes.STRING,
    allowNull: false
   },
   pincode:{
    type:DataTypes.INTEGER,
    allowNull:false
   }
});

sequelize.sync()
.then(result=>{
    console.log("address table created....");
}).catch(err=>{
    console.log("Something wrong...");
})

export default Address;

/*
  Sequelize model define the structure of table
  It is blueprint of database table

  Sequelize model turn into model class and it also
  provide interface to interact with database

  create()
  findAll()
  update()
  .........
*/