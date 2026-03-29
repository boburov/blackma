import { inter } from '@/app/lib/fonts';


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