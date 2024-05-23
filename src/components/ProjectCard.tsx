interface Project {
    title: string;
    description: string;
    githubLink: string;
    webLink: string;
    stack: Array<string>;
}

export default function ProjectCard({ title, description, githubLink, webLink, stack }: Project) {
    return (
        <li className="p-2 overflow-hidden border-4 border-double border-secondary">
            <h2 className="mt-2 text-center">{title}</h2>
            <a className="project-github" target="_blank" href={githubLink}>
                Lien GitHub
            </a>
            {webLink.length > 0 ? (
                <a href={webLink} target="_blank" className="project-website">
                    Lien site web
                </a>
            ) : null}
            <p className="project-stack">{stack.join(" | ")}</p>
            <p className="project-description">{description}</p>
        </li>
    );
}
