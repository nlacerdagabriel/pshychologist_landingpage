import {

  Flex,

} from "@chakra-ui/react";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import Infos from "@/components/Infos";
import Form from "@/components/Form";


export default function () {





  return (
    <Section
      id="contato"
      direction="column"
      alignItems="center"
      m="0 auto"
      maxW="container.xl"
    >
      <SectionTitle>Contato</SectionTitle>
      <Flex flexDirection={{none: "column", llg: "row"}} w="100%">
       <Infos  />
        <Form  />
      </Flex>
    </Section>
  );
}
