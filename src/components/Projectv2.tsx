// export default function Projectv2() {
//     return (
//         <section id="projects" className="py-12">
//             <h3 className="font-semibold text-2xl mb-5">Project</h3>
//             <article className="flex flex-wrap justify-around gap-4x">
//                 <div
//                     className="w-60 border-2 rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer bg-white">
//                     <h4 className="text-center my-1">Portfolio</h4>
//                     <div className="w-60 h-60 overflow-hidden">
//                         <img src="./assets/portfolio.png" alt="" className="w-59 h-full object-cover object-top"/>
//                     </div>
//                     <p className="mx-3 my-2 break-words">Présentation de mes projets et compétences.</p>
//                 </div>
//                 <div
//                     className="w-60 border-2 rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer bg-white">
//                     <h4 className="text-center my-1">Galaxy (Planity-like)</h4>
//                     <div className="w-60 h-60 overflow-hidden">
//                         <img src="./assets/Galaxy.png" alt="" className="w-59 h-full object-cover object-top"/>
//                     </div>
//                     <p className="mx-3 my-2 break-words">
//                         Projet open-source de réservation similaire à Planity
//                     </p>
//                 </div>
//
//                 <div
//                     className="w-60 border-2 rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer bg-white">
//                     <h4 className="text-center my-1">Pokedex</h4>
//                     <div className="w-60 h-60 overflow-hidden">
//                         <img src="./assets/pokedex.png" alt="" className="w-59 h-full object-cover object-top"/>
//                     </div>
//                     <p className="mx-3 my-2 break-words">
//                         Mini Pokedex lié a plusieurs API
//                     </p>
//                 </div>
//
//                 <div
//                     className="w-60 border-2 rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer bg-white">
//                     <h4 className="text-center my-1">Vampire Survivor 2.0</h4>
//                     <div className="w-60 h-60 overflow-hidden">
//                         <img src="./assets/vampireSurvivor2.0.png" alt="" className="w-59 h-full object-cover object-top"/>
//                     </div>
//                     <p className="mx-3 my-2 break-words">
//                         Projet open-source de Vampire Survivor
//                     </p>
//                 </div>
//
//             </article>
//         </section>
//     );
// }

import { useState } from "react";

const projectsData = [

    {
        id: 1,
        title: "Portfolio",
        mainImage: "./assets/portfolio.png",
        images: ["./assets/portfolio.png"],
        description: "Présentation de mes projets et compétences.",
        stack: ["React", "Tailwind", "TypeScript"],
        link: "https://github.com/Sentyrion119/Portfolio",
    },
    {
        id: 2,
        title: "Galaxy (Planity-like)",
        mainImage: "./assets/Galaxy.png",
        images: ["./assets/Galaxy.png", "./assets/Galaxy_2.png", "./assets/Galaxy_3.png"],
        description: "Projet open-source de réservation similaire à Planity",
        stack: ["Vue.js", "Laravel", "Tailwind", "Docker"],
    },
    {
        id: 3,
        title: "Pokedex",
        mainImage: "./assets/pokedex.png",
        images: ["./assets/pokedex.png"],
        description: "Mini Pokedex lié à plusieurs API",
        stack: ["JS", "API Pokémon"],
    },
    {
        id: 4,
        title: "Vampire Survivor 2.0",
        mainImage: "./assets/vampireSurvivor2.0.png",
        images: ["./assets/vampireSurvivor2.0.png", "./assets/Vampire_2.png", "./assets/vampire_3.png", "./assets/vampire_4.png"],
        description: "Projet open-source de Vampire Survivor",
        stack: ["Java", "Lib JDX"],
    },
];

export default function Projectv2() {
    type Project = {
        id: number;
        title: string;
        mainImage: string;
        images: string[];
        description: string;
        stack?: string[];
        link?: string;
    };
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);


    return (
        <section id="projects" className="py-12">
            <h3 className="font-semibold text-2xl mb-5">Projects</h3>
            <article className="flex flex-wrap justify-around gap-4">
                {projectsData.map((project) => (
                    <div
                        key={project.id}
                        className="w-60 border-2 rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer bg-white"
                        onClick={() => setSelectedProject(project)}
                    >
                        <h4 className="text-center my-1">{project.title}</h4>
                        <div className="w-59 h-60 overflow-hidden">
                            <img
                                src={project.mainImage}
                                alt={project.title}
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        <p className="mx-3 my-2 break-words">{project.description}</p>
                    </div>
                ))}
            </article>

            {/* Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50"
                    onClick={() => setSelectedProject(null)} // clic sur le fond ferme le modal
                >
                    <div
                        className="bg-white rounded-xl p-6 w-11/12 max-w-3xl max-h-[90vh] overflow-y-auto relative"
                        onClick={(e) => e.stopPropagation()} // empêche la fermeture si clic dans le modal
                    >
                        <button
                            className="absolute top-3 right-3 text-xl font-bold"
                            onClick={() => setSelectedProject(null)}
                        >
                            &times;
                        </button>
                        <h4 className="text-2xl font-semibold mb-4">{selectedProject.title}</h4>

                        {/* Images du modal */}
                        <div className="flex gap-2 overflow-x-auto mb-4">
                            {selectedProject.images.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`${selectedProject.title} ${idx + 1}`}
                                    className="h-40 object-cover rounded"
                                />
                            ))}
                        </div>

                        {/* Description */}
                        <p className="mb-4">{selectedProject.description}</p>

                        {/* Liste des stacks */}
                        {selectedProject.stack && (
                            <ul className="list-disc list-inside mb-4">
                                {selectedProject.stack.map((tech, idx) => (
                                    <li key={idx}>{tech}</li>
                                ))}
                            </ul>
                        )}

                        {/* Lien (optionnel) */}
                        {selectedProject.link && (
                            <a
                                href={selectedProject.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                            >
                                Voir le projet
                            </a>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}

