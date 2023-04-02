import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper/core";
SwiperCore.use([Navigation]);
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Container } from "@chakra-ui/react";

export default function ({ children, display, maxW}) {
  const breakpoints = {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    992: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
  };

  return (
     <Container display={display} maxW={maxW}>
         <Swiper
        breakpoints={breakpoints}
        modules={[Navigation, Pagination, A11y]}
        pagination={{ clickable: true }}
        spaceBetween={70}
        style={{ paddingBottom: "6rem" }}
      >
        {children}
      </Swiper>
     </Container>
  );
}
