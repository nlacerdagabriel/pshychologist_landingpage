import { Badge, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Flower from "../../../public/flower.svg"
import { themeFontSize } from "@/theme/fontSize";
import { themeColors } from "@/theme/colors";

export default function Service({title, description}){
    return(
        <Container flex="1">
            <Flex  mb="1rem" alignItems="center">
                <Image style={{height: "2.5rem"}} src={Flower} alt="ícone de flor"/>
                <Badge ml="1rem" variant="dsBadge" textTransform="inherit" fontSize={themeFontSize.base}>{title}</Badge>
            </Flex>

            <div  dangerouslySetInnerHTML={{ __html: description }}/>
        </Container>
    )
}