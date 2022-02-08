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
import { useEffect } from "react";
import { RiMenuLine } from "react-icons/ri";
// import { useHeaderDrawer } from "../../contexts/HeaderDrawerContext";
import { Logo } from "./Logo";
import { NavSection } from "./NavSection";

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  var test = true;


  function disclosureDrawer() {
    isOpen= false
  }

  // const { onOpen, onClose } = useHeaderDrawer();

  return (
    <Flex w="100%" justify="space-between" justifyContent="center">
      <Flex
        as="header"
        w="100%"
        maxWidth={1480}
        justify="space-between"
        align="center"
      >
        {!!isWideVersion ? (
          <Flex w="100%" justify="space-between" justifyContent="center">
            <Flex
              as="header"
              w="100%"
              maxWidth={1480}
              justify="space-between"
              align="center"
            >
              <Logo />
            </Flex>
            <Drawer isOpen={false} placement="top" onClose={(isOpen)=>{ isOpen = true }}>
              <DrawerOverlay>
                <DrawerContent bg="gray.800">
                  <DrawerCloseButton mt="6" onClick={disclosureDrawer} />
                  <DrawerHeader>Navegação:</DrawerHeader>
                  <DrawerBody>
                    <NavSection />
                  </DrawerBody>
                </DrawerContent>
              </DrawerOverlay>
            </Drawer>
            <IconButton
              aria-label="Open Navegation"
              icon={<Icon as={RiMenuLine} />}
              variant="unstyled"
              onClick={disclosureDrawer}
              mr="2"
            />
          </Flex>
        ) : (
          <Flex w="100%" justify="space-between" justifyContent="center">
            <Flex
              as="header"
              w="100%"
              maxWidth={1480}
              justify="space-between"
              align="center"
            >
              <Logo />
              <Flex justify="flex-end">
                <NavSection />
              </Flex>
            </Flex>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
