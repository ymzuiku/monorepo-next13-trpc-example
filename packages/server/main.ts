import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import fastify from "fastify";
import { appRouter } from "./app_router";
import { createContext } from "./context";

const server = fastify({
  maxParamLength: 5000,
});
server.register(fastifyTRPCPlugin, {
  prefix: "/v1",
  trpcOptions: { router: appRouter, createContext },
});

const start = async () => {
  const port = process.env.port ? Number(process.env.port) : 3001;
  console.log("listen: http://127.0.0.1:" + port);
  try {
    await server.listen({ port });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
