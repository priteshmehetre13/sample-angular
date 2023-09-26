import { ILogger } from "./logger";

export const LegacyLogger: ILogger = {
  prefix: 'legacy root',
  log(message: string) {
    console.log(`${this.prefix} (legacy): ${message}`);
  }
}