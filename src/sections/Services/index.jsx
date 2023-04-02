import SectionTitle from "@/components/SectionTitle";
import Section from "@/components/Section";
import Service from "@/components/Service";
import { SimpleGrid } from "@chakra-ui/react";
import { services } from "@/data/services";

export default function Services() {
  return (
    <Section
      id="servicos"
      flexDirection="column"
      maxW="container.xl"
      alignItems="center"
      m="0 auto"
    >
      <SectionTitle>Serviços</SectionTitle>
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} spacingY="4rem">
        {services.map((it, index) => (
          <Service key={index} title={it.title} description={it.description} />
        ))}
      </SimpleGrid>
    </Section>
  );
}
