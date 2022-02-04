import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";

function About() {
  return (
    <Flex w="100%" h="100%" align="center" justify="center" direction="column">
      <Flex as="header" w="100%" h="100%">
        <Header />
      </Flex>
      <Flex w="100vw" h="80vh" align="center" justify="center"></Flex>
    </Flex>
  );
}

export default About;
