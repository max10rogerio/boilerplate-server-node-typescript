import { debug } from "debug";

export class Logger {
  static prefix = "app";
  debug: ReturnType<typeof debug>;

  constructor(namespace: string) {
    this.debug = debug(`${Logger.prefix}:${namespace}`);
  }
}
