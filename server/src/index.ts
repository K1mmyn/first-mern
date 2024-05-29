import express  from 'express';
import mongoose from 'mongoose';
require("dotenv").config()
import cors from "cors";
import router from "./routes/subjects"

require("dotenv")

const app = express();

app.use(express.json())
app.use(cors({
   origin: "*"
}))

const PORT = 5001

app.use('/subjects', router)

mongoose
  .connect(
    "mongodb+srv://Kim:qLkTx6dpc5yvbT6g@flash-cards.dibh8s2.mongodb.net/?retryWrites=true&w=majority&appName=flash-cards"
  )
  .then(() => {
    console.log(`listening on ${PORT}`);
    app.listen(5001);
  });

