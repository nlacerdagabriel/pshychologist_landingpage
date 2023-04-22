import { Container } from "@chakra-ui/react";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import Review from "@/components/Review";
import { themeColors } from "@/theme/colors";
import Swiper from "@/components/Swiper";
import { SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Reviews({ reviews }) {
  const refSwiper = useRef(null);
  const isInViewSwiper = useInView(refSwiper, { once: true, amount: 0.1 });

  return (
    <Container id="avaliacoes" maxW="100%" bg={themeColors.primary_light}>
      <Section
        p={{ none: "48px 0", md: "96px 0" }}
        flexDirection="column"
        alignItems="center"
        m="0 auto"
        maxW="container.xl"
      >
        <SectionTitle>Avaliações</SectionTitle>
        <Container
          style={{
            transform: isInViewSwiper ? "none" : "translateY(100px)",
            opacity: isInViewSwiper ? 1 : 0,
            transition: "400ms",
            padding: "0",
          }}
          ref={refSwiper}
          w="100%"
          maxW="100%"
        >
          <Swiper maxW="inherit">
            {reviews.map((it, index) => (
              <SwiperSlide key={index}>
                <Review
                  name={it.title.rendered}
                  description={it.excerpt.rendered}
                  label={it.acf.label}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Section>
    </Container>
  );
}
