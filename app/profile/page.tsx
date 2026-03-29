import Link from "next/link";
import PageHeading from "./ui/PageHeading";
import ProfileTopBar from "./ui/TopBar";
import { ChevronRight } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="space-y-2">
      <ProfileTopBar title="Profil" path="/" />
      <PageHeading>Shaxsiy kabinet</PageHeading>
      <div>
        <Link
          href="/profile/info"
          className="flex items-center justify-between py-4 border-b border-slate-200"
        >
          <p className="text-lg">Profilim</p>
          <p className="flex items-center gap-2">
            Ibrat <ChevronRight />
          </p>
        </Link>
        <Link
          href="/profile/orders"
          className="flex items-center justify-between py-4 border-b border-slate-200"
        >
          <p className="text-lg">Buyurtmalarim</p>
          <p className="flex items-center gap-2">
            0 <ChevronRight />
          </p>
        </Link>
      </div>

      <br />

      <PageHeading>Sozlamalar</PageHeading>
      <div>
        <Link
          href="#"
          className="flex items-center justify-between py-4 border-b border-slate-200"
        >
          <p className="text-lg">Til</p>
          <p className="flex items-center gap-2">
            O'zbekcha <ChevronRight />
          </p>
        </Link>
        <Link
          href="#"
          className="flex items-center justify-between py-4 border-b border-slate-200"
        >
          <p className="text-lg">Yordam</p>
          <p className="flex items-center gap-2">
            Telegram Support <ChevronRight />
          </p>
        </Link>
      </div>
    </div>
  );
}
