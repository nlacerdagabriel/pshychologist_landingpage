import Head from "next/head";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "@/components/Header";
import { theme } from "../theme";
import Introduction from "@/sections/Introduction";
import About from "@/sections/About";
import Gallery from "@/sections/Gallery";
import Services from "@/sections/Services";
import Reviews from "@/sections/Reviews";
import { themeColors } from "@/theme/colors";
import Contact from "@/sections/Contact";
import Localization from "@/sections/Localization";
import Footer from "@/components/Footer";
import {
  getGalleryImages,
  getPage,
  getReviews,
  getServices,
} from "@/utils/api";
import { reviews } from "@/data/reviews";

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  images,
  services,
  reviews,
  introduction,
  about,
}) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>

      <ChakraProvider theme={theme}>
        <Head>
          <title>Psicóloga Heloísa Aquino</title>
          <meta name="description" content="Psicóloga Heloísa Aquino" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Header className={inter.className} />
        <main style={{ color: themeColors.text }} className={inter.className}>
          <Introduction introduction={introduction} />
          <About about={about} />
          <Gallery images={images} />
          <Services services={services} />
          <Reviews reviews={reviews} />
          <Contact />
          <Localization />
          <Footer />
        </main>
      </ChakraProvider>
    </>
  );
}

export async function getServerSideProps(context) {
  const images = await getGalleryImages();
  const services = await getServices();
  const reviews = await getReviews();
  const introduction = await getPage(120);
  const about = await getPage(131);

  return {
    props: {
      images,
      services,
      reviews,
      introduction,
      about,
    },
  };
}
