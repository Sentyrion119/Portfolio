import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
    id: number;
    title: string;
    mainImage: string;
    images: string[];
    description: string;
    stack: string[];
    link?: string;
};

const projectsData: Project[] = [
    {
        id: 1,
        title: "Galaxy",
        mainImage: "./assets/Galaxy.png",
        images: ["./assets/Galaxy.png", "./assets/Galaxy_2.png", "./assets/Galaxy_3.png"],
        description:
            "Application de réservation inspirée de Planity. Gestion complète des rendez-vous, interface intuitive et système d'authentification sécurisé.",
        stack: ["Vue.js", "Laravel", "Tailwind", "Docker"],
    },
    {
        id: 2,
        title: "AutoChic",
        mainImage: "./assets/img.png",
        images: ["./assets/img.png"],
        description:
            "Application web full-stack en PHP avec architecture MVC. Gestion de contenu dynamique avec interface utilisateur soignée.",
        stack: ["PHP", "MySQL", "CSS", "Docker"],
        link: "https://github.com/Sentyrion119/AutoChic",
    },
    {
        id: 3,
        title: "Pokedex",
        mainImage: "./assets/pokedex.png",
        images: ["./assets/pokedex.png"],
        description:
            "Mini Pokedex consommant l'API Pokémon. Recherche, filtrage et affichage détaillé de chaque Pokémon avec leurs statistiques.",
        stack: ["JavaScript", "HTML/CSS", "API REST"],
        link: "https://github.com/Sentyrion119/Mini_pokedex",
    },
    {
        id: 4,
        title: "Vampire Survivor 2.0",
        mainImage: "./assets/vampireSurvivor2.0.png",
        images: [
            "./assets/vampireSurvivor2.0.png",
            "./assets/Vampire_2.png",
            "./assets/vampire_3.png",
            "./assets/vampire_4.png",
        ],
        description:
            "Recréation du jeu Vampire Survivors en Java. Système de vagues d'ennemis, progression du personnage et multiples armes.",
        stack: ["Java", "LibGDX"],
    },
    {
        id: 5,
        title: "Portfolio",
        mainImage: "./assets/portfolio.png",
        images: ["./assets/portfolio.png"],
        description:
            "Ce portfolio que vous consultez actuellement. Design moderne avec animations fluides et interface responsive.",
        stack: ["React", "TypeScript", "Tailwind", "Framer Motion"],
        link: "https://github.com/Sentyrion119/Portfolio",
    },
];

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Projectv2() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <p className="text-violet-400 font-medium tracking-widest uppercase text-sm mb-2">Réalisations</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Mes projets</h2>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {projectsData.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariant}
                            whileHover={{ y: -8 }}
                            onClick={() => setSelectedProject(project)}
                            className="group cursor-pointer bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-violet-500/40 transition-all duration-300"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.mainImage}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
                            </div>

                            <div className="p-5">
                                <h4 className="text-lg font-bold mb-2 group-hover:text-violet-400 transition-colors">
                                    {project.title}
                                </h4>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs px-3 py-1 bg-violet-500/10 text-violet-300 rounded-full border border-violet-500/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 backdrop-blur-md bg-black/60 flex items-center justify-center z-50 p-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-[#141414] border border-white/10 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
                                onClick={() => setSelectedProject(null)}
                            >
                                <span className="text-xl leading-none">&times;</span>
                            </button>

                            <div className="flex gap-3 overflow-x-auto p-6 pb-0">
                                {selectedProject.images.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`${selectedProject.title} ${idx + 1}`}
                                        className="h-48 rounded-xl object-cover shrink-0"
                                    />
                                ))}
                            </div>

                            <div className="p-6">
                                <h4 className="text-2xl font-bold mb-3">{selectedProject.title}</h4>
                                <p className="text-gray-300 mb-5 leading-relaxed">{selectedProject.description}</p>

                                <div className="flex flex-wrap gap-2 mb-5">
                                    {selectedProject.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-sm px-4 py-1.5 bg-violet-500/15 text-violet-300 rounded-full border border-violet-500/25"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {selectedProject.link && (
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-500 rounded-xl font-medium transition-colors text-sm"
                                    >
                                        Voir sur GitHub
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
