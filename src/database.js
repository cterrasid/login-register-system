const mongoose = require("mongoose");

const { MONGODB_HOST, MONGODB_DB_NAME } = process.env;

const MONGODB_URI = `mongodb://${MONGODB_HOST}/${MONGODB_DB_NAME}`;

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB is connected!"))
  .catch((err) => console.error(err));
