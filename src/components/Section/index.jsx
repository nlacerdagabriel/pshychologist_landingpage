import { Flex } from "@chakra-ui/react";

export default function Section(props) {
  return (
    <Flex overflow="hidden" p={{none:"48px 1rem", md: "96px 1rem"}} {...props}>
      {props.children}
    </Flex>
  );
}
