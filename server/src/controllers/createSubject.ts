import { Request, Response } from "express";
import Subject from "../models/Subject";


export const createSubject = async (req: Request, res: Response) => {
  const { title } = req.body;
  const newDeck = new Subject({
    title: title,
  });
  const createdDeck = await newDeck.save();
  res.status(200).json(createdDeck);
};
