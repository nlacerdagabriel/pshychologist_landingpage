import { Textarea } from "@chakra-ui/react";
import { focusVisibleStyle } from "../Input";
import { themeColors } from "@/theme/colors";

export default function TextArea(props, {placeholder}){
    return(
        <Textarea resize="none" h="150px" _focusVisible={focusVisibleStyle} backgroundColor={themeColors.primary_light} placeholder={placeholder} {...props}/>
    )
}