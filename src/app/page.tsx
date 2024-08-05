import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <div>Home</div>
    </>
  );
}