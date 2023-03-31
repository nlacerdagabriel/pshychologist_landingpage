import { darken } from 'polished';
import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { themeFontSize } from '../fontSize';
import { themeColors } from '../colors';

const dsButton = defineStyle({
    padding: "1.5rem",
    color: themeColors.white,
    bg: themeColors.primary,
    fontSize: themeFontSize.base,
    transition: "300ms",
    _hover:{
      bg: darken(0.2, themeColors.primary)
    }
  });
  
  export const buttonTheme = defineStyleConfig({
    variants: { dsButton },
  });