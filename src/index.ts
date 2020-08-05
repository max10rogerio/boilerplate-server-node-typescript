import * as Express from "express";

import { Environment } from "./configs/Environment";
import { Logger } from "./configs/Logger";

const logger = new Logger("server");
const app = Express();

app.use(Express.json());

app.use("/", (req, res) => res.json({ message: "It's work!" }));

app.listen(Environment.PORT, () => {
  logger.debug(`App running on port: ${Environment.PORT}`);
});
