import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import homeImg from "../assets/home-main.svg";
import Image from "next/image";

function Home() {
  return (
    <Flex direction="column" width="100vw" height="100vh">
      <Flex>
        <Header />
      </Flex>

      <Flex justify="center">
        <SimpleGrid minChildWidth="300px">
          <Box
            p="4"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Text fontSize={["2xl", "3xl", "xx-large"]}>Olá, todos!</Text>
            <Text fontSize={["2xl", "3xl", "xx-large"]}>
              Me chamo Amom Augusto
            </Text>
            <Text fontSize={["2xl", "3xl", "xx-large"]}>
              Desenvolvedor React.js | Node.js
            </Text>
          </Box>
          <Box>
            <Image src={homeImg} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

export default Home;
