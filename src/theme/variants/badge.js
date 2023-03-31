import { darken, rgba } from "polished";
import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { themeFontSize } from "../fontSize";
import { themeColors } from "../colors";

const dsBadge = defineStyle({
  backgroundColor: rgba(themeColors.secondary, 0.2),
  color: themeColors.secondary,
});

export const badgeTheme = defineStyleConfig({
  variants: { dsBadge },
});
