import React from "react";
import ContactLink from "@/components/ContactLink";

export default function Contact() {
	return (
		<div className="flex flex-col items-center">
			<div className="mx-3">
				<h1 className="text-center">Me contacter</h1>
			</div>

			<div
				id="contact"
				className="w-11/12 md:w-3/4 mx-3 my-10 mockup-browser border border-base-content bg-secondary"
			>
				<div className="mockup-browser-toolbar text-secondary-content">
					<div className="sm:input sm:border sm:border-base-content w-full sm:text-base-content text-right sm:text-left"></div>
				</div>
				<div className="p-4 border-t border-base-content bg-base-100">
					<div className=" flex flex-col gap-2 mb-5">
						<h2 className="my-2">Coordonnées</h2>
						<ContactLink
							name="E-mail"
							url="celinesou77@gmail.com"
							isMail={true}
						/>
					</div>
					<div className=" flex flex-col gap-3">
						<h2 className="my-2">Liens</h2>
						<ContactLink
							name="Github"
							url="https://github.com/Lapinweb/"
							isMail={false}
						/>
						<ContactLink
							name="LinkedIn"
							url="https://www.linkedin.com/in/c%C3%A9line-sou-5932b413b/"
							isMail={false}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
