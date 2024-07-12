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
			"Projet solo de ma formation, à partir d'une maquette.\n\nIntégrer une page de site responsive en HTML et CSS.",
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
		title: "Test",
		description: "blablabla",
		githubLink: "fauxliengithub",
		webLink: "fauxlienweb",
		stack: ["HTML", "CSS", "Javascript"],
		images: [],
	},
	{
		title: "Test",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod risus vitae turpis vestibulum sagittis. Curabitur nulla neque, interdum nec metus ac, accumsan faucibus mauris. Nullam euismod enim ut dolor pellentesque congue. Praesent tempor purus nec dolor suscipit, eu sollicitudin elit facilisis. Etiam libero orci, malesuada quis sapien non, imperdiet interdum mauris. Vivamus id feugiat mi. Donec pellentesque mauris sed urna cursus maximus. Quisque tincidunt porta nisl, quis tempor arcu tempor sit amet. Proin sagittis, diam in cursus placerat, metus felis lobortis lectus, eu accumsan justo sem nec velit. Donec in sem hendrerit, placerat mi ut, viverra ex. Sed a dolor id nisl lobortis molestie laoreet in eros.\nSed lectus augue, elementum nec tempor nec, volutpat a odio. In eget tristique dolor, et pharetra felis. Curabitur finibus diam gravida, tempus sem id, luctus arcu. Suspendisse pretium turpis nec augue viverra, a varius elit commodo. Donec et faucibus ligula, sit amet dignissim risus. Nullam auctor fermentum tincidunt. Phasellus ac vestibulum felis, a blandit libero. Praesent dapibus aliquet elit sit amet tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;\nante dapibus convallis. Donec in accumsan enim. Donec ut ante dignissim, sodales ex vel, hendrerit nisi. Donec a mauris quis diam hendrerit dignissim. Nunc facilisis nisl ac lacus rutrum posuere. Duis eget convallis arcu. Proin non velit consequat, dignissim augue id, auctor lorem. Maecenas ut velit vel lorem tincidunt aliquet a nec ipsum. Ut varius nunc vitae mauris gravida faucibus. Mauris hendrerit massa massa, a iaculis felis efficitur sed. Phasellus congue lectus sit amet elit congue, eu congue ante bibendum.\nDonec feugiat risus justo, id consectetur sem congue ac. Cras eleifend venenatis dui sed porttitor. Phasellus consectetur bibendum urna vel egestas. Donec eu neque nisi. In auctor nunc a elit eleifend bibendum. Ut leo mauris, ultrices et tincidunt et, semper fringilla sapien. Phasellus porta massa justo, sed tincidunt est vulputate non. Nulla eget efficitur leo, a volutpat urna. Donec viverra magna ut interdum tincidunt. Morbi eget mi imperdiet, facilisis ante at, efficitur purus. Vivamus felis dolor, consequat a lectus malesuada, pretium hendrerit felis. Maecenas ornare elementum condimentum. Nullam eget ex ultricies, ornare quam sit amet, interdum sapien. Sed pretium vestibulum sapien. Suspendisse quam ligula, gravida ut ipsum eget, fermentum ultrices ante.\nDuis sit amet nulla tincidunt, molestie ligula non, sodales massa. Cras vestibulum lacus odio, vitae ornare lectus dapibus in. Donec eros libero, cursus vitae mollis id, egestas in leo. Aenean a condimentum nisi. Sed nunc sem, posuere congue sagittis eu, tempor in ligula. Integer vitae nisl dolor. Pellentesque turpis neque, blandit quis dui non, faucibus cursus mi. Nullam faucibus, ipsum dignissim consequat feugiat, orci risus commodo magna, nec pulvinar tortor tortor eu metus. Cras mattis vehicula augue, a ornare ex porttitor eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas in elementum elit. Integer quis molestie ante.",
		githubLink: "fauxliengithub",
		webLink: "fauxlienweb",
		stack: ["HTML", "CSS", "Javascript"],
		images: [],
	},
	{
		title: "Test",
		description: "blablabla",
		githubLink: "fauxliengithub",
		webLink: "fauxlienweb",
		stack: ["HTML", "CSS", "Javascript"],
		images: [],
	},
];
