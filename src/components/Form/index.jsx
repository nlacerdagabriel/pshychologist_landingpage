import { FormControl, Stack } from "@chakra-ui/react";
import Input from "../Input";
import TextArea from "../TextArea";
import CustomButton from "../CustomButton";

export default function Form() {
  return (
    <FormControl flex="1">
      <Stack spacing="1rem">
        <Stack
          spacing={{ none: "1rem", sm: "0 1rem" }}
          direction={{ none: "column", sm: "row" }}
        >
          <Input placeholder="Nome" />
          <Input placeholder="E-mail" />
        </Stack>

        <Stack
          spacing={{ none: "1rem", sm: "0 1rem" }}
          direction={{ none: "column", sm: "row" }}
        >
          <Input placeholder="Telefone" />
          <Input placeholder="Assunto" />
        </Stack>

        <TextArea placeholder="Mensagem" />

        <CustomButton height={{ none: "5rem", md: "4rem" }}>
          Enviar
        </CustomButton>
      </Stack>
    </FormControl>
  );
}
