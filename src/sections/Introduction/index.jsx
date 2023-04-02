import { themeColors } from "@/theme/colors";
import { themeFontSize } from "@/theme/fontSize";
import {  Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import BusinessWoman from "../../../public/business-woman.png";
import CustomButton from "@/components/CustomButton";

export default function Introduction() {
  return (
    <Container display="flex" alignItems="flex-end" pt="100px" maxW="100%" bg={themeColors.primary_light}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        maxW="container.xl"
        w="100%"
        m="0 auto"
      >
        <Container maxW="615px" m="0">
          <Text
            fontSize={themeFontSize.m}
            color={themeColors.secondary}
            fontWeight="bold"
            mb="1rem"
          >
            Isso é cuidados mentais
          </Text>
          <Heading
            mb="1.5rem"
            color={themeColors.primary}
            fontSize={themeFontSize.xxl}
            lineHeight="4rem"
          >
            Como você está se sentindo hoje?
          </Heading>
          <Text
            fontSize={themeFontSize.l}
            mb="1rem"
            lineHeight={themeFontSize.l}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in magna
            vel purus cursus fermentum eget at.
          </Text>
          <CustomButton>Marcar horário</CustomButton>
        </Container>

        <Image src={BusinessWoman} />
      </Flex>
    </Container>
  );
}
