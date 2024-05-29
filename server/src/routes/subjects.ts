import express from 'express';
import { createSubject } from '../controllers/createSubject';
import { getSubjects } from '../controllers/getSubjects';
import { deleteSubject } from '../controllers/deleteSubject';
import { getSubject } from '../controllers/getSubject';
import { createTodo } from '../controllers/createTodo';
import { deleteTodo } from '../controllers/deleteTodo';

const router = express.Router();

router.route('/').get(getSubjects).post(createSubject)
router.route('/:subjectId').delete(deleteSubject).get(getSubject).post(createTodo)
router.route("/:subjectId/:todoIndex").delete(deleteTodo)

export default router