import {
  Badge,
  Box,
  Flex,
  FormControl,
  Heading,
  IconButton,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import { themeColors } from "@/theme/colors";
import Image from "next/image";
import { CheckCircleIcon, EmailIcon } from "@chakra-ui/icons";
import { themeFontSize } from "@/theme/fontSize";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { openingHours } from "@/data/opening-hours";
import CustomButton from "@/components/CustomButton";
import SocialIcons from "@/components/SocialIcons";
import Logo from "@/components/Logo";
import Crp from "@/components/Crp";

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
        <Flex
          p="2rem"
          mr="1rem"
          alignItems="center"
          borderRadius="0.375rem;"
          color={themeColors.text}
          bg={themeColors.primary_light}
          border={`1px solid ${themeColors.secondary}`}
          boxShadow={`0 0 0 1px ${themeColors.secondary}`}
          flex="1"
          justifyContent={{md: "space-evenly", llg: "space-between"}}
          mb={{none: "2rem", llg: "0"}}
          direction={{none: "column", ssm: "row"}}
        >
          <Stack mb={{none: "2rem", ssm: "0"}} mr={{none: "0", ssm: "2rem"}} spacing="2rem">
            <Logo />
            <Crp/>
            <SocialIcons />
          </Stack>

          <Stack maxW={{sm: "450px", llg: "inherit"}} flex="1" alignItems="center" spacing="1rem">
            <Heading fontSize={themeFontSize.l} as="h3">
              Horários de atendimento:
            </Heading>
            <List w="80%" spacing="0.5rem">
              {openingHours.map((it, index) => (
                <ListItem key={index} display="flex" alignItems="center">
                  {it.closed ? (
                    <ListIcon
                      transform="scale(1.2)"
                      as={AiFillCloseCircle}
                      color="red.500"
                    />
                  ) : (
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                  )}

                  <Flex
                    w="100%"
                    justifyContent="space-between"
                    direction="row"
                    alignItems="center"
                  >
                    <Badge alignItems="center" variant="dsBadge" mr="0.5rem">
                      {it.weekday}
                    </Badge>
                    <Text>{it.time}</Text>
                  </Flex>
                </ListItem>
              ))}
            </List>
          </Stack>
        </Flex>
        <FormControl flex="1">
          <Stack spacing="1rem">
            <Stack spacing={{none: "1rem", sm: "0 1rem"}} direction={{none: "column", sm: "row"}}>
              <Input placeholder="Nome" />
              <Input placeholder="E-mail" />
            </Stack>

            <Stack spacing={{none: "1rem", sm: "0 1rem"}} direction={{none: "column", sm: "row"}}>
              <Input placeholder="Telefone" />
              <Input placeholder="Assunto" />
            </Stack>

            <TextArea placeholder="Mensagem" />

            <CustomButton height={{none: "5rem", md: "4rem"}}>Enviar</CustomButton>
          </Stack>
        </FormControl>
      </Flex>
    </Section>
  );
}
