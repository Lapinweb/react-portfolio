export default function Footer() {
    return (
        <footer className="footer">
            <nav className="p-5 w-full bg-primary text-primary-content shadow-lg">
                <p className="footer-title">Liens</p>
                <a
                    className="link link-hover"
                    href="https://www.linkedin.com/in/c%C3%A9line-sou-5932b413b/"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>
                <a
                    className="link link-hover"
                    href="https://github.com/Lapinweb/"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
            </nav>
        </footer>
    );
}
