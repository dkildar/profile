import Image from "next/image";

export default function About() {
    return <section className="grid grid-cols-2 items-center gap-16">
        <div className="relative w-full pt-[100%] flex items-center bg-gray-100">
            <Image
                priority
                className="absolute -z-1 top-0 left-0 w-full object-cover h-full bg-gray-100"
                src="/about-image.jpg"
                alt="cover"
                width={1200}
                height={800}
            />
            <div
                className="font-[Montserrat] absolute top-64 left-16 z-10 text-white tracking-wide font-bold text-5xl underline">Introduction
            </div>
        </div>
        <div className="leading-9 px-16 [&>p]:pb-4 [&>ul]:pb-4 text-xl">
            <p className="text-3xl">Hi, everyone!</p>
            <p>I'm passionate about product development and have over 6 years of coding experience. Throughout these
                years, I've discovered my passions: writing highly structured code using various patterns and
                structures, and I have extensive experience in user interface development, knowing how to attract
                all types of users.</p>
            {/*<p>Let me highlight my general skills and knowledge:</p>*/}
            {/*<ul className="list-disc pl-8">*/}
            {/*    <li>Expert knowledge of TypeScript and JavaScript. I've been working with these languages since the first day of my coding journey.</li>*/}
            {/*    <li>In-depth understanding of UI and UX. I've built and delivered numerous pages, layouts, and components, including UI kits.</li>*/}
            {/*    <li>Proficiency in Java and Kotlin. I have several years of experience working with these languages, especially in web development, with a particular fondness for Kotlin.</li>*/}
            {/*    <li>Familiarity with SQL-like platforms such as PostgreSQL, MySQL, and Snowflake.</li>*/}
            {/*    <li>I never write code or complete tasks without documentation. I'm very meticulous about documenting and highlighting details, no matter how small or significant they may be.</li>*/}
            {/*</ul>*/}
        </div>
    </section>
}