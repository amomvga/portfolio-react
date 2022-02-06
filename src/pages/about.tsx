import { Box, Flex, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";

function About() {
  return (
    <Flex direction="column">
      <Flex w="100%">
        <Header />
      </Flex>

      <Flex h="80vh" mr="5rem" ml="5rem" align="center" justify="center">
        <Box>
          <Text fontSize="xx-large" p="4">
            Um pouco sobre mim...
          </Text>
          <Text fontSize="x-large" p="4">
            Olá, sou um desenvolvedor Jr a procura de uma primeira oportunidade
            para começar minha carreira.
          </Text>
          <Text fontSize="x-large" p="4">
            Comecei a programar no fim de 2020 e virou um sonho seguir carreira
            na área. Hoje estou cursando técnologo em Desenvolvimento Web e meu
            objetivo é dominar React Native, Node.js e banco de dados
            relacionais e não relacionais, mas para isso estou estudando
            bastante javascript e API restfull para chegar no meu objetivo. No
            momento estou procurando estagio ou junior como front-and ou
            back-and e muita vontade aprender.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default About;
