import { themeColors } from "@/theme/colors";
import { themeFontSize } from "@/theme/fontSize";
import { Heading } from "@chakra-ui/react";

export default function SectionTitle({children}){

    return(
        <Heading color={themeColors.primary} mb="3rem" fontSize={themeFontSize.xl}>{children}</Heading>
    )
}