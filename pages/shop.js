import Items from "../components/ProductsArray"
import Layout from "../components/Layout";

export default function Shop() {
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

Shop.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
}