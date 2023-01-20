import { z } from "zod";
import { t } from "../trpc";

export const ping = t.procedure.input(z.object({ id: z.string() })).query(({ input }) => {
  return { theId: input.id + " is id" };
});
