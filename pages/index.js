import Head from 'next/head'
import Landing from '../components/Landing'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
      <Head>
        {/* Open Graph on Facebook */}
        <meta property="og:url" content="" />
        <meta property="og:type" content="System Activity in our University" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="" />
        <meta property="twitter:url" content="" />
        <meta name="twitter:title" content="lazymonster" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />

        {/* Normal Meta Tag */}
        <meta name="description" content="" />
        <title>LoveDahlia | FlowerShop</title>
      </Head>
      <Landing />
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}