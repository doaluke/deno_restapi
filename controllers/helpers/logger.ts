import * as log from "https://deno.land/std/log/mod.ts";

await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG"),
  },
  loggers: {
    // configure default logger available via short-hand methods above
    default: {
      level: "DEBUG",
      handlers: ["console"],
    }
  },
});

const logger = log.getLogger()

export default logger;