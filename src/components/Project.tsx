"use client";

import type { MouseEvent as ReactMouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

type Project = {
    title: string;
    subtitle?: string;
    description: string;
    image: string; // chemin relatif depuis /public, ex: /img/portfolio.png
    github?: string;
    demo?: string;
};

type CardProps = Project;

const Card = ({ title, subtitle, description, image, github, demo }: CardProps) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({
                                 currentTarget,
                                 clientX,
                                 clientY,
                             }: ReactMouseEvent<HTMLDivElement>) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const background = useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(14,165,233,0.12), transparent 70%)`;

    return (
        <div
            // card wrapper
            className="group relative w-full max-w-sm md:max-w-md rounded-2xl border border-white/10 bg-gray-900 p-4 shadow-lg overflow-hidden transition-transform focus:outline-none focus:ring-2 focus:ring-sky-500"
            onMouseMove={handleMouseMove}
            tabIndex={0}
            aria-label={`${title} - ${subtitle ?? ""}`}
        >
            {/* moving background glow */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background }}
                aria-hidden
            />

            {/* card content */}
            <motion.div
                className="relative z-10 rounded-lg bg-gray-800/40 p-3"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
                <div className="h-40 w-full overflow-hidden rounded-md bg-gray-700">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                    />
                </div>

                <div className="mt-3">
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                    {subtitle && <p className="text-sm text-sky-400 mt-1">{subtitle}</p>}
                    <p className="mt-2 text-sm text-gray-300 leading-relaxed">{description}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-sky-300 hover:underline"
                            aria-label={`Ouvrir le dépôt GitHub de ${title}`}
                        >
                            GitHub
                        </a>
                    )}

                    {demo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-sky-300 hover:underline"
                            aria-label={`Voir la démo de ${title}`}
                        >
                            Démo
                        </a>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default function SpotlightBox() {
    const projects: Project[] = [
        {
            title: "Portfolio",
            subtitle: "Site perso",
            description:
                "Présentation de mes projets et compétences. Réalisé avec React / Tailwind / Framer Motion.",
            image: "./assets/portfolio.png",
            github: "https://github.com/Sentyrion119",
            demo: "",
        },
        {
            title: "Galaxy (Planity-like)",
            subtitle: "Réservation",
            description:
                "Projet open-source de réservation similaire à Planity — vue.js / Tailwind | Laravel / Eloquent | DevOps / Docker.",
            image: "./assets/Galaxy.png",
            github: "https://github.com/Sentyrion119",
        },
        {
            title: "Pokedex",
            subtitle: "Pokedex",
            description:
                "Mini Pokedex lié a plusieurs API en HTML / CSS / JS",
            image: "./assets/pokedex.png",
            github: "https://github.com/Sentyrion119",
        },
    ];

    return (
        <section id="projects" className="py-12">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-8">Projets</h2>

                {/* responsive grid: 1 column mobile, 2 on md, 3 on lg */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {projects.map((p, i) => (
                        <Card key={i} {...p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
