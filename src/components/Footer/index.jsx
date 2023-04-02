import { Flex, Stack, Text } from "@chakra-ui/react";
import SocialIcons from "../SocialIcons";
import Logo from "../Logo";
import Crp from "../Crp";
import { themeColors } from "@/theme/colors";
import Link from "next/link";
import { themeFontSize } from "@/theme/fontSize";

export default function Footer() {
  return (
    <footer>

      <Text p="1rem" bg={themeColors.black} textAlign="center" color={themeColors.white} fontSize="14px">
      © {new Date().getFullYear()} Copyright:
        <Link href="http://www.gabriel-lacerda.com"> Gabriel Lacerda</Link>
      </Text>
    </footer>
  );
}
