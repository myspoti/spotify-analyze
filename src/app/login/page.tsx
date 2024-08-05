"use client";

import { signIn } from "next-auth/react";

export default function Home() {
  const handleLogin = () => {
    signIn("spotify", { callbackUrl: "http://localhost:3000" });
  };

  return <button onClick={handleLogin}>login login page</button>;
}
