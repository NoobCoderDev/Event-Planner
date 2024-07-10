import { Sequelize } from "sequelize";

const sequelize = new Sequelize("eventplanner","root","Welcome@123",{
    host: 'localhost',
    dialect: 'mysql' 
});

sequelize.authenticate()
.then(result=>{
    console.log("Database connected...");
}).catch(err=>{
    console.log(err);
});

export default sequelize;