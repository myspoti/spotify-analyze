import { getTrackRecommendations } from "@/app/lib/api";
import TrackCards from "./TrackCards";
import { getAuthSession } from "@/util/serverUtils";

interface Props {
  trackId: string;
}

export default async function TrackRecommendations({ trackId }: Props) {
  const session = await getAuthSession();
  if (!session) {
    return null;
  }

  const recommendations = await getTrackRecommendations(session, trackId);

  return (
    <div className="mt-16">
      <h1>Recommendations</h1>
      <TrackCards tracks={recommendations} />
    </div>
  );
}
