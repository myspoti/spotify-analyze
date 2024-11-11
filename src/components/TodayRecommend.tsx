import { Track } from "@/types/types";
import TrackCards from "./TrackCards";
import { getGetRecommendations, getTrackRecommendations } from "@/app/lib/api";
import { getAuthSession } from "@/util/serverUtils";
import { redirect } from "next/navigation";

export default async function TodayRecommendSong({
  monthTopTrack,
}: {
  monthTopTrack: Track;
}) {
  const session = await getAuthSession();
  if (!session) redirect("/login");

  const recommendations = await getGetRecommendations(
    session
    // monthTopTrack.id,
    // trackFeatures
  );

  return <>{/* <TrackCards tracks={recommendations} /> */}</>;
}
