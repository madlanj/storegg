import AOS from "aos";
import Head from "next/head";
import { useEffect } from "react";
import FeaturedGame from "../components/organisms/FeaturedGame";
import Footer from "../components/organisms/Footer";
import MainBanner from "../components/organisms/MainBanner";
import Navbar from "../components/organisms/Navbar";
import Reached from "../components/organisms/Reached";
import Story from "../components/organisms/Story";
import TransactionStep from "../components/organisms/TransactionStep";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Store GameJaz</title>
        <meta
          name="description"
          content="Kami meyediakan voucher game untuk membantu ana menjadi pemenang"
        />
        <meta property="og:title" content="Store GameJaz" />
        <meta
          property="og:desc"
          content="Kami meyediakan voucher game untuk membantu ana menjadi pemenang"
        />
      </Head>

      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
