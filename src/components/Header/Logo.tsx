import { Flex, Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Flex alignItems="center" p="4">
      <Text color="pink.500" fontSize={["2xl", "xxx-large"]}>
        &lt;
      </Text>
      <Text mt="2" fontSize={["lg", "xx-large"]}>
        Amom Augusto 
      </Text>
      <Text color="pink.500" fontSize={["xl", "xxx-large"]}>
      &nbsp;/
      </Text>
      <Text color="pink.500" fontSize={["2xl", "xxx-large"]}>
        &gt;
      </Text>
    </Flex>
  );
}
