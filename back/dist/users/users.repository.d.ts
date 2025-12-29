import { Repository } from 'typeorm';
import { User } from './user.entity';
import RegisterUserDto from './DTOs/register-user.dto';
import LoginUserDto from './DTOs/login-user.dto';
export default class UsersRepository {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    getAllUsers(): Promise<User[]>;
    loginUser(dto: LoginUserDto): Promise<string>;
    registerUser(dto: RegisterUserDto): Promise<User>;
}
