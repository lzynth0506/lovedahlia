import Image from "next/image"
import { GrSubtract } from "react-icons/gr"
import { AiOutlinePlus } from "react-icons/ai"
import Items from "../../components/ProductsArray"
import Layout from "../../components/Layout"

export default function Flowers() {
    return (
        <section class="container mx-auto px-12 p-12">
            <main id="product-details">
                <header className="bg-gradient-to-t from-[#F45C43] to-[#EB3349] p-12 rounded-2xl text-white mb-12">
                    <div id="productInfo">
                        <h2 className="font-bold text-4xl mb-4">Romance</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </header>
                <aside className="grid grid-cols-2 gap-12 mb-12">
                    <div id="productCart-flexImage">
                        <Image 
                            src={"/assets/annelisse.png"}
                            alt="Flower by FlowerChimps" 
                            width={1920} 
                            height={1080}
                            className="border border-neutral-300 rounded-xl mb-4 w-full cursor-pointer"
                        />
                    </div>
                    <div id="productCart-details" className="flex justify-start flex-col">
                        <div id="productCart-otherImage" className="inline-flex">
                            <Image 
                                src={"/assets/annelisse.png"}
                                alt="Flower by FlowerChimps" 
                                width={1920} 
                                height={1080}
                                className="border border-neutral-300 rounded-xl mb-4 w-48 mr-6 cursor-pointer"
                            />
                            <Image 
                                src={"/assets/annelisse.png"}
                                alt="Flower by FlowerChimps" 
                                width={1920} 
                                height={1080}
                                className="border border-neutral-300 rounded-xl mb-4 w-48 cursor-pointer"
                            />
                        </div>
                        <span className="font-bold text-2xl mb-4">Quantity</span>
                        <div id="quantity-ops" className="mb-4">
                            <button className="border border-black p-3 rounded-lg mr-4">
                                <GrSubtract />
                            </button>
                            <span className="mr-4">0</span>
                            <button className="border border-black p-3 rounded-lg">
                                <AiOutlinePlus />
                            </button>
                        </div>
                        <div id="product-price">
                            <h2 className="font-bold text-3xl mb-4">P500</h2>
                            <button className="bg-red-500 text-white w-full p-4 rounded-lg font-bold mb-4">Add to Cart</button>
                        </div>
                        <div id="importance">
                            <h2 className="font-bold mb-4 text-2xl">Importance</h2>
                            <p>This flower stays fresh for at least 7 days</p>
                        </div>
                    </div>
                </aside>
                <aside>
                    <div id="product-header" className="text-4xl font-bold mb-8">
                        <h2>You may also like</h2>
                    </div>
                    <Items />
                </aside>
            </main>
        </section>
    )
}

Flowers.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }