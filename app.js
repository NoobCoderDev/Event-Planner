import express from "express";
import bodyParser from "body-parser";
import AdminRouter from "./routes/admin.router.js";
import ClientRouter from "./routes/client.router.js";
import CustomerRouter from "./routes/customers.router.js"
import BDARouter from "./routes/bda.router.js";

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/admin",AdminRouter);
app.use("/customer",CustomerRouter);
app.use("/client",ClientRouter);
app.use("/bda",BDARouter);

app.listen(3000,()=>{
    console.log("Server Started....");
});