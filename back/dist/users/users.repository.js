"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const typeorm_2 = require("@nestjs/typeorm");
const users_errors_1 = require("./users.errors");
let UsersRepository = class UsersRepository {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async getAllUsers() {
        return await this.usersRepository.find();
    }
    async loginUser(dto) {
        const existingUser = await this.usersRepository.findOneBy({
            email: dto.email,
        });
        if (!existingUser)
            throw new users_errors_1.InvalidCredentialsError();
        if (dto.password !== existingUser.password)
            throw new users_errors_1.InvalidCredentialsError();
        return `Welcome back ${existingUser.firstName} ${existingUser.lastName}`;
    }
    async registerUser(dto) {
        const existingUser = await this.usersRepository.findOneBy({
            email: dto.email,
        });
        if (existingUser)
            throw new users_errors_1.UserAlreadyExistsError();
        if (dto.password !== dto.confirmPassword)
            throw new users_errors_1.PasswordsDoNotMatchError();
        const newUser = this.usersRepository.create({
            email: dto.email,
            firstName: dto.firstName,
            lastName: dto.lastName,
            password: dto.password,
        });
        return this.usersRepository.save(newUser);
    }
};
UsersRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UsersRepository);
exports.default = UsersRepository;
//# sourceMappingURL=users.repository.js.map