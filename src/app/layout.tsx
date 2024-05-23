import React from "react";
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
        <html lang="fr" data-theme="winter">
            <body className={inter.className + " min-h-screen flex flex-col"}>
                <Header />

                <main className="prose max-w-none mx-2 my-5 grow text-base-content">
                    {children}
                </main>

                <Footer />
            </body>
        </html>
    );
}
