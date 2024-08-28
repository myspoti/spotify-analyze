import { getMyProfile } from "@/app/lib/api";
import { getAuthSession } from "@/util/serverUtils";
import { redirect } from "next/navigation";
import { MyProfile } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export default async function Profile() {
  const session = await getAuthSession();
  if (!session) redirect("/login");

  const profile = (await getMyProfile({
    session,
  }).then((data) => data)) as MyProfile;

  return (
    <div className="flex">
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
  );
}
