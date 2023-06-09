import { themeColors } from "@/theme/colors";
import {
  Badge,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import Logo from "../Logo";
import Crp from "../Crp";
import SocialIcons from "../SocialIcons";
import { themeFontSize } from "@/theme/fontSize";
import { openingHours } from "@/data/opening-hours";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { AiFillCloseCircle } from "react-icons/ai";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Infos() {

  const refInfos = useRef(null);
  const isInViewInfos= useInView(refInfos, { once: true, amount: 0.5});

  return (
    <Flex
    ref={refInfos}

    style={{
      transform: isInViewInfos ? "none" : "translateX(-100px)",
      opacity: isInViewInfos ? 1 : 0,
      transition: "400ms",
    }}
      p="2rem"
      mr={{none: "0", llg: "1rem"}}
      alignItems="center"
      borderRadius="0.375rem;"
      color={themeColors.text}
      bg={themeColors.primary_light}
      border={`1px solid ${themeColors.secondary}`}
      boxShadow={`0 0 0 1px ${themeColors.secondary}`}
      flex="1"
      justifyContent={{ md: "space-evenly", llg: "space-between" }}
      mb={{ none: "2rem", llg: "0" }}
      direction={{ none: "column", ssm: "row" }}
    >
      <Stack
        mb={{ none: "2rem", ssm: "0" }}
        mr={{ none: "0", ssm: "2rem" }}
        spacing="2rem"
      >
        <Logo />
        <Crp />
        <SocialIcons />
      </Stack>

      <Stack
        maxW={{ sm: "450px", llg: "inherit" }}
        flex="1"
        alignItems="center"
        spacing="1rem"
      >
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
  );
}
