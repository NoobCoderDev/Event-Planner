import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";
import bcrypt from "bcryptjs";

const AdminAssignCTB = sequelize.define("AdminAssignCTB",{
   id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
   },
   status:{
    type:DataTypes.STRING,
    defaultValue:"schedule meeting"
   }
});
sequelize.sync()
.then(result=>{
    console.log("admin work assign table created....");
}).catch(err=>{
    console.log("Something wrong...");
})

export default AdminAssignCTB;
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