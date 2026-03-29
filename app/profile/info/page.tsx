import PageHeading from "../ui/PageHeading";
import ProfileTopBar from "../ui/TopBar";
import UpdateProfileInfoFunction from "./features/UpdateProfileInfoForm";

export default function ProfileInfoPage() {
  return (
    <div className="space-y-2">
      <ProfileTopBar title="Profil" path="/profile" />
      <PageHeading>Profil ma'lumotlari </PageHeading>
      <UpdateProfileInfoFunction />
    </div>
  );
}
