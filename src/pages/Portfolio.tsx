import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
// import Projects from "../components/Project";
import ProjectsV2 from"../components/Projectv2"
import Studies from "../components/Studies";
import Contact from "../components/Contact";

export default function Home() {
    return (
        <div className="bg-[#f4f4f4] min-h-screen">
            <Header/>
            <main className="max-w-6xl mx-auto px-6">
                <AboutMe/>
                <div className="bg-white p-1 mb-3"></div>
                <Skills/>
                <div className="bg-white p-1 mt-10"></div>
                {/*<Projects/>*/}
                <ProjectsV2/>
                <div className="bg-white p-1 mb-3"></div>
                <Studies/>
            </main>
            <Contact/>
        </div>
    );
}
