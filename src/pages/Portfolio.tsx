import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Project";
import Studies from "../components/Studies";
import Contact from "../components/Contact";

export default function Home() {
    return (
        <div className="bg-neutral-900 text-white min-h-screen">
            <Header/>
            <main className="max-w-6xl mx-auto px-6">
                <AboutMe/>
                <Skills/>
                <Projects/>
                <Studies/>
            </main>
            <Contact/>
        </div>
    );
}
