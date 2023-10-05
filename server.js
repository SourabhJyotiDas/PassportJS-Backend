import app from "./index.js";
import dotenv from "dotenv"
import { connectToMongoose } from "./config/database.js";
import { initializingPassport } from "./config/passportConfig.js";


dotenv.config({ path: "./config/config.env" })

connectToMongoose()
initializingPassport()


app.listen(process.env.PORT,()=>{
      console.log(`Server is working on http://localhost:${process.env.PORT}`)
})