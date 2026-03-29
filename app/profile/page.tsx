import PageHeading from "./ui/PageHeading";
import ProfileTopBar from "./ui/TopBar";

export default function ProfilePage() {
  return (
    <div className="space-y-2">
      <ProfileTopBar title="Profil" path="/" />
      <PageHeading>Shaxsiy kabinet</PageHeading>
      <p>Profile page</p>
    </div>
  );
}
