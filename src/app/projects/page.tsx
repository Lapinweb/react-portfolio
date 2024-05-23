import React from "react";
import ProjectCard from "@/components/ProjectCard";

interface Project {
    title: string;
    description: string;
    githubLink: string;
    webLink: string;
    stack: Array<string>;
}

const projects : Project[] = [
    {
        title: "Test",
        description: "blablabla",
        githubLink: "fauxliengithub",
        webLink: "fauxlienweb",
        stack: ["HTML", "CSS", "Javascript"],
    },
    {
        title: "Site mobile de réservation d'un restaurant",
        description: "Ceci n'est pas une description",
        githubLink: "https://github.com/Lapinweb/CelineSou_3_05032021",
        webLink: "https://lapinweb.github.io/CelineSou_3_05032021/",
        stack: ["HTML", "CSS", "Sass"],
    },
    {
        title: "Frontend d’un site e-commerce",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius tristique urna, id porttitor erat tristique at. Praesent diam tortor, posuere eget finibus ac, feugiat vitae quam. Quisque at semper lacus, vel tristique nibh. Vestibulum a sem lectus. Quisque faucibus ipsum id nisl convallis finibus. Morbi odio arcu, mattis quis pharetra sed, tempor in sem. Phasellus cursus nibh sit amet nisi mattis egestas. Mauris rhoncus nisi ac dictum laoreet. Mauris tristique sem in diam mollis efficitur. In sit amet leo egestas, luctus neque non, consequat diam. Nullam eros lorem, tempus eu efficitur scelerisque, vehicula ornare libero. Nunc ut rutrum leo, a egestas ante. Fusce faucibus pharetra dolor sit amet vestibulum. Pellentesque id odio leo. Pellentesque pulvinar lectus vitae blandit porttitor.",
        githubLink: "https://github.com/Lapinweb/CelineSou_5_11062021",
        webLink: "",
        stack: ["HTML", "CSS", "Javascript", "Bootstrap"],
    },
];

export default function Projects() {
    return (
        <div className="projects">
            <h1>Mes projets</h1>
            <ul className="list-none mx-2 pl-0 grid grid-cols-2 gap-3">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </ul>
        </div>
    );
}
