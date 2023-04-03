import { Flex, Text, Textarea } from "@chakra-ui/react";
import { focusVisibleStyle } from "../InputForm";
import { themeColors } from "@/theme/colors";

export default function TextArea({ placeholder, rules, name, register, error }) {
  return (
    <Flex direction="column" flex="1">
      <Textarea
        {...register(name, rules)}
        resize="none"
        h="150px"
        _focusVisible={focusVisibleStyle}
        backgroundColor={themeColors.primary_light}
        placeholder={placeholder}
      />

      {error && (
        <Text color="red.500" fontSize="12px" paddingLeft="8px">
          {error.message}
        </Text>
      )}
    </Flex>
  );
}
