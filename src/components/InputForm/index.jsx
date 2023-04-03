import { themeColors } from "@/theme/colors";
import { Flex, Input, Stack, Text } from "@chakra-ui/react";

export const focusVisibleStyle = {
  borderColor: themeColors.secondary,
  boxShadow: `0 0 0 1px ${themeColors.secondary}`,
  backgroundColor: "rgba(0,0,0,0.0)",
};

export default function InputForm ({ placeholder, name, rules, register, type = "text", error}) {
  return (
    <Flex direction="column" flex="1">
      <Input
      height={{ none: "4rem", md: "3rem" }}
      _focusVisible={focusVisibleStyle}
      backgroundColor={themeColors.primary_light}
      placeholder={placeholder}
      {...register(name, rules) }
      type={type}
    />

    {error && (
      <Text color="red.500" fontSize="12px" paddingLeft="8px">
        {error.message}
      </Text>
    )}
    </Flex>
  );
}
