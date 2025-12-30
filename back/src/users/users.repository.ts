import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export default class UsersRepository {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  public async getAllUsers(): Promise<Partial<User>[]> {
    return await this.usersRepository.find({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
      },
    });
  }

  public async getByEmailOrNull(email: string): Promise<User | null> {
    const foundUser = await this.usersRepository.findOneBy({ email });
    if (!foundUser) return null;
    return foundUser;
  }

  public async create(data: Partial<User>): Promise<User> {
    const newUser = this.usersRepository.create(data);
    return this.usersRepository.save(newUser);
  }
}
