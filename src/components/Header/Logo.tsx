import { Flex, Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Flex alignItems="center" p="4">
      <Text color="pink.500" fontSize="xxx-large">
        &lt;
      </Text>
      <Text mt="2" fontSize="xx-large">
        Amom Augusto
      </Text>
      <Text color="pink.500" fontSize="xxx-large">
        &gt;
      </Text>
    </Flex>
  );
}
