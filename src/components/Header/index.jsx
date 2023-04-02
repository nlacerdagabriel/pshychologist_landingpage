import { themeFontSize } from "@/theme/fontSize";
import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../CustomButton";
import Logo from "../Logo";

export default function Header() {
  return (
    <header
      style={{
        boxShadow: " 0px -2px 30px -14px rgba(0,0,0,0.56)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#FFF",
        zIndex: 9,
      }}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        maxW="container.xl"
        width="100%"
        p="0 1rem"
        m="0 auto"
        height="80px"
      >
        <Link href="#">
          <Logo/>
        </Link>
        <Flex gap="2rem" fontSize={themeFontSize.base}>
          <Link href="#">
            <Text variant="dsTextHeader">Início</Text>
          </Link>
          <Link href="#sobre">
            <Text variant="dsTextHeader">Sobre</Text>
          </Link>
          <Link href="#galeria">
            <Text variant="dsTextHeader">Galeria</Text>
          </Link>
          <Link href="#servicos">
            <Text variant="dsTextHeader">Serviços</Text>
          </Link>
          <Link href="#avaliacoes">
            <Text variant="dsTextHeader">Avaliações</Text>
          </Link>
          <Link href="#contato">
            <Text variant="dsTextHeader">Contato</Text>
          </Link>
        </Flex>

        <CustomButton>Marcar horário</CustomButton>
      </Flex>
    </header>
  );
}
