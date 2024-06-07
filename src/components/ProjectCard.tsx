"use client";

interface Project {
    title: string;
    description: string;
    githubLink: string;
    webLink: string;
    stack: Array<string>;
    modalId: string;
}

export default function ProjectCard(project : Project) {
    const {title, description, githubLink, webLink, stack, modalId,} = project;
   
    return (
        <li className="p-0 m-0">
            <div className="mockup-window border border-base-content bg-secondary basis-full md:basis-5/12 text-secondary-content">
                <div className="p-2 bg-base-100 h-fit sm:h-96 flex flex-col justify-between text-base-content border-t border-base-content">
                    <h2 className="my-1 h-24 text-center">{title}</h2>

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
                        <button
                            onClick={() => handleShowModal(modalId)}
                            className="btn btn-accent sm:btn-wide"
                        >
                            + Détails
                        </button>
                    </div>
                    <ProjectModal key={modalId} {...project} />
                </div>
            </div>
        </li>
    );
}

function handleShowModal(id : string) {
    if (document) {
        (document.getElementById(id) as HTMLFormElement).showModal();
    }
}

function ProjectModal({ title, description, githubLink, webLink, stack, modalId } : Project) {
    let splitDescription = description.split("\n");
    return (
        <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box sm:w-11/12">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                </form>
                <h3 className="font-bold text-lg">{title}</h3>
                <p>{stack}</p>
                {splitDescription.map((paragraph, i) => {
                    return <p key={`paragraph${i}`}>{paragraph}</p>;
                })}
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
}
