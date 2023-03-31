import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { themeColors } from "../colors";
import { themeFontSize } from "../fontSize";

const dsTextHeader = defineStyle({
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: themeFontSize.base,
  color: themeColors.black,
  _hover: {
    color: themeColors.primary,
  },
});

export const textTheme = defineStyleConfig({
  variants: { dsTextHeader },
});
