import { TodoControllers } from './../controllers/todoController';
import { Router } from "express";

export class TodoRoutes {
	public router: Router;
	public todoController: TodoControllers = new TodoControllers()

	constructor(){
		this.router = Router();
		this.routes()
	}

	routes(){
		this.router.get('/todo', this.todoController.all )
		this.router.post('/todo', this.todoController.new )
		this.router.put('/todo/:id', this.todoController.edit )
		this.router.delete('/todo/:id', this.todoController.delete )
		this.router.get('/todo/:id', this.todoController.getOne )
	}

}