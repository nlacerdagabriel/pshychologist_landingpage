import { extendTheme } from "@chakra-ui/react";
import { themeColors } from "./colors";
import { buttonTheme } from "./variants/button";
import { textTheme } from "./variants/text";
import { badgeTheme } from "./variants/badge";
import { darken, rgba } from "polished";


export const theme = extendTheme({
  breakpoints : {
    none: "0em",
    sm: '30em', // 480px
    ssm: "38em", // 620px
    md: '48em', // 768px
    lg: '62em', // 992px
    llg: '70em', // 1124px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
  },
  colors: {
    themeColors,
    dsColorScheme: {
      50: rgba(themeColors.primary, 0.2),
      100: rgba(themeColors.primary, 0.6),
      600: themeColors.secondary
    }
  },
  components: { Button: buttonTheme, Text: textTheme, Badge: badgeTheme},
   
});
