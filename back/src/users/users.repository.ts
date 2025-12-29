import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import RegisterUserDto from './DTOs/register-user.dto';
import {
  InvalidCredentialsError,
  PasswordsDoNotMatchError,
  UserAlreadyExistsError,
} from './users.errors';
import LoginUserDto from './DTOs/login-user.dto';

@Injectable()
export default class UsersRepository {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  public async getAllUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  public async loginUser(dto: LoginUserDto): Promise<string> {
    const existingUser = await this.usersRepository.findOneBy({
      email: dto.email,
    });
    if (!existingUser) throw new InvalidCredentialsError();
    if (dto.password !== existingUser.password)
      throw new InvalidCredentialsError();
    return `Welcome back ${existingUser.firstName} ${existingUser.lastName}`;
  }

  public async registerUser(dto: RegisterUserDto): Promise<User> {
    const existingUser = await this.usersRepository.findOneBy({
      email: dto.email,
    });
    if (existingUser) throw new UserAlreadyExistsError();
    if (dto.password !== dto.confirmPassword)
      throw new PasswordsDoNotMatchError();
    const newUser = this.usersRepository.create({
      email: dto.email,
      firstName: dto.firstName,
      lastName: dto.lastName,
      password: dto.password,
    });
    return this.usersRepository.save(newUser);
  }
}
