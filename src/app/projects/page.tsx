import React from "react";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/assets/projects.json";

export default function Projects() {
    const projects = [...projectsData];

    return (
        <div className="mx-3">
            <h1 className="text-center">Mes projets</h1>
            <ul className="list-none pl-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={"project" + index}
                        {...project}
                        modalId={"project" + index}
                    />
                ))}
            </ul>
        </div>
    );
}
