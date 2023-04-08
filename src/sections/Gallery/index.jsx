import { themeColors } from "@/theme/colors";
import { Box, Container, Flex, SimpleGrid } from "@chakra-ui/react";
import SectionTitle from "../../components/SectionTitle";
import Section from "../../components/Section";
import { SwiperSlide } from "swiper/react";
import Swiper from "@/components/Swiper";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { getGalleryImages } from "@/utils/api";

export default function Gallery({ images }) {

  const groupsOfThree = [];

  for (let i = 0; i < images.length; i += 3) {
    groupsOfThree.push(images.slice(i, i + 3));
  }

  const refLineOne = useRef(null);
  const isInViewLineOne = useInView(refLineOne, {
    once: true,
    amount: 0.4,
  });
  const refLineTwo = useRef(null);
  const isInViewLineTwo = useInView(refLineTwo, {
    once: true,
    amount: 0.4,
  });
  const refLineThree = useRef(null);
  const isInViewLineThree = useInView(refLineThree, {
    once: true,
    amount: 0.4,
  });

  return (
    <Section
      padding="96px 0"
      justifyContent="center"
      overflow="hidden"
      id="galeria"
      maxW="100%"
      bg={themeColors.primary_light}
    >
      <Flex flexDirection="column" m="0 auto" alignItems="center">
        <SectionTitle>Galeria</SectionTitle>
        <SimpleGrid
          display={{ none: "none", md: "grid" }}
          gap="2rem"
          columns={{ sm: 1, md: 2, lg: 3 }}
        >
          {groupsOfThree[0].map((img, index) => (
         <a href={img.acf.url} target="__blank">   <Box
            border={`1px solid ${themeColors.primary}` }

              key={index}
              ref={refLineOne}
              style={{
                backgroundImage: `url(${img._embedded['wp:featuredmedia'][0].source_url})` ,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: isInViewLineOne ? "none" : "translateX(100px)",
                opacity: isInViewLineOne ? 1 : 0,
                transition: "400ms",
              }}
              w="310px"
              h="310px"
              bg="#ccc"
              borderRadius="0.5rem"
            ></Box></a>
          ))}
          {groupsOfThree[1].map((img, index) => (
           <a href={img.acf.url} target="__blank"> <Box
            border={`1px solid ${themeColors.primary}` }

              key={index}
              ref={refLineTwo}
              style={{
                backgroundImage: `url(${img._embedded['wp:featuredmedia'][0].source_url})` ,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: isInViewLineTwo ? "none" : "translateX(-100px)",
                opacity: isInViewLineTwo ? 1 : 0,
                transition: "400ms",
              }}
              w="310px"
              h="310px"
              bg="#ccc"
              borderRadius="0.5rem"
            ></Box></a>
          ))}
          {groupsOfThree[2].map((img, index) => (
           <a href={img.acf.url} target="__blank"> <Box
            border={`1px solid ${themeColors.primary}` }

              key={index}
              ref={refLineThree}
              style={{
                backgroundImage: `url(${img._embedded['wp:featuredmedia'][0].source_url})` ,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: isInViewLineThree ? "none" : "translateX(100px)",
                opacity: isInViewLineThree ? 1 : 0,
                transition: "400ms",
              }}
              w="310px"
              h="310px"
              bg="#ccc"
              borderRadius="0.5rem"
            ></Box></a>
          ))}
        </SimpleGrid>

        <Swiper display={{ none: "flex", md: "none" }}>
          {images.map((img, index) => (
            <SwiperSlide
              key={index}
              style={{ display: "flex", justifyContent: "center" }}
            >
           <a href={img.acf.url} target="__blank">
           <Box
            border={`1px solid ${themeColors.primary}` }
              style={{
                backgroundImage: `url(${img._embedded['wp:featuredmedia'][0].source_url})` ,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              w="310px"
              h="310px"
              bg="#ccc"
              borderRadius="0.5rem"
            ></Box>
           </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Section>
  );
}
