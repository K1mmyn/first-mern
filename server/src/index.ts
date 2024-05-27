import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import Deck from './models/Deck';

require("dotenv")

const app = express();

app.use(express.json())

const PORT = 5001

app.post("/deck", async (req: Request, res: Response) => {
   const {title} = req.body
   const newDeck = new Deck({
      title: title
   })
  const createdDeck = await newDeck.save()
   res.json(createdDeck)
})

// qLkTx6dpc5yvbT6g

mongoose.connect(
  "mongodb+srv://Kim:qLkTx6dpc5yvbT6g@flash-cards.dibh8s2.mongodb.net/?retryWrites=true&w=majority&appName=flash-cards"
).then(() => {
   console.log(`listening on ${PORT}`);
   app.listen(5001)
})

