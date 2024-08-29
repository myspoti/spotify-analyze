import { getMyProfile, getTrackRecommendations } from "@/app/lib/api";
import { getAuthSession } from "@/util/serverUtils";
import { redirect } from "next/navigation";
import { MyProfile, Track } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import TrackCards from "./TrackCards";

export default async function Profile({
  weekTopTrack,
}: {
  weekTopTrack: Track;
}) {
  const session = await getAuthSession();
  if (!session) redirect("/login");

  const profile = (await getMyProfile({
    session,
  }).then((data) => data)) as MyProfile;

  const trackFeatures = {
    // trackFeature 을 조절할 수 있게(아래 카테코리 조사 후 params 로 넘겨받을 수 있게 변경) 오늘의 기분 상태의 따라서
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
    weekTopTrack.id,
    trackFeatures
  );

  return (
    <div className="flex w-full">
      <div className="flex flex-col gap-10">
        {/* profile.href */}
        <Link href={profile.uri}>
          <Image
            alt="profile-img"
            src={profile.images[0].url}
            width={100}
            height={100}
          />
        </Link>
        <div className="text-15">{profile.display_name}</div>
      </div>

      {/* 추천 곡을 받고 그 곡에 대한 분석 */}
      <TrackCards tracks={recommendations} />
    </div>
  );
}
