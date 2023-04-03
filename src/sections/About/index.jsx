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
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const refImage = useRef(null);
  const refText = useRef(null);
  const isInViewImage = useInView(refImage, { once: true, amount: 0.5});
  const isInViewText = useInView(refText, { once: true, amount: 0.5});


  return (
    <Section
      id="sobre"
      maxW="1000px"
      m="0 auto"
      alignItems="center"
      justifyContent="space-between"
      direction={{ none: "column", md: "row" }}
    >

        <Image   style={{
            transform: isInViewImage ? "none" : "translateX(-200px)",
            opacity: isInViewImage ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          ref={refImage} src={PersonalPhoto} />
          
      <Container ref={refText} style={{
            transform: isInViewText ? "none" : "translateX(200px)",
            opacity: isInViewText ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}  mt={{none: "2rem", md: "0"}} maxW="545px">
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
