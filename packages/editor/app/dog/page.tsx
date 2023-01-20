"use client";

import { trpc } from "../trpc";

export default function Dog() {
  const hello = trpc.ping.useQuery({ id: "dog" });
  if (!hello.data) {
    return <div>loading...</div>;
  }
  return <div>dog:{hello.data.theId}</div>;
}
