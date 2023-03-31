import { extendTheme } from "@chakra-ui/react";
import { themeColors } from "./colors";
import { buttonTheme } from "./variants/button";
import { textTheme } from "./variants/text";
import { badgeTheme } from "./variants/badge";
import { darken, rgba } from "polished";



export const theme = extendTheme({
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
