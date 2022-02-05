import { Box, Flex, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { ProjectCard } from "../components/Projects/ProjectCard";

export default function Projects(){
  return(
    <Flex w="100%" h="100%" align="center" justify="center" direction="column">
    <Flex as="header" w="100%" h="100%">
      <Header />
    </Flex>
    <Flex w="100vw" h="80vh" align="center" justify="center">
      <ProjectCard/>
    </Flex>
  </Flex>
  )
}