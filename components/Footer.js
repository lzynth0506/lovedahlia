import {
    FaGithub,
    FaDev
} from "react-icons/fa"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-slate-100">
            <section className="container mx-auto px-12 p-12 flex justify-center text-center leading-loose">
                <div id="footer-details">
                    <h2>Created by Kenneth Obsequio and this project is <b>Open Source</b> under <b>MIT License.</b></h2>
                    <p className="mb-2">Therefore, did you like that? follow my GitHub account for more authentic projects ❤️</p>
                    <div id="footer-logo" className="inline-flex text-4xl">
                        <Link href="https://dev.to/lzynth0506" className="cursor-pointer" target={"_blank"}>
                            <FaDev className="mr-4"/>
                        </Link>
                        <Link href="https://github.com/lzynth0506" className="cursor-pointer" target={"_blank"}>
                            <FaGithub className="mr-4"/>
                        </Link>
                    </div>
                </div>
            </section>
        </footer>
    )
}