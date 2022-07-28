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
		this.router.post('/login', this.userController.login )
		this.router.post('/signup', this.userController.signup )
		this.router.get('/profile', this.userController.profile )
		this.router.put('/forgotPassword', this.userController.forgotPassword )
	}
}