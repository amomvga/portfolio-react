import { Box, Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { NavSection } from "./NavSection";

export function Header() {
  return (
    <Flex w="100%" justify="space-between" ml="7%">
      <Logo />
      <Flex justify="flex-end" mr="10%">
        <NavSection />
      </Flex>
    </Flex>
  );
}
