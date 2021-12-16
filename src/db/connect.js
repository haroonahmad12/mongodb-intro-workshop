const mongoose = require("mongoose");
const { Schema } = mongoose;

/**
 * 1. Create the connection logic in the `/src/db/connect.js` file
 *
 * Finish the code of the `connect` function so that it returns
 * a call to the `mongoose.connect` method to the following url:
 *
 * `mongodb://localhost:27017/myApp`
 *
 * and with the options you will see in the warnings in the terminal:
 *
 * {
 *   useNewUrlParser: true,
 *   useUnifiedTopology: true,
 * }
 */

mongoose.connect("mongodb://localhost:27017/myApp");

console.log("starting");
function connect() {}

module.exports = connect;

