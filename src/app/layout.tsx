import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Portfolio de Céline Sou",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={inter.className}>
                <div className="h-screen flex flex-col">
                    <Header />
                    <main className="m-2 grow">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
