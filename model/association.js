import Event from "./events.model.js";
import Client from "./client.model.js";
import Bda from "./bda.model.js";

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


export {Event,Bda};