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
import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import { Logo } from "./Logo";
import { NavSection } from "./NavSection";

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  const [openDrawer, setOpenDrawer] = useState(Boolean);

  function handleCloseDrawer() {
    setOpenDrawer(false);
  }

  function handleOpenDrawer() {
    setOpenDrawer(true);
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

              <IconButton
                aria-label="Open Navegation"
                icon={<Icon as={RiMenuLine} />}
                variant="unstyled"
                onClick={handleOpenDrawer}
                mr={["1","4"]}
                mt="2"
                fontSize={[20, 30]}
              />

              <Drawer
                isOpen={openDrawer}
                placement="top"
                onClose={handleCloseDrawer}
              >
                <DrawerOverlay>
                  <DrawerContent bg="gray.800">
                    <DrawerCloseButton mt="6" onClick={handleCloseDrawer} />
                    <DrawerHeader>Navegação:</DrawerHeader>
                    <DrawerBody>
                      <NavSection />
                    </DrawerBody>
                  </DrawerContent>
                </DrawerOverlay>
              </Drawer>
            </Flex>
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
