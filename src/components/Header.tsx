import Link from "next/link";

export default function Header() {
    return (
			<header className="sm:my-3 sm:mx-5 sm:w-fit bg-primary text-primary-content text-xl shadow-xl sm:rounded-box sticky sm:top-3 z-10">
				<nav className="navbar">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost sm:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg border border-solid border-primary"
						>
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
					</div>
					<ul
						tabIndex={0}
						className="menu menu-horizontal text-lg hidden sm:flex"
					>
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
