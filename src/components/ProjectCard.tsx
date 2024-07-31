"use client";
import { Project } from "@/assets/projectsData";
import Image from "next/image";

interface OneProject extends Project {
	modalId: string;
}

export default function ProjectCard(props: OneProject) {
	const { title, description, githubLink, webLink, stack, modalId, images } =
		props;

	return (
		<li className="p-0 m-0">
			<div className="mockup-window border border-base-content bg-secondary basis-full md:basis-5/12 text-secondary-content">
				<div className="p-2 bg-base-100 h-fit flex flex-col justify-between text-base-content border-t border-base-content">
					<div className="h-24 flex justify-center items-center">
						<h2 className="my-0 text-center">{title}</h2>
					</div>

					<div className="divider my-0"></div>

					<div className="h-64 flex justify-center items-center relative">
						{images.length === 0 ? (
							<div className="text-wrap text-center">
								<p>{stack.join(" | ")}</p>
							</div>
						) : (
							<Image
								className=" object-contain m-0"
								src={images[0].url}
								alt=""
								loading="lazy"
								fill
							/>
						)}
					</div>
					<div className="self-end m-3">
						<button
							onClick={() => handleShowModal(modalId)}
							className="btn btn-accent sm:btn-wide"
						>
							+ Détails
						</button>
					</div>
					<ProjectModal key={modalId} {...props} />
				</div>
			</div>
		</li>
	);
}

function handleShowModal(id: string) {
	if (document) {
		(document.getElementById(id) as HTMLFormElement).showModal();
	}
}

function ProjectModal({
	title,
	description,
	githubLink,
	webLink,
	stack,
	modalId,
	images,
}: OneProject) {
	let splitDescription = description.split("\n");
	return (
		<dialog id={modalId} className="modal modal-bottom sm:modal-middle">
			<div className="modal-box sm:w-10/12 sm:max-w-5xl">
				<form method="dialog">
					<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
						✕
					</button>
				</form>
				<h3 className="font-bold text-lg">{title}</h3>
				<p>{stack.join(" | ")}</p>
				{splitDescription.map((paragraph, i) => {
					return <p key={`paragraph${i}`}>{paragraph}</p>;
				})}
				<div className="flex flex-wrap gap-5">
					<a className="link link-info" target="_blank" href={githubLink}>
						Lien GitHub
					</a>
					{webLink.length > 0 ? (
						<a className="link link-info" href={webLink} target="_blank">
							Lien site web
						</a>
					) : null}
				</div>
				{images.length != 0 ? (
					<div className="flex flex-col justify-between">
						{images.map((img, i) => {
							return (
								<div
									key={`projectImg-${i}`}
									className="my-4 flex flex-col"
								>
									{i != 0 ? <div className="divider"></div> : null}
									<h4>{img.alt}</h4>
									<a
										href={img.url}
										target="_blank"
										className="block h-80 w-full self-center relative"
									>
										<Image
											className="object-contain mt-0"
											src={img.url}
											alt={img.alt}
											loading="lazy"
											fill
										/>
									</a>
								</div>
							);
						})}
					</div>
				) : null}
			</div>
			<form method="dialog" className="modal-backdrop">
				<button>close</button>
			</form>
		</dialog>
	);
}
