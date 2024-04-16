import Header from "@/app/_components/header";
import About from "@/app/_components/about";

export default function Home() {
    return (
        <div className="container mx-auto py-16 flex flex-col gap-24">
            {/*<hr/>*/}
            <Header/>
            <main>
                <About />
            </main>
        </div>
    );
}
