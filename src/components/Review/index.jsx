import { themeColors } from "@/theme/colors";
import { Badge, Box, Flex, HStack, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export default function Review({ name, description }) {
  return (
    <Box bg="white" p="2rem" boxShadow="md" rounded="md">
      <HStack mb="4">
        {Array(5)
          .fill()
          .map((_, index) => (
            <StarIcon key={`star-${index}`} color="#FFD700" boxSize="1.2rem" />
          ))}
      </HStack>
      <Text mb="4">{description}</Text>
      <Flex justify="space-between" alignItems="center">
        <Text fontSize="sm" color={themeColors.secondary}>
          - {name}
        </Text>
        <Badge p="0.3rem" colorScheme="yellow" variant="outline">um mes atrás</Badge>
      </Flex>
    </Box>
  );
}
