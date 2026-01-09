import { Repository } from 'typeorm';
import { User } from './user.entity';
export default class UsersRepository {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    getAllUsers(): Promise<Partial<User>[]>;
    getByEmailOrNull(email: string): Promise<User | null>;
    getById(id: string): Promise<User | null>;
    create(data: Partial<User>): Promise<User>;
}
