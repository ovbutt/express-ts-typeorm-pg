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
		this.router.get('/all', this.todoController.all )
		this.router.post('/new', this.todoController.new )
		this.router.put('/:id', this.todoController.edit )
		this.router.delete('/:id', this.todoController.delete )
		this.router.get('/:id', this.todoController.getOne )
	}

}