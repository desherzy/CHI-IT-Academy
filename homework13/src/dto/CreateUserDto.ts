import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MinLength(2, { message: 'First name is must be at least 2 characters long.' })
    firstName: string = '';

    @IsString()
    @MinLength(2, { message: 'Last name is must be at least 2 characters long.' })
    lastName: string = '';

    @IsEmail({}, { message: 'Email must be a valid email address.' })
    email: string = '';

    @IsString()
    @MinLength(6, { message: 'Password is must be at least 6 characters long.' })
    password: string = '';
}

