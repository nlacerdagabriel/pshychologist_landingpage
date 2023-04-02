import { themeColors } from "@/theme/colors";
import { themeFontSize } from "@/theme/fontSize";
import {  Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import BusinessWoman from "../../../public/business-woman.png";
import CustomButton from "@/components/CustomButton";

export default function Introduction() {
  return (
    <Container minH={{none: "50vh"}} display="flex" alignItems={{none: "center", ssm: "flex-end"}} pt="100px" maxW="100%" bg={themeColors.primary_light}>
      <Flex
        justifyContent={{none: "center", ssm: "space-between"}}
        alignItems="center"
        maxW="container.xl"
        w="100%"
        m="0 auto"
      >
        <Container maxW={{none: "400px", ssm: "615px"}} m="0">
          <Text
            fontSize={{none: "0.9rem", md: themeFontSize.m}}
            color={themeColors.secondary}
            fontWeight="bold"
          >
            Isso é cuidados mentais
          </Text>
          <Heading
            mb="1.5rem"
            color={themeColors.primary}
            fontSize={{none: "3rem", md: themeFontSize.xxl}}
            lineHeight={{none: "3rem", md: "4rem"}}
          >
            Como você está se sentindo hoje?
          </Heading>
          <Text
            fontSize={{none: "1.1rem", md: themeFontSize.l}}
            mb="1rem"
            lineHeight={themeFontSize.l}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in magna
            vel purus cursus fermentum eget at.
          </Text>
          <CustomButton>Marcar horário</CustomButton>
        </Container>

        <Box display={{none: "none", ssm: "inherit"}}>
        <Image src={BusinessWoman} />
        </Box>
      </Flex>
    </Container>
  );
}
