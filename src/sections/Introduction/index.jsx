import { themeColors } from "@/theme/colors";
import { themeFontSize } from "@/theme/fontSize";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import BusinessWoman from "../../../public/business-woman.png";
import CustomButton from "@/components/CustomButton";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Introduction({introduction}) {
  const refImage = useRef(null);
  const isInViewImage = useInView(refImage, { once: true });
  const refText = useRef(null);
  const isInViewText = useInView(refText, { once: true });

  return (
    <Container
      
      display="flex"
      alignItems={{ none: "center", ssm: "flex-end" }}
      pt="150px"
      pb="100px"
      maxW="100%"
      bg={themeColors.primary_light}
    >
      <Flex
        justifyContent={{ none: "center", ssm: "space-between" }}
        alignItems="center"
        maxW="container.xl"
        w="100%"
        m="0 auto"
      >
        <Container
          style={{
            transform: isInViewText ? "none" : "translateX(-100px)",
            opacity: isInViewText ? 1 : 0,
            transition: "400ms",
          }}
          ref={refText}
          maxW={{ none: "400px", ssm: "615px" }}
          m="0"
        >
          <Text
            fontSize={{ none: "0.9rem", md: themeFontSize.m }}
            color={themeColors.secondary}
            fontWeight="bold"
          >
            {introduction.acf.label}
          </Text>
          <Heading
            mb="1.5rem"
            color={themeColors.primary}
            fontSize={{ none: "3rem", md: themeFontSize.xxl }}
            lineHeight={{ none: "3rem", md: "4rem" }}
          >
            {introduction.acf.titulo}
          </Heading>
          <Text
            fontSize={{ none: "1.1rem", md: themeFontSize.l }}
            mb="1rem"
            lineHeight={themeFontSize.l}
          >
            {introduction.acf.descricao}

          </Text>
          <CustomButton>Marcar horário</CustomButton>
        </Container>

        <Box  style={{
            transform: isInViewImage ? "none" : "translateX(100px)",
            opacity: isInViewImage ? 1 : 0,
            transition: "400ms",
          }}
          ref={refImage} display={{ none: "none", ssm: "inherit" }}>
          <Image src={BusinessWoman} />
        </Box>
      </Flex>
    </Container>
  );
}
