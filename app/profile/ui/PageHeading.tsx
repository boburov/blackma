import { ReactNode } from "react";

export default function PageHeading({ children }: { children: ReactNode }) {
  return <h3 className="text-xl font-bold">{children}</h3>;
}
