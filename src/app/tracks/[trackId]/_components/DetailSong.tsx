import { Track } from "@/types/types";
import { fmtMSS } from "@/util/dateUtils";
import { Dot, Music } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DetailSong({
  trackDetailData,
}: {
  trackDetailData: Track;
}) {
  return (
    <>
      <div className="flex items-end gap-6">
        <>
          {trackDetailData.album.images &&
          trackDetailData.album.images.length > 0 ? (
            <Image
              src={trackDetailData.album.images[0].url}
              alt={trackDetailData.album.name}
              height={208}
              width={208}
              className="object-contain rounded-sm w-52 h-52"
              priority
            />
          ) : (
            <div className="w-full h-40">
              {/* bg-paper css 검토 */}
              <Music size={160} className="w-full h-full bg-paper" />
            </div>
          )}
          <div className="flex flex-col gap-3">
            <h5 className="text-xs font-bold uppercase">Song</h5>
            <h2 className="text-5xl font-bold">{trackDetailData.name}</h2>

            <div className="flex items-center text-sm">
              <Link
                href={`/artists/${trackDetailData.artists[0].id}`}
                className="font-bold hover:underline"
              >
                {trackDetailData.artists[0].name}
              </Link>
              <Dot />
              <Link
                href={`/albums/${trackDetailData.album.id}`}
                className="hover:underline"
              >
                {trackDetailData.album.name}
              </Link>
              <Dot />
              <span>
                {new Date(trackDetailData.album.release_date).getFullYear()}
              </span>
              <Dot />
              <span>{fmtMSS(trackDetailData.duration_ms)}</span>
            </div>
          </div>
        </>
      </div>
    </>
  );
}
