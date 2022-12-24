import Image from "next/image"
import Link from "next/link"

export default function Banner() {
    const bannerWidth = 420;

    return (
        <section className="p-12">
            <aside className="container mx-auto px-12 grid grid-cols-2 gap-8">
                <div className="bg-[#F05252] text-white inline-flex items-center p-8 rounded-3xl">
                    <div id="banner-details" className="max-w-lg">
                        <h2 className="font-bold text-4xl mb-8">Enjoy your 70% discount OFF</h2>
                        <Link 
                            href="/" 
                            className="border border-white hover:bg-white hover:text-black font-bold p-4 px-12 rounded-full"
                        >
                            Read More
                        </Link>
                    </div>
                    <div id="banner-image">
                        <Image 
                            src={"/assets/gift-dynamic-color.png"} 
                            alt="Gift Box" 
                            width={bannerWidth} 
                            height={0}
                        />
                    </div>
                </div>
                <div className="bg-[#EF2284] text-white inline-flex items-center p-8 rounded-3xl">
                    <div id="banner-details" className="max-w-lg">
                        <h2 className="font-bold text-4xl mb-8">Check out the new arrivals!</h2>
                        <Link 
                            href="/"
                            className="border border-white hover:bg-white hover:text-black font-bold p-4 px-12 rounded-full"
                        >Read More
                        </Link>
                    </div>
                    <div id="banner-image">
                        <Image 
                            src={"/assets/rocket-dynamic-color.png"} 
                            alt="sdsd" 
                            width={bannerWidth} 
                            height={0} 
                        />
                    </div>                
                </div>    
            </aside>
        </section>
    )
}