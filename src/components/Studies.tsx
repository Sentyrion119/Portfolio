import { motion } from "framer-motion";

const experiences = [
    {
        period: "2025 - 2028",
        title: "Epitech",
        subtitle: "Pré MSc - Master en informatique",
        description:
            "Poursuite de mes études pour obtenir un Master et approfondir mes connaissances dans un domaine en plein essor.",
        current: true,
    },
    {
        period: "2024 - 2025",
        title: "Afpa",
        subtitle: "Titre professionnel - Développeur web",
        description:
            "Obtention du titre professionnel de développeur web et web mobile au bout de 8 mois de formation intensive.",
    },
    {
        period: "2017 - 2024",
        title: "Marine Nationale",
        subtitle: "Engagement militaire",
        description:
            "Engagé à 16 ans pour découvrir le monde et travailler dans des milieux exigeants. Après avoir développé un profond intérêt pour l'informatique, reconversion professionnelle vers le développement web.",
    },
];

export default function Studies() {
    return (
        <section id="experience" className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-violet-400 font-medium tracking-widest uppercase text-sm mb-2">Parcours</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Mon expérience</h2>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500 via-violet-500/50 to-transparent" />

                    <div className="space-y-12">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                viewport={{ once: true }}
                                className="relative pl-14"
                            >
                                {/* Timeline dot */}
                                <div
                                    className={`absolute left-2.5 top-1.5 w-4 h-4 rounded-full border-2 ${
                                        exp.current
                                            ? "bg-violet-500 border-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.6)]"
                                            : "bg-dark border-gray-600"
                                    }`}
                                />

                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                        <h3 className="text-xl font-bold">{exp.title}</h3>
                                        <span className="text-sm text-violet-400 font-medium px-3 py-1 bg-violet-500/10 rounded-full w-fit">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400 font-medium mb-2">{exp.subtitle}</p>
                                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
