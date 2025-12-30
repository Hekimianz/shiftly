import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public async getAllUsers(): Promise<Partial<User>[]> {
    return await this.usersService.getAllUsers();
  }

  @Get('email')
  public async getByEmailOrNull(email: string): Promise<User> {
    return await this.usersService.getByEmailOrNull(email);
  }
}
