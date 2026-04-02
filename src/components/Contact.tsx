import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const email = "raphael.sourdis@epitech.eu";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer className="relative overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark via-violet-950/20 to-dark" />

            <div className="relative z-10 py-20 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <p className="text-violet-400 font-medium tracking-widest uppercase text-sm mb-2">Contact</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Travaillons ensemble
                    </h2>
                    <p className="text-gray-400 mb-10">
                        Vous avez un projet ou une opportunité ? N'hésitez pas à me contacter.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={`mailto:${email}?subject=Candidature%20Portfolio&body=Bonjour%20Raphaël,%0D%0A%0D%0AJe%20souhaiterais%20vous%20contacter%20pour%20votre%20portfolio.%0D%0A%0D%0ABien%20à%20vous,`}
                            className="px-8 py-3 bg-violet-600 hover:bg-violet-500 rounded-xl font-semibold text-white transition-colors"
                        >
                            Envoyer un mail
                        </motion.a>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleCopy}
                            className="px-8 py-3 bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl font-semibold text-white transition-colors"
                        >
                            {copied ? "Copié !" : "Copier l'email"}
                        </motion.button>
                    </div>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/assets/CV_SOURDIS_RAPHAEL_NEW.pdf"
                        download="Raphael Sourdis CV"
                        className="inline-block px-8 py-3 border border-violet-500/30 hover:bg-violet-500/10 rounded-xl font-medium text-violet-300 transition-colors"
                    >
                        Télécharger mon CV
                    </motion.a>

                    <div className="mt-16 pt-8 border-t border-white/10">
                        <div className="flex justify-center gap-6 mb-4">
                            <a
                                href="https://github.com/Sentyrion119"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-violet-400 transition-colors"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/rapha%C3%ABl-sourdis/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-violet-400 transition-colors"
                            >
                                LinkedIn
                            </a>
                        </div>
                        <p className="text-gray-600 text-sm">
                            &copy; 2026 Raphaël Sourdis
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
