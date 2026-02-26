import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ExhibitsModule } from './exhibits/exhibits.module';
import { User } from './users/entities/user.entity';
import { Exhibit } from './exhibits/entites/exhibit.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'museum_db',
      entities: [User, Exhibit],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    ExhibitsModule,
  ],
})
export class AppModule {}
