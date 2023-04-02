import { EmailIcon } from "@chakra-ui/icons";
import { IconButton, Stack } from "@chakra-ui/react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

export default function SocialIcons(props) {
  return (
    <Stack {...props} justifyContent="space-between" direction="row">
      <IconButton
        colorScheme="dsColorScheme"
        variant="outline"
        aria-label="Send email"
        icon={<EmailIcon />}
      />
      <IconButton
        colorScheme="dsColorScheme"
        variant="outline"
        aria-label="Send whatsapp"
        icon={<BsWhatsapp />}
      />
      <IconButton
        colorScheme="dsColorScheme"
        variant="outline"
        aria-label="See instagram"
        icon={<BsInstagram />}
      />
    </Stack>
  );
}
