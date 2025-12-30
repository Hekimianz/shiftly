import UsersRepository from './users.repository';
import { User } from './user.entity';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    getAllUsers(): Promise<Partial<User>[]>;
    getByEmailOrNull(email: string): Promise<User | null>;
    create(data: Partial<User>): Promise<User>;
}
