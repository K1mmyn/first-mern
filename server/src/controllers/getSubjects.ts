import { Request, Response } from "express";
import Subject from "../models/Subject";

export const getSubjects = async (req: Request, res: Response) => {
  const subjects = await Subject.find({});
  res.status(200).json(subjects);
};