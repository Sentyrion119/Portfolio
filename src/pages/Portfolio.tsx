import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import ProjectsV2 from "../components/Projectv2";
import Studies from "../components/Studies";
import Contact from "../components/Contact";

export default function Home() {
    return (
        <div className="bg-dark min-h-screen text-white">
            <Header />
            <main className="relative z-10">
                <AboutMe />
                <Skills />
                <ProjectsV2 />
                <Studies />
            </main>
            <Contact />
        </div>
    );
}
