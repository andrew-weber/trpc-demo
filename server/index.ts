import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { z } from "zod";
import { publicProcedure, router } from "./trpc";

const appRouter = router({
  userList: publicProcedure.input(z.string()).query((opts) => {
    const { input } = opts;
    const users = [input, "456"];
    return users;
  }),
});

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);

export type AppRouter = typeof appRouter;
