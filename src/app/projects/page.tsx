import React from "react";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/assets/projectsData";

export default function Projects() {
    return (
        <div className="mx-3">
            <h1 className="text-center">Mes projets</h1>
            <ul className="list-none pl-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
