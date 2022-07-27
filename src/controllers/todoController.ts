import { Request, Response } from "express"

export class TodoControllers {
	public all  = async (req: Request, res: Response) => {
		console.log("in todo controllers login method")
		res.send("Login")
	}

	public new  = async (req: Request, res: Response) => {
		console.log("in todo controllers login method")
		res.send("Login")
	}

	public edit  = async (req: Request, res: Response) => {
		console.log("in todo controllers login method")
		res.send("Login")
	}

	public delete  = async (req: Request, res: Response) => {
		console.log("in todo controllers login method")
		res.send("Login")
	}

	public getOne  = async (req: Request, res: Response) => {
		console.log("in todo controllers login method")
		res.send("Login")
	}
}