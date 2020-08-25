import mongoose, {ConnectionOptions} from "mongoose"
import config from "./config/config"

const dbOptions: ConnectionOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
};

mongoose.connect(config.DB.URI, dbOptions)

const { connection } = mongoose;

connection.once("open", () => {
  console.log("Mongodb connection stablished")
})

connection.on("error", err =>{
  console.error(err)
  process.exit(0)
})


