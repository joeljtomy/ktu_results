const mongoose = require("mongoose");
require("dotenv").config();

async function initDB() {
  const dbname = process.env.DBNAME;
  const dbUserName = process.env.DBUSERNAME;
  const dbPassphrase = process.env.DBPASSPHRASE;
  try {
    const mongoDbURI = `mongodb+srv://${dbUserName}:${dbPassphrase}@${dbname}.qy4ww5p.mongodb.net/${dbname}?retryWrites=true&w=majority&appName=${dbname}`;
    mongoose.connect(mongoDbURI);
  } catch (error) {
    console.error(error);
  }
}

module.exports = initDB;
