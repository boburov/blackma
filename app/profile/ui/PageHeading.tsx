import { ReactNode } from "react";

export default function PageHeading({ children }: { children: ReactNode }) {
  return <h3 className="text-xl Raleway_Extrabold">{children}</h3>;
}
