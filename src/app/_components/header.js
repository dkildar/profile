import Image from "next/image";

export default function Header() {
    return <header className="py-16 flex flex-col gap-8">
        <h1 className="text-9xl uppercase">Ildar Timerbaev</h1>
        <div className="relative">
            <Image
                priority
                className="w-full object-cover h-[600px] bg-gray-100"
                src="/header-cover-image.jpg"
                alt="cover"
                width={1200}
                height={800}
            />
            <div
                className="absolute bottom-8 left-8 font-[Montserrat] font-semibold flex text-xl flex-col gap-2 text-white">
                <h2>Senior Frontend Developer & Mid-Level Backend Engineer</h2>
                <h3>Full-Stack Capabilities with a Focus on User Experience</h3>
            </div>
        </div>
        <div className="pt-24">
            <ul className="flex items-center justify-center flex-wrap gap-6 uppercase font-[Montserrat] font-semibold tracking-wider opacity-50 text-sm">
                <li>Front-end development</li>
                <li>●</li>
                <li>Design patters</li>
                <li>●</li>
                <li>High-load systems</li>
                <li>●</li>
                <li>JavaScript</li>
                <li>●</li>
                <li>TypeScript</li>
                <li>●</li>
                <li>Kotlin</li>
                <li>●</li>
                <li>Java</li>
            </ul>
        </div>
    </header>
}