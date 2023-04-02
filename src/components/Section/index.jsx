import { Flex } from "@chakra-ui/react";

export default function Section(props){
    return(
        <Flex p="96px 2rem" {...props}>
            {props.children}
        </Flex>
    )
}