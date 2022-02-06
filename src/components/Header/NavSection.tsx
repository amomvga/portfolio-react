import { Flex } from "@chakra-ui/react";
import { NavLinks } from "./NavLinks";

export function NavSection() {
  return (
    <Flex>
      <NavLinks href="/">Home</NavLinks>
      <NavLinks href="/about">About</NavLinks>
      <NavLinks href="/projects">Projects</NavLinks>
    </Flex>
  );
}
