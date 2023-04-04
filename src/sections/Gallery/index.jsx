import { themeColors } from "@/theme/colors";
import { Box, Container, Flex, SimpleGrid } from "@chakra-ui/react";
import SectionTitle from "../../components/SectionTitle";
import Section from "../../components/Section";
import { SwiperSlide } from "swiper/react";
import Swiper from "@/components/Swiper";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Gallery() {
  const refColumnOne = useRef(null);
  const isInViewColumnOne = useInView(refColumnOne, {
    once: true,
    amount: 0.4,
  });
  const refColumnTwo = useRef(null);
  const isInViewColumnTwo = useInView(refColumnTwo, {
    once: true,
    amount: 0.4,
  });
  const refColumnThree = useRef(null);
  const isInViewColumnThree = useInView(refColumnThree, {
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
  {Array.from({ length: 3 }).map((_, index) => (
              <Box key={index}   ref={refColumnOne}
              style={{
                transform: isInViewColumnOne? "none" : "translateX(300px)",
                opacity: isInViewColumnOne? 1 : 0,
                transition: "300ms",
              }} w="310px" h="310px" bg="#ccc" borderRadius="0.5rem"></Box>
            ))}
  {Array.from({ length: 3 }).map((_, index) => (
              <Box  key={index}  ref={refColumnTwo}
              style={{
                transform: isInViewColumnTwo ? "none" : "translateX(-300px)",
                opacity: isInViewColumnTwo ? 1 : 0,
                transition: "300ms",
              }} w="310px" h="310px" bg="#ccc" borderRadius="0.5rem"></Box>
            ))}
  {Array.from({ length: 3 }).map((_, index) => (
              <Box  key={index}  ref={refColumnThree}
              style={{
                transform: isInViewColumnThree ? "none" : "translateX(300px)",
                opacity: isInViewColumnThree ? 1 : 0,
                transition: "300ms",
              }} w="310px" h="310px" bg="#ccc" borderRadius="0.5rem"></Box>
            ))}
          
        </SimpleGrid>

        <Swiper display={{ none: "flex", md: "none" }}>
          {Array.from({ length: 9 }).map((_, index) => (
            <SwiperSlide
              key={index}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box w="310px" h="310px" bg="#ccc" borderRadius="0.5rem"></Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Section>
  );
}
