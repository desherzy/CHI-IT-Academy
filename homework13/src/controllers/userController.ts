import { Get, 
    Post, 
    Patch, 
    Delete, 
    Body, 
    Param, 
    JsonController,
    NotFoundError,
    HttpCode
} from 'routing-controllers';
import { dbService } from '../services/dbService';
import { CreateUserDto } from '../dto/CreateUserDto';

@JsonController('/users')
export class UserController {
    @Get('/users')
    getAllUsers() {
        return dbService.getAllUsers();
    };

    @Get('/users/:id')
    getUserById(@Param('id') id: number) {
        const user = dbService.getUserById(id);
        if (!user) {
            throw new NotFoundError(`User with id ${id} not found`);
        }
        return user;
    };

    @Get('/')
    getAuthor() {
        return { author: 'Medvid Roman' };
    };

    @Post('/users')
    @HttpCode(201)
    createUser(@Body() userData: CreateUserDto) {
        const { firstName, lastName, email, password } = userData;
        return dbService.createUser(firstName, lastName, email, password);
    };

    @Patch('/users/:id')
    updateUser(@Param('id') id: number, @Body() userData: CreateUserDto) {
        const { firstName, lastName, email, password } = userData;
        const updatedUser = dbService.updateUser(id, firstName, lastName, email, password);
        
        if (!updatedUser) {
            throw new NotFoundError(`User with id ${id} not found`);
        }
        return updatedUser;
    };

    @Delete('/users/:id')
    deleteUser(@Param('id') id: number) {
        const success = dbService.deleteUser(id);
        if (!success) {
            throw new NotFoundError(`User with id ${id} not found`);
        }
        return { message: 'User deleted successfully' };
    }
};

