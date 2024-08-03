"use client";

import { getSession, signIn } from "next-auth/react";

export default async function Home() {
  const session = await getSession();

  return (
    <>
      <div>Home</div>
    </>
  );
}
