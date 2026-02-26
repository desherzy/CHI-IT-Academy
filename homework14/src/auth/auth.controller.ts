import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    @ApiOperation({ summary: 'Register a new user' })
    register(@Body() registerDto: RegisterDto) {
        return this.authService.register(registerDto);
    };

    @Post('login')
    @ApiOperation({ summary: 'Login a user' })
    login(@Body() loginDto: RegisterDto) {
        return this.authService.login(loginDto.email, loginDto.password);
    };
};

