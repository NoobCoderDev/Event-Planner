import { DataTypes} from "sequelize";
import sequelize from "../db/dbConfig.js";
import bcrypt from "bcryptjs";
// import bdas from "./bda.model.js";

const event = sequelize.define('events',{
    id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
    },
    eventName:{
        type:DataTypes.STRING,
        allowNull: false
    },
    startDate:{
        type: DataTypes.STRING,
        allowNull: false
    },
    endDate:{
        type: DataTypes.STRING,
        allowNull: false
    },
    budget:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    place:{
        type:DataTypes.STRING,
        allowNull:false
    },
    status:{
        type:DataTypes.STRING,
        defaultValue: "working"
    }
})


sequelize.sync()
.then(result=>{
    console.log("Event table created.")
}).catch(err=>{
    console.log("Something wrong.");
})

export default event;