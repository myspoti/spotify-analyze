import { redirect } from "next/navigation";
import { getTopItems } from "./lib/api";
import { Track } from "@/types/types";
import { getAuthSession } from "@/util/serverUtils";

export default async function Home() {
  const session = await getAuthSession();

  if (!session) {
    redirect("/login");
  }

  const allTimeTopTracks = (await getTopItems({
    session,
    limit: 10,
    timeRange: "long_term",
    type: "tracks",
  }).then((data) => data.items)) as Track[];

  console.log(allTimeTopTracks);

  return (
    <>
      <div>Home</div>
      <div className="">
        <section className="flex flex-col items-start">
          <h1 className="mt-8">Top Tracks</h1>
          <div className="grid w-full grid-cols-12 gap-4"></div>
        </section>
      </div>
    </>
  );
}
