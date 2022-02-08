import { Box, Flex, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";

function About() {
  return (
    <Flex direction="column" w="100%" height="100vh">
      <Flex>
        <Header />
      </Flex>

      <Flex align="center" ml={["5px", "2rem"]} mt="50px">
        <Box>
          <Text fontSize={["md", "xl", "2xl"]} p="1">
            Um pouco sobre mim...
          </Text>
          <Text fontSize={["md", "xl", "2xl"]} p="1">
            Olá, sou um desenvolvedor Jr a procura de uma primeira oportunidade
            para começar minha carreira.
          </Text>
          <Text fontSize={["md", "xl", "2xl"]} p="1">
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
