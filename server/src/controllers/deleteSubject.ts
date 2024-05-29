import { Request, Response } from "express"
import Subject from "../models/Subject"

export const deleteSubject = async (req: Request, res: Response) => {
   const {subjectId} = req.params
   const deletedSubject = await Subject.findByIdAndDelete(subjectId)
   res.status(200).json(deletedSubject)
}