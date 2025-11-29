export default function aboutMe() {
    return (
        <section className=" justify-self-center w-2/3 mt-40 mb-30">
            <h2 className="text-center md:text-6xl text-3xl  font-bold mb-20"> Développeur full stack</h2>
            <h3 className="text-center text-2xl font-semibold mb-10">Qui suis-je ?</h3>
            <article className="flex flex-col md:flex-row items-center justify-center w-full gap-10">
                <img src="/assets/SRS.png" alt="" className="w-40 md:w-50 mx-auto rounded-full md:rounded-xl"/>
                <p>Bonjour, je m'appelle Raphaël Sourdis, développeur Full Stack attentif à la performance et à la
                    qualité
                    des applications web. Actuellement en Pré MSc chez Epitech.
                    <br/><br/>
                    Actuellement à la recherche d’une alternance afin de participer à des projets concrets et renforcer
                    mes
                    compétences techniques.
                    <br/><br/>
                    Je serais ravi de vous aider à développer les meilleures solutions à vos besoins grâce à ma capacité
                    à
                    m'adapter à vos projets. J'ai un grand intérêt dans les nouvelles technologies et je prendrais vos
                    challenges avec enthousiasme.
                    <br/>
                    Que ce soit pour construire une interface responsive, optimiser une base
                    de données, containériser votre projet dans l'optique de le déployer en production, etc.
                </p>
            </article>
        </section>
    )
}