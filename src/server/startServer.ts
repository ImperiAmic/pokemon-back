import chalk from "chalk";
import app from "./app.js";

const startServer = (port: number) => {
  app.listen(port, () => {
    console.log("------------------------");
    console.log(chalk.bold.green(`🟢👂 Server listening on localhost:${port}`));
    console.log("------------------------");
  });
};

export default startServer;
