import { themeFontSize } from "@/theme/fontSize";
import { Badge } from "@chakra-ui/react";

export default function Crp() {
  return (
    <Badge textAlign="center" fontSize={themeFontSize.s} variant="dsBadge">
      CRP: 06/155813
    </Badge>
  );
}
