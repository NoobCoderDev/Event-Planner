import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";
import bcrypt from "bcryptjs";

const Client = sequelize.define("clients",{
   id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
   },
   firstname:{
    type: DataTypes.STRING,
    allowNull: false
   },
   lastname:{
    type: DataTypes.STRING,
    allowNull: false
   },
   email:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
   },
   phone:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
   }
});
sequelize.sync()
.then(result=>{
    console.log("client table created....");
}).catch(err=>{
    console.log("Something wrong...");
})


export default Client;

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