import { Box, Container } from "@chakra-ui/react";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import Review from "@/components/Review";
import { reviews } from "@/data/reviews";
import { themeColors } from "@/theme/colors";
import Swiper from "@/components/Swiper";
import { SwiperSlide } from "swiper/react";

export default function Reviews() {

  return (
    <Container id="avaliacoes" maxW="100%" bg={themeColors.primary_light}>
      <Section
        flexDirection="column"
        alignItems="center"
        m="0 auto"
        maxW="container.xl"
      >
        <SectionTitle>Avaliações</SectionTitle>
         <Swiper maxW="inherit">
            {reviews.map((it) => (
              <SwiperSlide>
                <Review name={it.name} description={it.description} />
              </SwiperSlide>
            ))}
          </Swiper>
      </Section>
    </Container>
  );
}
