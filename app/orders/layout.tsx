import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./index.css";

export const inter = Inter({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});


export const metadata: Metadata = {
    title: "Blackma",
    description: "kurier page",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section
            className={`${inter.variable} antialiased`}>
            {children}
        </section>
    );
}
