import Image from "next/image"

export default function Landing() {
    return (
        <section className="p-12">
            <header className="container mx-auto flex items-center text-center flex-col mb-12">
                <div id="title" className="text-6xl font-bold max-w-3xl mb-12">
                    <h2>Find the perfect flower for the important day</h2>
                </div>
                <div id="title-banner">
                    <Image 
                        src={"/assets/landing-banner.png"} 
                        alt={"Landing Page"} 
                        width={1920} 
                        height={1080}
                        className="w-full"
                    />
                </div>
            </header>
            <aside className="container mx-auto px-12 grid grid-cols-2 gap-12 items-center">
                <header id="reasons">
                    <h2 className="font-bold text-6xl mb-4">Why LoveDahlia?</h2>
                    <p>LoveDahlia is an e-commerce type of website that we're selling a variety of flowers to people who're spreading their love and appreciation (Tuason, 2022). As your one-step flower shop, LoveDahlia gives you the option to shop from all the top-rated florists across town. Our ever-growing list of young and passionate florists means you will have priority access to the latest trendyflower arrangements.</p>
                </header>
                <aside id="lottie-play">
                    <Image 
                        src={"/assets/landing-banner.png"} 
                        alt={"Landing Page"} 
                        width={1920} 
                        height={1080}
                        className="w-full"
                    />
                </aside>
            </aside>
        </section>
    )
}