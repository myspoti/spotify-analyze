import { redirect } from "next/navigation";
import { getTopItems } from "./lib/api";
import { Track } from "@/types/types";
import { getAuthSession } from "@/util/serverUtils";
import Profile from "@/components/Profile";
import RankingSection from "@/components/RankingSection";
import TodayRecommend from "@/components/TodayRecommend";
import TrackRecommendations from "@/components/TrackRecommendations";

export default async function Home() {
  const session = await getAuthSession();
  if (!session) redirect("/login");

  const monthTopTracks = await getTopItems({
    session,
    limit: 10,
    timeRange: "short_term",
    type: "tracks",
  }) as Track[];

  const halfYearTopTracks = await getTopItems({
    session,
    limit: 10,
    timeRange: "medium_term",
    type: "tracks",
  }) as Track[];  

  const yearTopTracks = await getTopItems({
    session,
    limit: 10,
    timeRange: "long_term",
    type: "tracks",
  }) as Track[];

  //profile
  // 사용자 정보, 팔로우 목록, 상ㅟ
  // input 조절에따라서 추천 (곡,플리) 생성, 변경

  //rank => detail page
  //song recommend

  return (
    <div>
      <Profile />
      <TodayRecommend monthTopTrack={monthTopTracks[0]} />
      <RankingSection
        yearTopTracks={yearTopTracks}
        monthTopTracks={monthTopTracks}
        halfYearTopTracks={halfYearTopTracks}
      />
      {/* <TrackRecommendations trackId={""}/> */}
    </div>
  );
}
