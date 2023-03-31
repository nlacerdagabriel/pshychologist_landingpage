import SectionTitle from "@/components/SectionTitle";
import Section from "@/components/Section";
import Service from "@/components/Service";
import { SimpleGrid } from "@chakra-ui/react";

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
      <SimpleGrid columns={3} spacingY="4rem">
        <Service
          title="Terapia individual"
          description="A terapia individual é um serviço prestado por psicólogos que envolve sessões de conversa entre o psicólogo e o paciente, com o objetivo de ajudar o indivíduo a lidar com problemas emocionais, comportamentais ou de relacionamento."
        />
        <Service
          title="Aconselhamento"
          description="O aconselhamento é um serviço que ajuda as pessoas a lidar com questões específicas de vida, como problemas de relacionamento, escolhas de carreira, problemas familiares, entre outros."
        />
        <Service
          title="Terapia de casal"
          description="A terapia de casal é um serviço em que um psicólogo trabalha com um casal para ajudá-los a melhorar seu relacionamento. O objetivo é identificar problemas e encontrar soluções para melhorar a comunicação e a qualidade do relacionamento."
        />
        <Service
          title="Terapia familiar"
          description="A terapia familiar é um serviço que ajuda as famílias a lidar com problemas em grupo. O objetivo é melhorar a comunicação e o relacionamento entre os membros da família."
        />
        <Service
          title="Psicodiagnóstico"
          description="O psicodiagnóstico é um serviço que envolve uma avaliação detalhada do paciente, com o objetivo de entender seu perfil psicológico, seus pontos fortes e fracos e suas dificuldades. É um processo que ajuda o psicólogo a identificar o melhor tipo de terapia para o paciente."
        />
        <Service
          title="Orientação profissional"
          description="A orientação profissional é um serviço que ajuda as pessoas a escolher uma carreira que seja adequada a seus interesses, habilidades e valores. O objetivo é ajudar os indivíduos a tomar uma decisão informada sobre seu futuro profissional."
        />
      </SimpleGrid>
    </Section>
  );
}
