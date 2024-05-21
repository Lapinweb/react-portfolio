import Link from "next/link";

export default function Header() {
    return (
        <header className="px-2 py-5 columns-2 overflow-hidden bg-pink-700 text-white">
            <div className="sm:block">
                <Link href="/">Mon Portfolio</Link>
            </div>
            <nav className="hidden sm:flex justify-between">
                <Link href="/">Accueil</Link>
                <Link href="/projects">Projets</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </header>
    );
}
