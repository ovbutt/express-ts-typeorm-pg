import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Todo } from '../entities/Todo';

export class TodoControllers {
  public todoRepository;
  constructor() {
    this.todoRepository = AppDataSource.getRepository(Todo);
  }
  public all = async (req: Request, res: Response) => {
    const todos = await this.todoRepository.find();
    res.send({ status: 200, statusMessage: 'success', data: todos });
  };

  public new = async (req: Request, res: Response) => {
    const { title, description, isDone } = req.body;
    const todo = new Todo();

    todo.title = title;
    todo.description = description;
    todo.isDone = isDone;

    const savedTodo = await this.todoRepository.save(todo);

    res.send({ status: 200, statusMessage: 'success', data: savedTodo });
  };

  public edit = async (req: Request, res: Response) => {
    const { id, title, description, isDone } = req.body;
    const data = { title, description, isDone };
    const updateTodo = await this.todoRepository.update({ id }, data);
    res.send({ status: 200, statusMessage: 'success', data: updateTodo });
  };

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;

    const deleteTodo = await this.todoRepository.delete({ id });
    if (deleteTodo.affected === 1) {
      res.send({ status: 200, statusMessage: 'success', data: 'Todo deleted successfully' });
    } else {
      res.send({ status: 400, statusMessage: 'error', data: 'Error while deleting todo' });
    }
  };

  public getOne = async (req: Request, res: Response) => {
    const { id } = req.params;

    const todo = await this.todoRepository.findOne({ where: { id } });
    if (todo === null) {
      res.send({ status: 404, statusMessage: 'error', data: 'Todo not found' });
    }
    res.send({ status: 200, statusMessage: 'success', data: todo });
  };
}
