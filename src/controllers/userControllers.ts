import { Request, Response } from "express"

export class UserControllers {
	public login  = async (req: Request, res: Response) => {
		console.log("in user controllers login method")
		res.send("Login")
	}
}