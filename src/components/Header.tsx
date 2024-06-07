import Link from "next/link";

export default function Header() {
    return (
        <header className="sm:my-3 sm:mx-5 sm:w-fit bg-primary text-primary-content text-xl shadow-xl sm:rounded-box sticky top-3 sm:top-3 z-10">
            <nav className="navbar">
                <ul className="menu menu-horizontal text-lg">
                    <li>
                        <Link href="/">Accueil</Link>
                    </li>
                    <li>
                        <Link href="/projects">Mes projets</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
