import { Box, Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";

export function Header() {
  return (
    <Flex w="100%" justify="space-between" ml="7%">
      <Logo />
      <Flex justify="flex-end" mr="10%">
        <NavLinks />
        <NavLinks />
        <NavLinks />
        <NavLinks />
      </Flex>
    </Flex>
  );
}
