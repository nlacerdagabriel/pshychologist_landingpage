import { Flex } from "@chakra-ui/react";

export default function Section(props){
    return(
        <Flex p="96px 0" {...props}>
            {props.children}
        </Flex>
    )
}