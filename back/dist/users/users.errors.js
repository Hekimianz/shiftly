"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidCredentialsError = exports.PasswordsDoNotMatchError = exports.UserAlreadyExistsError = void 0;
class UserAlreadyExistsError extends Error {
}
exports.UserAlreadyExistsError = UserAlreadyExistsError;
class PasswordsDoNotMatchError extends Error {
}
exports.PasswordsDoNotMatchError = PasswordsDoNotMatchError;
class InvalidCredentialsError extends Error {
}
exports.InvalidCredentialsError = InvalidCredentialsError;
//# sourceMappingURL=users.errors.js.map