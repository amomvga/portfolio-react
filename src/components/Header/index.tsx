import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useHeaderDrawer } from "../../contexts/HeaderDrawerContext";
import { Logo } from "./Logo";
import { NavSection } from "./NavSection";

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  const { onOpen, onClose } = useHeaderDrawer();

  if (isWideVersion) {
    return (
      <Drawer isOpen={true} placement="top" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação:</DrawerHeader>
            <DrawerBody>
              <NavSection />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Flex w="100%" justify="space-between" justifyContent="center">
      <Flex
        as="header"
        w="100%"
        maxWidth={1480}
        justify="space-between"
        align="center"
      >
        {!isWideVersion && (
          <IconButton
            aria-label="Open Navegation"
            icon={<Icon as={RiMenuLine} />}
            variant="unstyled"
            onClick={onOpen}
            mr="2"
          ></IconButton>
        )}

        <Logo />

        
        <Flex justify="flex-end">
          <NavSection />
        </Flex>
      </Flex>
    </Flex>
  );
}
