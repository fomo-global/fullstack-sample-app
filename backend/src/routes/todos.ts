import { Router, type Response } from 'express';
import { Todo } from '../db/models/Todo';

type Request = {
  title: string; 
  description: string;  
  priority: string; 
  dueDate: string; 
}

export const router = Router().post(
  '/api/todos',
  async (req, res: Response) => {
    try {
      const { title, description, priority, dueDate } = req.body as Request;

      if (!title) {
        return res.status(400).json({ error: 'Title is required' });
      }

      const todo = await Todo.create({ title, description, priority, dueDate });
      res.status(201).json(todo);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: 'Failed to create todo' });
    }
  }
);