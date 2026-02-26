import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import { UserController } from './src/controllers/userController';
import { AppDataSource } from './src/ormconfig';

AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');

        const app = createExpressServer({
            cors: true,
            controllers: [UserController],
            validation: true,
        });

        app.listen(3000, () => {
            console.log('Server is running on http://localhost:3000');
        });
    })
    .catch( (err) => {
        console.error('Error during Data Source initialization:', err);
    });


