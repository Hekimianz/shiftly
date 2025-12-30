import { Injectable } from '@nestjs/common';
import UsersRepository from './users.repository';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  public async getAllUsers(): Promise<Partial<User>[]> {
    return await this.usersRepository.getAllUsers();
  }

  public async getByEmailOrNull(email: string): Promise<User | null> {
    return await this.usersRepository.getByEmailOrNull(email);
  }

  public async create(data: Partial<User>): Promise<User> {
    return await this.usersRepository.create(data);
  }
}
