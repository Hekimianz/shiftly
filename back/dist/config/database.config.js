"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const config_1 = require("@nestjs/config");
const user_entity_1 = require("../users/user.entity");
exports.typeOrmConfig = (0, config_1.registerAs)('database', () => ({
    type: 'postgres',
    url: process.env.DB_URL,
    ssl: {
        rejectUnauthorized: false,
    },
    autoLoadEntities: true,
    synchronize: true,
    dropSchema: Number(process.env.DB_DROP) === 1,
    entities: [user_entity_1.User],
}));
//# sourceMappingURL=database.config.js.map