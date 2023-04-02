import { Box, Container } from "@chakra-ui/react";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper/core";
SwiperCore.use([Navigation]);
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Review from "@/components/Review";
import { reviews } from "@/data/reviews";
import { themeColors } from "@/theme/colors";

export default function Reviews() {

  const breakpoints = {
    0:{
      slidesPerView: 1
    },
    992: {
      slidesPerView: 2
    }
  }

  return (
    <Container id="avaliacoes" maxW="100%" bg={themeColors.primary_light}>
      <Section
        flexDirection="column"
        alignItems="center"
        m="0 auto"
        maxW="container.xl"
      >
        <SectionTitle>Avaliações</SectionTitle>
        <Container maxWidth="inherit">
          <Swiper
          breakpoints={breakpoints}
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={2}
            slidesPerGroup={1}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={70}
            style={{ padding: "0 4rem 6rem 4rem" }}
          >
            {reviews.map((it) => (
              <SwiperSlide>
                <Review name={it.name} description={it.description} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Section>
    </Container>
  );
}
