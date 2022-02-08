import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import homeImg from "../assets/home-main.svg";
import Image from "next/image";

function Home() {
  return (
    <Flex direction="column">
      <Flex w="100%">
        <Header />
      </Flex>

      <Flex w="100%" height="20rem" align="center" justify="center">
        <SimpleGrid minChildWidth="320px" spacing="40px">
          <Box height="80px" p="4" mb="40px">
            <Text fontSize={["2xl", "3xl", "xx-large"]} p="1">
              Olá, todos!
            </Text>
            <Text fontSize={["2xl", "3xl", "xx-large"]} p="1">
              Me chamo Amom Augusto
            </Text>
            <Text fontSize={["2xl", "3xl", "xx-large"]} p="1">
              Desenvolvedor React.js | Node.js
            </Text>
          </Box>
          <Box height="80px" minWidth="320px">
            <Image src={homeImg} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

export default Home;
