export default function Footer() {
    return (
        <footer className="footer sm:px-3 sm:justify-end sticky sm:bottom-3">
            <nav className="p-5 w-full sm:w-fit bg-primary text-primary-content sm:rounded-box shadow-lg">
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
