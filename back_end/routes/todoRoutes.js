import express from 'express'
import {
  todoCreate,
  todoDelete,
  todoFind,
  todoUpdate,
} from '../controller/todo.controller.js'

const router = express.Router()

// Create
router.post('/todos', todoCreate)

export default router

// Find
router.get('/todos', todoFind)

// Update
router.put('/todos/:id', todoUpdate)

// Delete
router.delete('/todos/:id', todoDelete)
