import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

interface NavLinksProps {
  children: string;
  href: string;
}

export function NavLinks({ children, href}: NavLinksProps) {
  return (
    <Flex>
      <Link href={href}>
        <Text cursor="pointer" m="4">
          {children}
        </Text>
      </Link>
    </Flex>
  );
}
