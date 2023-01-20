import { z } from "zod";
import { t } from "../trpc";

interface User {
  id: string;
  name: string;
}

const userList: User[] = [
  {
    id: "1",
    name: "KATT",
  },
];

export const userById = t.procedure.input(z.object({ id: z.string() })).query((req) => {
  const { input } = req;
  const user = userList.find((u) => u.id === input.id);
  return user;
});
