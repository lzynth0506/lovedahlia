import Banner from "../components/Banner";
import Products from "../components/Products";
import Layout from "../components/Layout";

export default function Main() {
    return (
        <>
            <Banner />
            <Products />
        </>
    )
}

Main.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
}