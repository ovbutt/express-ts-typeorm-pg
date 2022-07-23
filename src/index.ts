import { AppDataSource } from "./data-source"
// import { User } from "./entity/User"
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import { UserRoutes } from "./routes/userRoutes";

const app: Express = express();
const port = process.env.PORT || 8080;

dotenv.config();
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Express, TypeScript, TypeORM, PostgreSQL Server');
});

// public routes(): void {
  app.use("/users", new UserRoutes().router);
// }
// }



AppDataSource.initialize().then(async () => {

    // console.log("Inserting a new user into the database...")
    // const user = new User()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 25
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)

    // console.log("Here you can setup and run express / fastify / any other framework.")


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

}).catch(error => console.log(error))
