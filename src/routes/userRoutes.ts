import { Router } from "express";
import { UserControllers } from "../controllers/userControllers";

export class UserRoutes {
	public router: Router;
	public userController: UserControllers = new UserControllers()

	constructor(){
		this.router = Router();
		this.routes()
	}

	routes(){
		this.router.get('/login', this.userController.login )
	}

}