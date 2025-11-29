export default function Skills() {
    return (
        <section>
            <h3 className="text-2xl mb-3 font-semibold">Présentation</h3>
            <section  className="flex gap-3 flex-wrap justify-between">
            <article className="mb-4">
                <h4>Front-end</h4>
                <div className="flex gap-2">
                    {/*<img src="/assets/javascript-logo.png" alt="JavaScript Logo" className="w-16"/>*/}
                    <img src="/assets/VueJs.png" alt="Vue.js logo" className="w-16"/>
                    <img src="/assets/Tailwind.png" alt="Tailwind logo" className="w-16"/>
                    <img src="/assets/react.svg" alt="React logo" className="w-16"/>
                    {/*<img src="/assets/typescript.png" alt="TypeScript Logo" className="w-16"/>*/}
                </div>
            </article>
            <article className="mb-4">
                <h4>Back-end</h4>
                <div className="flex gap-2">
                    {/*<img src="/assets/PHP.png" alt="PHP logo" className="w-16"/>*/}
                    <img src="/assets/mysql.png" alt="SQL logo" className="w-16"/>
                    <img src="/assets/Laravel.png" alt="Laravel logo" className="w-16"/>
                    <img src="/assets/NodeJs.png" alt="NodeJs logo" className="w-16"/>
                </div>
            </article>
            <article className="mb-4">
                <h4>Dev Ops</h4>
                <div className="flex gap-2">
                    <img src="/assets/Docker.png" alt="Docker logo" className="w-16"/>
                    <img src="/assets/Linux.png" alt="Linux logo" className="w-16"/>
                </div>
            </article>
            <article>
                <h4>Designer - UI/UX</h4>
                <div className="flex gap-2">
                    {/*<img src="/assets/Canva.webp" alt="Canva logo" className="w-16"/>*/}
                    <img src="/assets/Figma.png" alt="Figma logo" className="w-16"/>
                    <img src="/assets/Looping.png" alt="Looping logo" className="w-16"/>
                </div>
            </article>
            </section>
        </section>
    )
}