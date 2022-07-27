import { TodoRoutes } from './todoRoutes';
import { UserRoutes } from './userRoutes';
import { Router } from "express";

export class ApiRouter {
	public router: Router;

	constructor(){
		this.router = Router();
		this.routes()
	}

	routes(){
		this.router.use('/user', new UserRoutes().router )
		this.router.use('/todo', new TodoRoutes().router )
	}

}