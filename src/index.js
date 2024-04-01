import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB()
.then( ()=> {
    app.on("error", (error) => {
        console.log("ERROR : ", error);
    })
    app.listen(process.env.PORT, () => {
        console.log(`server is live at ${process.env.PORT}`);
    })
})
.catch(() => {
    console.log("Mongo DB connection error!!");
})
