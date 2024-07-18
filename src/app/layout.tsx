import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	icons: {
		icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👩‍💻</text></svg>",
	},
	title: "Céline Sou",
	description: "Portfolio de Céline Sou",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" data-theme="cupcake">
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
