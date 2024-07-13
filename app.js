import express from "express";
import bodyParser from "body-parser";
import AdminRouter from "./routes/admin.router.js";
import ClientRouter from "./routes/client.router.js";
import CustomerRouter from "./routes/customers.router.js"
import BDARouter from "./routes/bda.router.js";
import EventRouter from "./routes/event.router.js";
import VendorRouter from "./routes/vendor.router.js";
import AddressRouter from "./routes/address.router.js";
import AdminAssignCTB from "./routes/AdminAssignCTB.router.js";
import "./model/association.js";

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/admin",AdminRouter);
app.use("/customer",CustomerRouter);
app.use("/client",ClientRouter);
app.use("/bda",BDARouter);
app.use("/event",EventRouter);
app.use("/vendor",VendorRouter);
app.use("/address",AddressRouter);
app.use("/assign-work",AdminAssignCTB);

app.listen(3000,()=>{
    console.log("Server Started....");
});