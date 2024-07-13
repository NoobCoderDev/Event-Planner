import Event from "./events.model.js";
import Client from "./client.model.js";
import Bda from "./bda.model.js";
import Address from "./address.model.js";
import Vendor from "./vendors.model.js";
import Customer from "./customers.model.js";
import AdminAssignCTB from "./adminAssignCTB.model.js";

// Event.hasOne(Bda); // foreignKey(userId) // Aisa likhne se Bda table me eventId create ho jayega
// Bda.belongsTo(Event);// references User(id)

// Bda.hasMany(Event); // foreignKey(userId) // Aisa likhne se event table me BdaId create ho jayega
// Event.belongsTo(Bda);// references User(id)

Client.hasOne(Event); // foreignKey(userId)
Event.belongsTo(Client);// references User(id)

Bda.hasMany(Event,{foreignKey: "BdaId"});
Event.belongsTo(Bda,{
    foreignKey: "BdaId", targetKey:"id"
});

Vendor.hasMany(Address);
Address.belongsTo(Vendor);

Client.hasMany(Address);
Address.belongsTo(Client);

Bda.hasMany(Address);
Address.belongsTo(Bda);

Customer.hasMany(Address);
Address.belongsTo(Customer);

Bda.hasMany(AdminAssignCTB);
AdminAssignCTB.belongsTo(Bda);

Client.hasOne(AdminAssignCTB);
AdminAssignCTB.belongsTo(Client);

export {Event,Bda,Customer,Vendor,Client,AdminAssignCTB};