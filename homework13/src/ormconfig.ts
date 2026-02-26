import { DataSource } from 'typeorm';
import { User } from './entities/User';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'mydb',
    entities: [User],
    synchronize: false,
    logging: false,
    migrations: ['src/migrations/*.ts'],
});

