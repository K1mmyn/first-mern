import { Request, Response } from "express";
import Subject from "../models/Subject";

export const getSubject = async (req: Request, res: Response) => {
   const {subjectId} = req.params
   const subject = await Subject.findById(subjectId) 
   if (!subject) {
      res.status(404).json({message: "Subject not found"})
   }
   res.status(200).json(subject)
}