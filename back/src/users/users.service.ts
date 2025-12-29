import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import UsersRepository from './users.repository';
import { User } from './user.entity';
import RegisterUserDto from './DTOs/register-user.dto';
import {
  InvalidCredentialsError,
  PasswordsDoNotMatchError,
  UserAlreadyExistsError,
} from './users.errors';
import LoginUserDto from './DTOs/login-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  public async getAllUsers(): Promise<User[]> {
    return await this.usersRepository.getAllUsers();
  }

  public async loginUser(dto: LoginUserDto): Promise<string> {
    try {
      return await this.usersRepository.loginUser(dto);
    } catch (err) {
      if (err instanceof InvalidCredentialsError) {
        throw new BadRequestException('No user found with given credentials');
      }
      throw new InternalServerErrorException('User authentication failed');
    }
  }

  public async registerUser(dto: RegisterUserDto): Promise<User> {
    try {
      return await this.usersRepository.registerUser(dto);
    } catch (err) {
      if (err instanceof UserAlreadyExistsError) {
        throw new ConflictException('Email already exists.');
      }
      if (err instanceof PasswordsDoNotMatchError) {
        throw new BadRequestException('Passwords do not match');
      }
      throw new InternalServerErrorException('User registration failed');
    }
  }
}
