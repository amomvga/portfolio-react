import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { ProjectCard } from "../components/Projects/ProjectCard";

export default function Projects() {
  return (
    <Flex direction="column" w="100%">
      <Flex w="100%">
        <Header />
      </Flex>

      <Flex w="100%">
        <ProjectCard />
      </Flex>
    </Flex>
  );
}
