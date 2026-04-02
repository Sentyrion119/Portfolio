import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navLinks = [
        { label: "Mon CV", href: "/assets/SOURDIS_RAPHAËL_Orygin.pdf", download: true },
        { label: "Projets", onClick: () => scrollToSection("projects") },
        { label: "Parcours", onClick: () => scrollToSection("experience") },
        { label: "GitHub", href: "https://github.com/Sentyrion119", external: true },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/rapha%C3%ABl-sourdis/", external: true },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? "glass py-3" : "bg-transparent py-5"
            }`}
        >
            <nav className="flex justify-between items-center flex-col md:flex-row gap-4 px-6 max-w-6xl mx-auto">
                <motion.h2
                    className="text-lg font-bold tracking-widest uppercase text-white"
                    whileHover={{ scale: 1.05 }}
                >
                    <span className="gradient-text">Sourdis Raphaël</span>
                </motion.h2>
                <div className="flex items-center gap-6 text-sm font-medium">
                    {navLinks.map((link, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i, duration: 0.4 }}
                        >
                            {link.onClick ? (
                                <button
                                    onClick={link.onClick}
                                    className="text-gray-300 hover:text-white transition-colors relative group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 group-hover:w-full transition-all duration-300" />
                                </button>
                            ) : (
                                <a
                                    href={link.href}
                                    {...(link.download ? { download: "Raphael Sourdis CV" } : {})}
                                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                    className="text-gray-300 hover:text-white transition-colors relative group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 group-hover:w-full transition-all duration-300" />
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </nav>
        </motion.header>
    );
}
