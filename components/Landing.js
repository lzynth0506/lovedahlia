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
            <aside className="container mx-auto px-12">
                <section className="bg-red-500 text-white rounded-3xl p-12 grid grid-cols-2 place-items-center mb-12">
                    <header id="reasons" className="place-self-start">
                        <h2 className="font-bold text-4xl mb-4">Why LoveDahlia?</h2>
                    </header>
                    <div id="reasons-info" className="">
                        <p>LoveDahlia is an e-commerce type of website where we're selling a variety of flowers to people who're spreading their love and appreciation (Tuason, 2022). As your one-stop flower shop, LoveDahlia gives you the option to shop from all the top-rated florists across town. Our ever-growing list of young and passionate florists means you will have priority access to the latest trendy flower arrangements.</p>
                    </div>
                </section>
            </aside>
            <section className="container mx-auto px-12">
                <aside className="grid grid-cols-2">
                    <div className="">
                        <h2 className="font-bold text-4xl mb-4">Never miss out</h2>
                        <p>For all of the big discounts, solid promos for upcoming events such as Valentine's Day, birthdays, etc. Flower buyers are spoiled for choice, thanks to the rise of trendy styles and Pinterest-worthy florists in our towns. When you shop online, you have direct access to a wide range of florist selections with flower delivery options. Whether you are in Manila,  Makati, Quezon City,  Cebu, Davao, Las Pinas, or any large city, speed is vital for time-sensitive occasions like anniversaries, birthdays, and graduations. Online flower delivery shaves off precious time to get your gift anywhere in the Philippines.</p>
                    </div>
                    <div className="bg-gradient-to-l from-pinkish via-greykish to-darkish p-12 rounded-full justify-self-end">
                        <Image 
                            src={"/assets/tagline.svg"} 
                            alt={"Foot me"} 
                            width={1920} 
                            height={1080}
                            className="w-96"
                        />
                    </div>
                </aside>
            </section>
        </section>
    )
}