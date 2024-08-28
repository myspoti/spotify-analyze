import { getMyProfile } from "@/app/lib/api";
import { getAuthSession } from "@/util/serverUtils";
import { redirect } from "next/navigation";
import { MyProfile } from "@/types/types";

export default async function Profile() {
  const session = await getAuthSession();
  if (!session) redirect("/login");

  const profile = (await getMyProfile({
    session,
  }).then((data) => data)) as MyProfile;

  return <div>{profile.display_name}</div>;
}
