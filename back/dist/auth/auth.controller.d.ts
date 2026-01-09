import { AuthService } from './auth.service';
import RegisterUserDto from './DTOs/register-user.dto';
import LoginUserDto from './DTOs/login-user.dto';
import { User } from 'src/users/user.entity';
interface RequestWithUser {
    user: User;
}
interface UserResponse {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: RegisterUserDto): Promise<{
        message: string;
        user: UserResponse;
    }>;
    login(dto: LoginUserDto): Promise<{
        message: string;
        access_token: string;
    }>;
    getCurrentUser(req: RequestWithUser): UserResponse;
}
export {};
