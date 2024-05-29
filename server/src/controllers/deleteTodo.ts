import { Request, Response } from "express"
import Subject from "../models/Subject"

export const deleteTodo = async (req: Request, res: Response) => {
   const subjectId = req.params.subjectId
   const todoIndex = req.params.todoIndex

   const subject = await Subject.findById(subjectId)
   if (!subject) {
      return res.status(404).json({ message: "Subject not found"})
   }
   subject.todos.splice(parseInt(todoIndex), 1)
   await subject.save()


   res.status(200).json(subject)
}