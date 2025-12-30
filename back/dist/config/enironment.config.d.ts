export interface EnvironmentVariables {
    port: number;
    jwt_secret: string;
}
export declare const environmentVariables: (() => EnvironmentVariables) & import("@nestjs/config").ConfigFactoryKeyHost<EnvironmentVariables>;
