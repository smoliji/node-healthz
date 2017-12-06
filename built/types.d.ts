export declare enum Adapter {
    KNEX = "KNEX",
    MONGOOSE = "MONGOOSE",
}
export declare enum Health {
    OK = "OK",
    NOT_OK = "NOT_OK",
    UNKNOWN = "UNKNOWN",
    TIMEOUT = "TIMEOUT",
    ERROR = "ERROR",
}
export interface AdapterOptions {
    type?: Adapter;
    adapter?: any;
    crucial?: boolean;
    customCheck?: (AdapterOptions) => Promise<boolean>;
    timeout?: number;
}
export interface AdapterResult {
}
export interface HealthzDef {
    [key: string]: AdapterOptions;
}
export interface HealthzOptions {
    timeout?: number;
}
