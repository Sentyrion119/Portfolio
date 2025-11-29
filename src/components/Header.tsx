export default function Header() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (

        <header className="bg-black text-white">
            <nav className="flex justify-between flex-col text-center md:flex-row gap-5 p-4 w-10/12 m-auto">
                <h2 className="uppercase tracking-wide underline underline-offset-4 text-l font-bold">
                    Sourdis Raphaël
                </h2>
                <div>
                    <a
                        href="/assets/SOURDIS_RAPHAËL_Orygin.pdf"
                        download="Raphael Sourdis CV"
                        className="hover:underline underline-offset-5 ml-3"
                    >Mon CV
                    </a>
                    <a href="#" onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("projects");
                        }}
                        className="hover:underline underline-offset-5 ml-3"
                    >
                        Projects
                    </a>
                    <a href="https://github.com/Sentyrion119"
                       className="hover:underline underline-offset-5 ml-3">GitHub</a>
                    <a href="https://www.linkedin.com/in/rapha%C3%ABl-sourdis/"
                       className="hover:underline underline-offset-5 ml-3">Linkedin</a>
                </div>
            </nav>
        </header>
    )
}