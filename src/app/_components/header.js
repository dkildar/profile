import Image from "next/image";

export default function Header() {
    return <header className="py-16 flex flex-col gap-16">
        <div className="flex flex-col gap-6">
            <h1 className="text-8xl font-[Montserrat] font-semibold uppercase">Ildar Timerbaev</h1>
            <div className="flex flex-col gap-2 opacity-75">
                <h2>Senior Frontend Developer & Mid-Level Backend Engineer</h2>
                <h3>Full-Stack Capabilities with a Focus on User Experience</h3>
            </div>
        </div>
        <Image
            priority
            className="w-full object-cover h-[400px] bg-gray-100"
            src="/header-cover-image.jpg"
            alt="cover"
            width={1200}
            height={800}
        />
    </header>
}