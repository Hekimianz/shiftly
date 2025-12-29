import { UsersService } from './users.service';
import { User } from './user.entity';
import RegisterUserDto from './DTOs/register-user.dto';
import LoginUserDto from './DTOs/login-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<User[]>;
    loginUser(dto: LoginUserDto): Promise<string>;
    registerUser(dto: RegisterUserDto): Promise<User>;
}
