export default function Header() {
    return (
        <header>
            <nav className="flex justify-between flex-col text-center md:flex-row m-auto gap-5">
                <h2 className="text-white uppercase tracking-wide underline underline-offset-4 text-l font-bold">
                    Sourdis Raphaël
                </h2>
                <div>
                    <a href="https://github.com/Sentyrion119"
                       className="text-white hover:underline underline-offset-5">GitHub</a>
                    <a href="https://www.linkedin.com/in/rapha%C3%ABl-sourdis/"
                       className="text-white hover:underline underline-offset-5 ml-3">Linkedin</a>
                </div>
            </nav>
        </header>
    )
}