import {
  Box,
  Flex,
  HStack,
  IconButton,
  SimpleGrid,
  Text,
  Link,
} from "@chakra-ui/react";
import { Header } from "../components/Header";
import homeImg from "../assets/home-main.svg";
import Image from "next/image";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";

function Home() {
  return (
    <Flex direction="column" width="100%" height="100vh">
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
              Desenvolvedor&#160;
              <Text
                as="span"
                color="pink.500"
                fontSize={["2xl", "3xl", "xx-large"]}
              >
                React.js | Node.js
              </Text>
            </Text>
          </Box>
          <Box>
            <Image src={homeImg} />
          </Box>
        </SimpleGrid>
      </Flex>
      <Flex direction="column" align="center">
        <Flex>
          <HStack spacing="2">
            <Link
              as={RiLinkedinBoxFill}
              fontSize={["2xl", "4xl"]}
              _hover={{ color: "purple.700" }}
            />
            <Link
              as={RiGithubFill}
              fontSize={["2xl", "4xl"]}
              _hover={{ color: "purple.700" }}
            />
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Home;
