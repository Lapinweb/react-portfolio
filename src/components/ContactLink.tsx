export default function ContactLink({
	name,
	url,
	isMail,
}: {
	name: string;
	url: string;
	isMail: boolean;
}) {
	const navUrl = isMail ? `mailto:${url}` : url;
	const shorterUrl = isMail ? url : url.split("//")[1];

	return (
		<div className="flex flex-wrap items-center w-full">
			<p className="w-full md:w-1/6 md:text-center">{name} :</p>
			<a
				href={navUrl}
				className="btn btn-secondary max-w-full"
				target="_blank"
			>
				<span className="w-full text-nowrap overflow-hidden whitespace-nowrap text-ellipsis">{shorterUrl}</span>
			</a>
		</div>
	);
}
