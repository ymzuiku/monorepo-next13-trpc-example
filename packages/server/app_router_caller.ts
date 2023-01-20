import { appRouter } from "./app_router";
import { createContext } from "./context";

export const appRouterCaller = appRouter.createCaller(createContext);
