import { inferProcedureInput } from "@trpc/server";
import { expect, it } from "vitest";
import { AppRouter } from "../app_router";
import { appRouterCaller } from "../app_router_caller";

type Input = inferProcedureInput<AppRouter["ping"]>;

it("test ping", async () => {
  const input: Input = {
    id: "dog",
  };

  const post = await appRouterCaller.ping(input);
  expect(post.theId).eq("dog is id");
});
