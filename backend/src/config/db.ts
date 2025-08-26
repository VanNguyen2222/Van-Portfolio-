import { DataSource } from "typeorm";
import { User } from "../model/User";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 5432,
    username: "mysql",
    password: "12345",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})