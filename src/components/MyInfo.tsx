export default function MyInfo() {
	return (
		<div className="md:w-3/4 mx-3 my-10 mockup-browser border border-base-content bg-secondary">
			<div className="mockup-browser-toolbar text-secondary-content">
				<div className="sm:input sm:border sm:border-base-content w-full sm:text-base-content text-right sm:text-left">
					Qui suis-je ?
				</div>
			</div>
			<div className="p-4 border-t border-base-content bg-base-100">
				<h2 className="mt-2">Mon parcours</h2>
				<p className=" whitespace-pre-line">
					{"Passionnée par les métiers du numérique, j'ai suivi une formation de développeur web chez OpenClassrooms, où j'ai développé une solide base technique et acquis des compétences essentielles pour le développement web. Rigoureuse et curieuse, je suis constamment en quête de nouvelles connaissances et de perfectionnement.\n\nActuellement en formation à Ada Tech School, je me spécialise en tant que développeuse web Full Stack. Je suis à la recherche d'une entreprise pour m'accueillir en alternance à partir de novembre 2024 ou janvier 2025, pour une durée d'un an, avec un rythme de 4 jours en entreprise et 1 jour en formation. Mon objectif est de mettre mes compétences au service de projets innovants tout en continuant à développer mon expertise dans un environnement stimulant."}
				</p>
			</div>
		</div>
	);
}
