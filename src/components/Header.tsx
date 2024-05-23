import Link from "next/link";

export default function Header() {
    return (
        <header className="px-2 py-5 columns-2 sm:gap-12 overflow-hidden bg-primary text-primary-content">
            <div className="sm:block">
                <Link href="/">Mon Portfolio</Link>
            </div>
            <nav className="hidden sm:flex justify-end gap-8">
                <Link href="/">A propos</Link>
                <Link href="/projects">Projets</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </header>
    );
}
