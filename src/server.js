const express = require("express");

// Init server
const app = express();

// Settings
app.set("port", process.env.PORT || 4000);

module.exports = app;
