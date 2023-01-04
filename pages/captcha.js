import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/router";

export default function Captcha() {
    const router = useRouter();

    return (
        <section className="bg-[url('/assets/background-login.png')] bg-no-repeat bg-cover relative w-screen h-screen">
            <main className="grid h-screen place-items-center">
                <form className="p-12 bg-white rounded-2xl w-100">
                    <header className="mb-6">
                        <h2 className="font-bold text-3xl mb-2">We're not allowing to invade us</h2>
                        <p>This is just confirmation to fulfill who you are</p>
                    </header>
                    <ReCAPTCHA 
                        sitekey="6LdEfqgjAAAAALjK-dx74aLWbMT1-BUeMwwAYBpX"
                        onChange={() => router.push("/")}
                    />
                </form>
            </main>
        </section>
    )
}