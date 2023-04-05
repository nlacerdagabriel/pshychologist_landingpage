import { themeFontSize } from "@/theme/fontSize";
import {
  Button,
  Flex,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import CustomButton from "../CustomButton";
import Logo from "../Logo";
import React, { useEffect, useRef, useState } from "react";
import DrawerMenu from "../DrawerMenu";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import {
  motion, useInView,
} from "framer-motion";

export default function Header() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const btnRef = useRef();
  const headerRef = useRef()
  const isInViewHeader = useInView(headerRef, { once: true });

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <DrawerMenu isOpen={isOpen} onClose={onClose} btnRef={btnRef} />

      <header
        ref={headerRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 999,
          transform: isInViewHeader ? "none" : "translateY(-80px)",
          opacity: isInViewHeader ? 1 : 0,
          transition: "400ms",
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
          <IconButton
            display={{ sm: "block", lg: "none" }}
            ref={btnRef}
            colorScheme="dsColorScheme"
            variant="outline"
            onClick={onOpen}
            aria-label="Abrir menu"
            icon={<HamburgerIcon />}
          />
          <Link href="#">
            <Logo />
          </Link>
          <Flex
            display={{ none: "none", lg: "flex" }}
            gap="2rem"
            fontSize={themeFontSize.base}
          >
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

          <CustomButton display={{ none: "none", sm: "inherit" }}>
            Marcar horário
          </CustomButton>
        </Flex>
      </header>

      <motion.header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 999,
          backgroundColor: "#FFF",
          boxShadow: " 0px -2px 30px -14px rgba(0,0,0,0.56)",
        }}
        initial={{ y: -80 }}
        animate={{ y: isSticky ? 0 : -80 }}
        transition={{ duration: 0.3 }}
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
          <IconButton
            display={{ sm: "block", lg: "none" }}
            ref={btnRef}
            colorScheme="dsColorScheme"
            variant="outline"
            onClick={onOpen}
            aria-label="Abrir menu"
            icon={<HamburgerIcon />}
          />
          <Link href="#">
            <Logo />
          </Link>
          <Flex
            display={{ none: "none", lg: "flex" }}
            gap="2rem"
            fontSize={themeFontSize.base}
          >
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

          <CustomButton display={{ none: "none", sm: "inherit" }}>
            Marcar horário
          </CustomButton>
        </Flex>
      </motion.header>
    </>
  );
}
