import { themeColors } from "@/theme/colors";
import { Input } from "@chakra-ui/react";
import { borderColor } from "polished";

export const focusVisibleStyle = {
  borderColor: themeColors.secondary,
  boxShadow: `0 0 0 1px ${themeColors.secondary}`,
  backgroundColor: "rgba(0,0,0,0.0)"
};


export default function (props, { placeholder }) {

  return (
    <Input
    height={{none: "4rem", md: "3rem"}}
      _focusVisible={focusVisibleStyle}
      backgroundColor={themeColors.primary_light}
      placeholder={placeholder}
      {...props}
    />
  );
}
