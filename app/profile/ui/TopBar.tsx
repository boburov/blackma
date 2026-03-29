import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function ProfileTopBar({
  title,
  path,
}: {
  title: string;
  path: string;
}) {
  return (
    <div className="w-full flex items-center justify-between py-5">
      <div className="flex-1">
        <Link href={path}>
          <ChevronLeft size={28} />
        </Link>
      </div>
      <h2 className="font-bold text-2xl">{title}</h2>
      <div className="flex-1"></div>
    </div>
  );
}
