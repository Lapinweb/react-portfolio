export interface Project {
	title: string;
	description: string;
	githubLink: string;
	webLink: string;
	stack: Array<string>;
	images: Array<{ url: string; alt: string }>;
}

export const projects: Project[] = [
	{
		title: "Page d'accueil d'un site de réservations",
		description:
			"Projet solo durant ma formation chez OpenClassrooms, à partir d'une maquette.\n\nIntégrer une page de site responsive en HTML et CSS.",
		githubLink: "https://github.com/Lapinweb/CelineSou_2_08022021",
		webLink: "https://lapinweb.github.io/CelineSou_2_08022021/",
		stack: ["HTML", "CSS"],
		images: [
			{
				url: "/projects/reservia-1.png",
				alt: "Page d'accueil du site",
			},
			{
				url: "/projects/reservia-2.png",
				alt: "Page d'accueil du site mobile",
			},
		],
	},
	{
		title: "Site mobile de réservation d'un restaurant",
		description:
			"Projet solo durant ma formation chez OpenClassrooms.\nA partir des maquettes fournis mobile et desktop, j'ai développé un site responsive et “mobile first”, qui répertorie les menus de restaurants gastronomiques. J'y ai ajouté des animations CSS : une pour le chargemant de la page, des animations quand on survole un élément ou quand on met un \"like\" sur un menu.",
		githubLink: "https://github.com/Lapinweb/CelineSou_3_05032021",
		webLink: "https://lapinweb.github.io/CelineSou_3_05032021/",
		stack: ["HTML", "CSS", "Sass"],
		images: [
			{
				url: "/projects/ohmyfood-1.png",
				alt: "Page d'accueil sur desktop",
			},
			{
				url: "/projects/ohmyfood-2.png",
				alt: "Page menu d'un restaurant sur desktop",
			},
			{ url: "/projects/ohmyfood-3.png", alt: "Page d'accueil mobile" },
			{
				url: "/projects/ohmyfood-4.png",
				alt: "Page menu d'un restaurant mobile",
			},
		],
	},
	{
		title: "Frontend d’un site e-commerce",
		description:
			"Projet solo durant ma formation chez OpenClassrooms. L'objectif était de créer le front-end d'un site e-commerce\nAvec la partie back-end qui m'a été fournie, j'ai créé un MVP du site avec plusieurs fonctionnalités : afficher la liste des produits et les infos d'un produit, mise en place d'un panier grace à LocalStorage et d'un formulaire pour valider l'achat. Je n'ai pas utilisé de framework pout le front mais j'ai utilisé Bootstrap pour le CSS.\nLe site n'est pas déployé.",
		githubLink: "https://github.com/Lapinweb/CelineSou_5_11062021",
		webLink: "",
		stack: ["HTML", "CSS", "Javascript", "Bootstrap"],
		images: [
			{
				url: "/projects/orinoco-frontend-1.png",
				alt: "Page de liste de produits",
			},
			{
				url: "/projects/orinoco-frontend-2.png",
				alt: "Page des détails d'un produit",
			},
			{ url: "/projects/orinoco-frontend-3.png", alt: "Page du panier" },
		],
	},
	{
		title: "API d'un site d'avis gastronomique",
		description: "",
		githubLink: "https://github.com/Lapinweb/CelineSou_6_15072021",
		webLink: "",
		stack: ["HTML", "CSS", "NodeJS/Express", "MongoDB/Mongoose"],
		images: [],
	},
	{
		title: "Réseau social interne d'entreprise",
		description: "Front end et back end",
		githubLink: "https://github.com/Lapinweb/CelineSou_P7_08082021",
		webLink: "",
		stack: ["HTML", "CSS", "Vue.js 3", "MySQL/Sequelize"],
		images: [
			{
				url: "/projects/groupomania-1.png",
				alt: "Page connexion",
			},
			{
				url: "/projects/groupomania-2.png",
				alt: "Page liste de posts",
			},
			{
				url: "/projects/groupomania-3.png",
				alt: "Page créer un nouveau post",
			},
			{
				url: "/projects/groupomania-4.png",
				alt: "Ajouter un commentaire",
			},
			{
				url: "/projects/groupomania-5.png",
				alt: "Page profile",
			},
		],
	},
	{
		title: "Jeu sur Pico-8: Heal'em'up",
		description:
			"Projet collectif durant ma formation chez Ada Tech School.\n\nL'objectif était de créer un jeu sur Pico-8 en 2 semaines. Nous avons créé un jeu de tir ou au lieu d'attaquer des personnes, nous les soignons.",
		githubLink: "https://github.com/Lapinweb/healthemup",
		webLink: "https://lapinweb.github.io/healthemup/",
		stack: ["Pico-8", "Lua"],
		images: [
			{
				url: "/projects/healemup-1.png",
				alt: "Menu de démarrage du jeu",
			},
		],
	},
	{
		title: "Site sur Rick and Morty",
		description:
			"Projet collectif durant ma formation chez OpenClassrooms.\n\nL'objectif était de développer une application web qui permette de visualiser des données de façon dynamique en 2 semaines. Mon équipe a choisi d'utiliser l'API publique de Rick et Morty (https://rickandmortyapi.com/). \n\nLe projet est déployé sur GitHub Pages.",
		githubLink: "https://github.com/Lapinweb/projet-collectif-dataviz",
		webLink: "https://lapinweb.github.io/projet-collectif-dataviz/",
		stack: ["HTML", "CSS", "Javascript"],
		images: [
			{
				url: "/projects/rickandmorty-1.png",
				alt: "Page liste de personnages",
			},
			{
				url: "/projects/rickandmorty-2.png",
				alt: "Page d'accueil avec boutons page aléatoire",
			},
			{
				url: "/projects/rickandmorty-3.png",
				alt: "Page d'un personnage",
			},
			{
				url: "/projects/rickandmorty-4.png",
				alt: "Page liste d'épisodes",
			},
		],
	},
	{
		title: "Extension de navigateur",
		description:
			"Projet collectif durant ma formation chez Ada Tech School.\n\nL'objectif était de créer une extension de navigateur pour Chrome en 2 semaines. Nous avons choisi de faire une extension de traduction, en ouvrant une fenêtre avec des champs à remplir ou en surlignant du texte sur un site directement.",
		githubLink:
			"https://github.com/Lapinweb/projet-collectif-extension-de-navigateur-celine-eric-marie",
		webLink: "",
		stack: ["HTML", "CSS", "Javascript"],
		images: [],
	},
	{
		title: "Réseau social PHP",
		description:
			"Projet collectif durant ma formation chez Ada Tech School.\n\nNous avons récupérer un code existant en PHP et nous devions le continuer de le développer.",
		githubLink:
			"https://github.com/Lapinweb/projet-collectif-reseau-social-php-reseau-social_marine-marjolene-celine",
		webLink: "",
		stack: ["HTML", "CSS", "PHP"],
		images: [],
	},
	{
		title: "Site de vente de meuble",
		description:
			"Projet collectif durant ma formation chez Ada Tech School.\n\nRéparties en deux équipes, nous devions mettre en place le front-end et back-end d'une application.\n\nLe site n'est pas déployé.",
		githubLink:
			"https://github.com/Lapinweb/projet-collectif-reseau-social-php-reseau-social_marine-marjolene-celine",
		webLink: "",
		stack: ["ReactJS/TailwindCSS", "Python/Django"],
		images: [],
	},
];
