import { Flex, Text } from "@chakra-ui/react";
import Link  from "next/link";

interface NavLinksProps {
  children: string;
  href: string;
}

export function NavLinks({ children, href, ...rest }: NavLinksProps) {
  return (
    <Flex alignItems="center">
      <Link href={href} {...rest}>
        <Text p="4">{children}</Text>
      </Link>
    </Flex>
  );
}
