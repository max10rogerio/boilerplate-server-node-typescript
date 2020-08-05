import * as dotenv from "dotenv";

dotenv.config();

export class Environment {
  static PORT = parseInt(process.env?.PORT ?? "4000");
}
