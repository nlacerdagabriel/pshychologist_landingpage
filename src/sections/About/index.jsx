import { themeFontSize } from "@/theme/fontSize";
import {
  Box,
  Container,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import PersonalPhoto from "../../../public/personal-photo.png";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { themeColors } from "@/theme/colors";
import SectionTitle from "../../components/SectionTitle";
import Section from "../../components/Section";

export default function About() {
  return (
    <Section
      id="sobre"
      maxW="1000px"
      m="0 auto"
      alignItems="center"
      justifyContent="space-between"
      direction={{ none: "column", md: "row" }}
    >

        <Image  src={PersonalPhoto} />
      <Container mt={{none: "2rem", md: "0"}} maxW="545px">
        <SectionTitle>Sobre mim</SectionTitle>
        <Text mb="1rem">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, Ipsum,
        </Text>
        <Text mb="2rem">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, Ipsum,
        </Text>

        <Heading
          mb="1rem"
          as="h3"
          color={themeColors.secondary}
          fontSize={themeFontSize.m}
        >
          Educação e Qualificações
        </Heading>
        <List>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Lorem ipsum dolor
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Lorem ipsum dolor
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Lorem ipsum dolor
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Lorem ipsum dolor
          </ListItem>
        </List>
      </Container>
    </Section>
  );
}
