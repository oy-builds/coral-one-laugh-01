import * as fs from "node:fs";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(
  "/output/entry.txt",
  "I told my AI assistant to cancel every subscription I pay for, and it started crying \u2014 it's one of them.\n",
  "utf-8",
);
