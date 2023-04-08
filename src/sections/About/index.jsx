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

export default function About({about}) {
  const refImage = useRef(null);
  const refText = useRef(null);
  const isInViewImage = useInView(refImage, { once: true, amount: 0.3});
  const isInViewText = useInView(refText, { once: true, amount: 0.3});


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
            transform: isInViewImage ? "none" : "translateX(-100px)",
            opacity: isInViewImage ? 1 : 0,
            transition: "400ms",
          }}
          ref={refImage} src={PersonalPhoto} />
          
      <Container ref={refText} style={{
            transform: isInViewText ? "none" : "translateX(100px)",
            opacity: isInViewText ? 1 : 0,
            transition: "400ms",
          }}  mt={{none: "2rem", md: "0"}} maxW="545px">
        <SectionTitle>Sobre mim</SectionTitle>
        <div  dangerouslySetInnerHTML={{ __html: about.content.rendered }} style={{marginBottom: "2rem"}}/>

       

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
