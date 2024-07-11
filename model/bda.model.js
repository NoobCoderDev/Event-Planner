import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";
import bcrypt from "bcryptjs";

const BDA = sequelize.define("bda",{
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
   phone:{
    type: DataTypes.STRING,
    allowNull: false
   },
   email:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
   },
   password:{ 
    type: DataTypes.STRING,
    allowNull: false,
    set(v){
      let saltKey = bcrypt.genSaltSync(12);
      let encryptedPassword = bcrypt.hashSync(v,saltKey);
      this.setDataValue("password",encryptedPassword);
    }
   }
});
sequelize.sync()
.then(result=>{
    console.log("BDA table created....");
}).catch(err=>{
    console.log("Something wrong...");
})

BDA.checkPassword = (password,encryptedPassword)=>{
   return bcrypt.compareSync(password,encryptedPassword);
}
export default BDA;

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