import SectionTitle from "@/components/SectionTitle";
import Section from "@/components/Section";
import Service from "@/components/Service";
import { Container, SimpleGrid } from "@chakra-ui/react";
import { services } from "@/data/services";
import Swiper from "@/components/Swiper";
import { SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Services() {
  const refGrid = useRef(null);
  const isInViewGrid = useInView(refGrid, { once: true, amount: 0.1 });

  return (
    <Section
      id="servicos"
      flexDirection="column"
      maxW="container.xl"
      alignItems="center"
      m="0 auto"
    >
      <SectionTitle>Serviços</SectionTitle>
      <SimpleGrid
        ref={refGrid}
        style={{
          transform: isInViewGrid ? "none" : "translateY(100px)",
          opacity: isInViewGrid ? 1 : 0,
          transition: "400ms",
        }}
        display={{ none: "none", md: "grid" }}
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacingY="4rem"
      >
        {services.map((it, index) => (
          <Service key={index} title={it.title} description={it.description} />
        ))}
      </SimpleGrid>


        <Swiper maxW="inherit" display={{ none: "flex", md: "none" }}>
          {services.map((it, index) => (
            <SwiperSlide>
              <Service
                key={index}
                title={it.title}
                description={it.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
    </Section>
  );
}
