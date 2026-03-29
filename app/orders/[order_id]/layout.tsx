import { Inter } from 'next/font/google'

export const inter = Inter({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className={`${inter.variable} antialiased`}>
            {children}
        </section>
    );
}