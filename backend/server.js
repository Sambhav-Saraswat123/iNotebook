const mongoose = require("mongoose");
const mongoUri =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
function connectToMongo() {
  mongoose.connect(mongoUri, () => console.log("connected to mongo"));
}
module.exports = connectToMongo;
