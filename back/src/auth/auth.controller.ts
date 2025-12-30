import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import RegisterUserDto from './DTOs/register-user.dto';
import LoginUserDto from './DTOs/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  public async register(@Body() dto: RegisterUserDto): Promise<{
    message: string;
    user: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
    };
  }> {
    return await this.authService.register(dto);
  }

  @Post('login')
  public async login(@Body() dto: LoginUserDto): Promise<{
    message: string;
    access_token: string;
    user: {
      id: string;
      email: string;
      firstName: string;
      lastName: string;
    };
  }> {
    return await this.authService.login(dto);
  }
}
