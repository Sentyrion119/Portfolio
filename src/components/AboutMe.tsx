import { motion } from "framer-motion";

export default function AboutMe() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-5xl mx-auto pt-24">
                {/* Hero heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-violet-400 font-medium tracking-widest uppercase text-sm mb-4"
                    >
                        Bienvenue sur mon portfolio
                    </motion.p>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                        Développeur{" "}
                        <span className="gradient-text">Full Stack</span>
                    </h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Je conçois et développe des applications web performantes, de l'interface utilisateur jusqu'au serveur.
                    </motion.p>
                </motion.div>

                {/* About section */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col md:flex-row items-center gap-12"
                >
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative shrink-0"
                    >
                        <div className="w-44 h-44 md:w-56 md:h-56 rounded-2xl overflow-hidden ring-2 ring-violet-500/30 ring-offset-4 ring-offset-dark">
                            <img
                                src="/assets/SRS.png"
                                alt="Raphaël Sourdis"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -inset-4 bg-violet-500/10 rounded-3xl blur-2xl -z-10" />
                    </motion.div>

                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            Qui suis-je<span className="text-violet-400"> ?</span>
                        </h3>
                        <div className="text-gray-300 leading-relaxed space-y-4">
                            <p>
                                Bonjour, je m'appelle <span className="text-white font-semibold">Raphaël Sourdis</span>,
                                développeur Full Stack attentif à la performance et à la qualité des applications web.
                                Actuellement en Pré MSc chez <span className="text-violet-400 font-medium">Epitech</span>.
                            </p>
                            <p>
                                Actuellement à la recherche d'une alternance afin de participer à des projets concrets
                                et renforcer mes compétences techniques.
                            </p>
                            <p>
                                Je serais ravi de vous aider à développer les meilleures solutions à vos besoins.
                                Que ce soit pour construire une interface responsive, optimiser une base de données,
                                ou containériser votre projet pour le déployer en production.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
