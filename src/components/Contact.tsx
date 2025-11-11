"use client";

import { useState } from "react";

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const email = "raphael.sourdis@epitech.eu";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // réinitialise après 2s
    };

    return (
        <footer className="bg-neutral-900 text-white py-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Vous souhaitez me contacter ?</h2>
            <p className="mb-6">Cliquez sur un des boutons ci-dessous :</p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
                {/* Bouton mailto */}
                <a
                    href={`mailto:${email}?subject=Candidature%20Portfolio&body=Bonjour%20Raphaël,%0D%0A%0D%0AJe%20souhaiterais%20vous%20contacter%20pour%20votre%20portfolio.%0D%0A%0D%0ABien%20à%20vous,`}
                    className="bg-violet-300 hover:bg-violet-900 font-bold py-2 px-6 rounded-full transition-colors"
                >
                    Envoyer un mail
                </a>

                {/* Bouton copier email */}
                <button
                    onClick={handleCopy}
                    className="bg-gray-700 hover:bg-gray-600 font-bold py-2 px-6 rounded-full transition-colors"
                >
                    {copied ? "Copié !" : "Copier l'adresse mail"}
                </button>
            </div>

            <p className="mt-6 text-sm text-gray-400">
                Vous pouvez également télécharger mon CV ci-dessous :
            </p>

            <a
                href="/assets/SOURDIS_RAPHAËL_Orygin.pdf"
                download="Raphael Sourdis CV"
                className="inline-block mt-2 bg-red-300 hover:bg-yellow-500 font-bold py-2 px-6 rounded-full transition-colors"
            >
                Télécharger mon CV
            </a>
        </footer>
    );
}
