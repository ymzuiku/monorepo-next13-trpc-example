import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "server/app_router";

export const trpc = createTRPCReact<AppRouter>();
