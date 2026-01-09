import { Injectable, NotFoundException } from '@nestjs/common';
import UsersRepository from './users.repository';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  public async getAllUsers(): Promise<Partial<User>[]> {
    return await this.usersRepository.getAllUsers();
  }

  public async getByEmailOrNull(email: string): Promise<User> {
    return await this.usersRepository.getByEmailOrNull(email);
  }

  public async getById(id: string): Promise<User> {
    const user = await this.usersRepository.getById(id);
    if (!user) throw new NotFoundException('Invalid user id');
    return user;
  }

  public async create(data: Partial<User>): Promise<User> {
    return await this.usersRepository.create(data);
  }
}
