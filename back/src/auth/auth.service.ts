import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import RegisterUserDto from './DTOs/register-user.dto';
import * as bcrypt from 'bcrypt';
import LoginUserDto from './DTOs/login-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  public async register(dto: RegisterUserDto): Promise<{
    message: string;
    user: { id: string; firstName: string; lastName: string; email: string };
  }> {
    if (dto.password !== dto.confirmPassword) {
      throw new BadRequestException('Passwords do not match.');
    }
    const existing = await this.usersService.getByEmailOrNull(dto.email);
    if (existing) throw new ConflictException('Email is already registered.');

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const newUser = await this.usersService.create({
      firstName: dto.firstName,
      lastName: dto.lastName,
      email: dto.email,
      password: hashedPassword,
    });

    return {
      message: 'User registered successfully',
      user: {
        id: newUser.id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
      },
    };
  }

  public async login(dto: LoginUserDto): Promise<{
    message: string;
    access_token: string;
  }> {
    const { email, password } = dto;
    const user = await this.usersService.getByEmailOrNull(email);
    if (!user || !user.isActive)
      throw new BadRequestException('Invalid email or password');

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword)
      throw new BadRequestException('Invalid email or password');

    const payload = {
      sub: user.id,
      email: user.email,
    };

    const accessToken = await this.jwtService.signAsync(payload);

    return {
      message: 'Login successfull',
      access_token: accessToken,
    };
  }
}
