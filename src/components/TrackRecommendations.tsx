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

  const trackFeatures = {
    acousticness: 1,
    danceability: 1,
    energy: 1,
    instrumentalness: 1,
    key: 1,
    liveness: 1,
    loudness: 1,
    mode: 1,
    speechiness: 1,
    tempo: 1,
    valence: 1,
  };

  const recommendations = await getTrackRecommendations(
    session,
    trackId,
    trackFeatures
  );

  return (
    <div className="mt-16">
      <h1>Recommendations</h1>
      <TrackCards tracks={recommendations} />
    </div>
  );
}
