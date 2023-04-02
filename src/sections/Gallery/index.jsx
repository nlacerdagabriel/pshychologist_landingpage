import { themeColors } from "@/theme/colors";
import { themeFontSize } from "@/theme/fontSize";
import { Box, Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { rgba } from "polished";
import SectionTitle from "../../components/SectionTitle";
import Section from "../../components/Section";

export default function Gallery() {
  return (
    <Section id="galeria" maxW="100%"  bg={themeColors.primary_light}>
      <Flex flexDirection="column" m="0 auto" alignItems="center">
        <SectionTitle>Galeria</SectionTitle>
        <SimpleGrid gap="2rem" columns={{sm: 1, md: 2, lg: 3}}>
          <Box w="310px" h="310px" bg="#ccc" borderRadius="0.5rem"></Box>
          <Box w="310px" h="310px" bg="#ccc" borderRadius="0.5rem"></Box>
          <Box w="310px" h="310px" bg="#ccc" borderRadius="0.5rem"></Box>
          <Box w="310px" h="310px" bg="#ccc" borderRadius="0.5rem"></Box>
          <Box w="310px" h="310px" bg="#ccc" borderRadius="0.5rem"></Box>
          <Box w="310px" h="310px" bg="#ccc" borderRadius="0.5rem"></Box>
          <Box w="310px" h="310px" bg="#ccc" borderRadius="0.5rem"></Box>
          <Box w="310px" h="310px" bg="#ccc" borderRadius="0.5rem"></Box>
          <Box w="310px" h="310px" bg="#ccc" borderRadius="0.5rem"></Box>
        </SimpleGrid>
      </Flex>
    </Section>
  );
}
