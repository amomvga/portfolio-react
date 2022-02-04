import {
  Flex,
  Text,
  Link as ChakraLink,
  LinkProps as chakraLinkProps,
} from "@chakra-ui/react";

interface NavLinksProps extends chakraLinkProps {
  children: string;
}

export function NavLinks({ children, ...rest }: NavLinksProps) {
  return (
    <Flex alignItems="center">
      <ChakraLink {...rest}>
        <Text p="4">{children}</Text>
      </ChakraLink>
    </Flex>
  );
}
