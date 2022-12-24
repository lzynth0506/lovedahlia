import Items from "./ProductsArray";

export default function Products() {
    return (
        <section className="p-12">
            <main className="container mx-auto px-12">
                <div id="product-header" className="text-4xl font-bold mb-8">
                    <h2>Best Sellers</h2>
                </div>
                <Items />
            </main>
        </section>
    )
}