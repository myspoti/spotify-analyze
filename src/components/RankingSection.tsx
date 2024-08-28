import TrackCards from "@/components/TrackCards";
import Link from "next/link";
import { Album } from "lucide-react";
import Image from "next/image";
import { Track } from "@/types/types";

interface IProps {
  weekTopTracks: Track[];
  monthTopTracks: Track[];
  yearTopTracks: Track[];
}

export default function RankingSection({
  weekTopTracks,
  monthTopTracks,
  yearTopTracks,
}: IProps) {
  return (
    <section className="flex flex-col items-start">
      <h1 className="mt-8">Top Tracks</h1>
      <div className="grid w-full grid-cols-12 gap-4">
        {weekTopTracks.map((track) => (
          <Link
            href={`/tracks/${track.id}`}
            key={track.id}
            className="flex items-center justify-between col-span-4 pr-4 truncate rounded-md group/item bg-paper-600 hover:bg-paper-400"
          >
            <div className="flex items-center gap-4">
              {track.album.images.length > 0 ? (
                <Image
                  src={track.album.images[0].url}
                  alt={track.name}
                  width={72}
                  height={72}
                  className="object-cover h-full rounded-tl-md rounded-bl-md aspect-square"
                />
              ) : (
                <Album size={20} />
              )}
              <h3 className="font-semibold truncate">{track.name}</h3>
            </div>
            {/* <PlayTrackButton
          track={track}
          variant="filled"
          className="invisible w-12 h-12 text-3xl group/btn group-hover/item:visible"
        /> */}
          </Link>
        ))}
        <h1 className="mt-16">Time Capsule</h1>
        <div className="w-full flex">
          <TrackCards tracks={yearTopTracks} />
        </div>
      </div>
    </section>
  );
}
