import { themeColors } from "@/theme/colors";
import { Badge, Box, Flex, HStack, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export default function Review({ name, description, label }) {
  return (
    <Box
      h={{none: "360px", md: "250px", lg: "340px"}}
      bg="white"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p="2rem"
      boxShadow="md"
      rounded="md"
    >
      <div>
        <HStack mb="4">
          {Array(5)
            .fill()
            .map((_, index) => (
              <StarIcon
                key={`star-${index}`}
                color="#FFD700"
                boxSize="1.2rem"
              />
            ))}
        </HStack>
        <div
          style={{ marginBottom: "4rem" }}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <Flex justify="space-between" alignItems="center">
        <Text fontSize="sm" color={themeColors.secondary}>
          - {name}
        </Text>
        <Badge p="0.3rem" colorScheme="yellow" variant="outline">
          {label}
        </Badge>
      </Flex>
    </Box>
  );
}
