import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import RegisterUserDto from './DTOs/register-user.dto';
import LoginUserDto from './DTOs/login-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public async getAllUsers(): Promise<User[]> {
    return await this.usersService.getAllUsers();
  }

  @Post('login')
  public async loginUser(@Body() dto: LoginUserDto): Promise<string> {
    return this.usersService.loginUser(dto);
  }

  @Post('register')
  public async registerUser(@Body() dto: RegisterUserDto): Promise<User> {
    return await this.usersService.registerUser(dto);
  }
}
