"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User } from "lucide-react";

const NAV_ITEMS = [
    { path: "/", label: "Buyurtmalar", Icon: Home },
    { path: "/profile", label: "Profil", Icon: User },
];

const AUTH_ROUTES = ["/auth/login", "/auth/register", "/auth/forgot-password"];

export default function BottomNavigation() {
    const pathname = usePathname();

    const isAuthRoute = AUTH_ROUTES.some((route) =>
        pathname.startsWith(route)
    );

    if (isAuthRoute) return null;

    return (
        <>
            <nav className="container fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
                <div className="flex justify-around items-center h-16 pb-[env(safe-area-inset-bottom)]">
                    {NAV_ITEMS.map(({ path, label, Icon }) => {
                        const active = pathname === path;
                        return (
                            <Link
                                key={path}
                                href={path}
                                className="flex flex-col items-center gap-1 px-8 py-2 rounded-xl active:scale-95 active:bg-gray-50 transition-all duration-150 select-none"
                            >
                                <Icon
                                    size={24}
                                    strokeWidth={active ? 2.2 : 1.8}
                                    className={active ? "text-gray-900" : "text-gray-400"}
                                />
                                <span
                                    className={`text-[11px] tracking-wide ${active
                                        ? "text-gray-900 font-semibold"
                                        : "text-gray-400 font-medium"
                                        }`}
                                >
                                    {label}
                                </span>
                                <span
                                    className={`w-1 h-1 rounded-full bg-gray-900 transition-all duration-200 ${active ? "opacity-100 scale-100" : "opacity-0 scale-0"
                                        }`}
                                />
                            </Link>
                        );
                    })}
                </div>
            </nav>

            <div className="h-16" />
        </>
    );
}