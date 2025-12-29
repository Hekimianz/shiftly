import UsersRepository from './users.repository';
import { User } from './user.entity';
import RegisterUserDto from './DTOs/register-user.dto';
import LoginUserDto from './DTOs/login-user.dto';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    getAllUsers(): Promise<User[]>;
    loginUser(dto: LoginUserDto): Promise<string>;
    registerUser(dto: RegisterUserDto): Promise<User>;
}
