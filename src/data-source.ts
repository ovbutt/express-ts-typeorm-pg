import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entities/User"
import path from "path";

const isCompiled = path.extname(__filename).includes('js');

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [
        `src/entity/**/*.${isCompiled ? "js" : "ts"}`
      ],
      migrations: [
        `src/migration/**/*.${isCompiled ? "js" : "ts"}`
      ],
    //   cli: {
    //     "entitiesDir": "src/entity",
    //     "migrationsDir": "src/migration",
    //   },
    subscribers: [],
})
