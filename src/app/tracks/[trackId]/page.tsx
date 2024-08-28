import { getTrackById } from "@/app/lib/api";
import TrackRecommendations from "@/components/TrackRecommendations";
import PlayTrackButton from "@/components/PlayTrackButton";
import { getAuthSession } from "@/util/serverUtils";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import DetailSong from "./_components/DetailSong";

interface Props {
  params: {
    trackId: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const session = await getAuthSession();
  if (!session) {
    return {
      title: "Error in loading track data",
    };
  }
  const trackId = params.trackId;
  const track = await getTrackById(session, trackId);

  return {
    title: `Spotify - ${track.name}`,
  };
}

export default async function DetailPage({ params }: Props) {
  const session = await getAuthSession();
  if (!session) redirect("/login");

  const trackId = params.trackId;
  const trackDetailData = await getTrackById(session, trackId);

  return (
    <>
      <DetailSong trackDetailData={trackDetailData} />
      <PlayTrackButton
        track={trackDetailData}
        variant="filled"
        className="mt-8 text-4xl h-14 w-14"
      />

      <TrackRecommendations trackId={trackId} />
    </>
  );
}
