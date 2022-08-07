import { ApiRouter } from './routes/index';
import { AppDataSource } from './data-source';
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import crypto from 'crypto';
import { comparePassword, encryptPassword } from './utils/encryptPassword';

const app: Express = express();
const port = process.env.PORT || 8080;

dotenv.config();
app.use(cors());
app.use(helmet());
// app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(passport.initialize());
// app.use(passport.session());

app.get('/', (req: Request, res: Response) => {
  res.send('Express, TypeScript, TypeORM, PostgreSQL Server');
});

app.use('/api', new ApiRouter().router);

AppDataSource.initialize()
  .then(async () => {
    app.listen(port, async () => {
      console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
    });
  })
  .catch((error) => console.log(error));
