import NavbarLink from "@/app/_components/navbar-link";

export default function Navbar() {
    return <nav className="container mx-auto">
        <ul className="flex items-center gap-16 justify-center pb-8 font-[Montserrat] font-semibold uppercase tracking-wider">
            <li><NavbarLink href="/">Intro</NavbarLink></li>
            <li><NavbarLink href="projects">Projects</NavbarLink></li>
            <li><NavbarLink href="cv">CV – Resume</NavbarLink></li>
        </ul>
        <hr/>
    </nav>
}