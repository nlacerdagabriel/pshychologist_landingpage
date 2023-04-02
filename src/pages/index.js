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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Psicóloga Heloísa Aquino</title>
        <meta name="description" content="Psicóloga Heloísa Aquino" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header className={inter.className} />
      <main style={{ color: themeColors.text }} className={inter.className}>
        <Introduction />
        <About />
        <Gallery />
        <Services />
        <Reviews />
        <Contact />
        <Localization/>
        <Footer/>
      </main>
      
    </ChakraProvider>
  );
}
