export interface ILogger {
    prefix: string;
    log: (mesage: string) => void;
}
