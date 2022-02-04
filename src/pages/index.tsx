import { Box, Flex, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import homeImg from "../Assets/home-main.svg";
import Image from "next/image";

function Home() {
  return (
    <Flex w="100%" h="100%" align="center" justify="center" direction="column">
      <Flex as="header" w="100%" h="100%">
        <Header />
      </Flex>
      <Flex w="100vw" h="80vh" align="center" justify="center">
        <Box p="8">
          <Text fontSize="xx-large" p="2">
            Olá, todos!
          </Text>
          <Text fontSize="xx-large" p="2">
            Me chamo Amom Augusto
          </Text>
          <Text fontSize="xx-large" p="2">
            Desenvolvedor React.js | Node.js
          </Text>
        </Box>
        <Box boxSize="sm" p="4">
          <Image src={homeImg} />
        </Box>
      </Flex>
    </Flex>
  );
}

export default Home;
