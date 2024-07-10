import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";
import bcrypt from "bcryptjs";

const Admin = sequelize.define("admins",{
   id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
   },
   username:{
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
    console.log("admin table created....");
}).catch(err=>{
    console.log("Something wrong...");
})

Admin.checkPassword = (password,encryptedPassword)=>{
   return bcrypt.compareSync(password,encryptedPassword);
}
export default Admin;

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