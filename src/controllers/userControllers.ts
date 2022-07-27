import { Request, Response } from "express"

export class UserControllers {
	public login  = async (req: Request, res: Response) => {
		console.log("in user controllers login method")
		res.send("Login")
	}

	public signup  = async (req: Request, res: Response) => {
		console.log("in user controllers signup method")
		res.send("Signup")
	}

	public profile  = async (req: Request, res: Response) => {
		console.log("in user controllers profile method")
		res.send("profile")
	}

	public forgotPassword  = async (req: Request, res: Response) => {
		console.log("in user controllers forgot password method")
		res.send("Forgot Password")
	}
}