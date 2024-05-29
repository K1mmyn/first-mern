import { Request, Response } from "express"
import Subject from "../models/Subject"
import mongoose from "mongoose"

export const createTodo = async (req: Request, res: Response) => {
   const subjectId = req.params.subjectId
   const subject = await Subject.findById(subjectId)   
   if (!subject) {
      return res.status(404).json({message: 'Subject not found'})
   }
   const {text} = req.body
   subject.todos.push(text)
   await subject.save()
   res.status(200).json(subject)
}