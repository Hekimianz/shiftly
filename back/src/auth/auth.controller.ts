import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import RegisterUserDto from './DTOs/register-user.dto';
import LoginUserDto from './DTOs/login-user.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { User } from 'src/users/user.entity';

interface RequestWithUser {
  user: User;
}

interface UserResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  public async register(@Body() dto: RegisterUserDto): Promise<{
    message: string;
    user: UserResponse;
  }> {
    return await this.authService.register(dto);
  }

  @Post('login')
  public async login(@Body() dto: LoginUserDto): Promise<{
    message: string;
    access_token: string;
  }> {
    return await this.authService.login(dto);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  public getCurrentUser(@Request() req: RequestWithUser): UserResponse {
    return {
      id: req.user.id,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      email: req.user.email,
    };
  }
}
