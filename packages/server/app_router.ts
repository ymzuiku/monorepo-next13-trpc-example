import { ping } from "./services/ping";
import { userById } from "./services/userById";
import { t } from "./trpc";

export const appRouter = t.router({
  userById,
  ping,
});

export type AppRouter = typeof appRouter;
