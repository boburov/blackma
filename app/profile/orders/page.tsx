// app/profile/orders/page.tsx
import { Suspense } from "react";
import ProfileOrdersContent from "./ui/ProfileOrdersContent";

export default function ProfileOrdersPage() {
  return (
    <Suspense fallback={<div>Yuklanmoqda...</div>}>
      <ProfileOrdersContent />
    </Suspense>
  );
}