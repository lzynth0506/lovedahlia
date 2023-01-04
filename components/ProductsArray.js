import Image from "next/image"
import { ProductData } from "../pages/api/Data1"
import Link from "next/link"

export default function Items() {
    return (
        <div id="products-array" className="grid grid-cols-4 gap-6">
        {(ProductData.map((flower) =>
        <div key={flower.id} id="products" className="">
            <Link href={`/flower/`}>
                <Image 
                    src={flower.productImage} 
                    alt="Flower by FlowerChimps" 
                    width={1920} 
                    height={1080}
                    className="border border-neutral-300 rounded-xl mb-4 w-full cursor-pointer"
                />
            </Link>
            <div id="productItems" className="flex items-start justify-between">
                <div className="w-44 truncate">
                    <h2 className="font-bold text-2xl">{flower.productTitle}</h2>
                    <p className="mb-2 mt-2">{flower.productShortInfo}</p>
                </div>
            </div>
        </div>
        ))}
    </div>
    )
}