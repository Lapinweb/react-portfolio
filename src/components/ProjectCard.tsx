interface Project {
    title: string;
    description: string;
    githubLink: string;
    webLink: string;
    stack: Array<string>;
}

export default function ProjectCard({
    title,
    description,
    githubLink,
    webLink,
    stack,
}: Project) {
    return (
        <li className="p-0 m-0">
            <div className="mockup-window border border-base-content bg-secondary shadow-xl basis-full md:basis-5/12 text-secondary-content">
                <div className="p-2 bg-base-100 h-64 flex flex-col justify-between text-base-content">
                    <h2 className="my-1 h-14 text-center">{title}</h2>

                    <div className="flex flex-wrap gap-5">
                        <a
                            className="link link-info"
                            target="_blank"
                            href={githubLink}
                        >
                            Lien GitHub
                        </a>
                        {webLink.length > 0 ? (
                            <a
                                className="link link-info"
                                href={webLink}
                                target="_blank"
                            >
                                Lien site web
                            </a>
                        ) : null}
                    </div>

                    <p>{stack.join(" | ")}</p>

                    <div className="self-end m-3">
                        <button className="btn btn-wide btn-accent">
                            + Info
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
}
