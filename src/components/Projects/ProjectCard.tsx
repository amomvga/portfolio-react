import { Flex, Box } from "@chakra-ui/react";
import { CardModel } from "./CardModel";

import cotacaoImg from "../../assets/projects/cotacaohoje.png";
import portfolioImg from "../../assets/projects/portfolio.png";
import blackfridayImg from "../../assets/projects/bklp.png";
import marvelImg from "../../assets/projects/marvel.png";
import apiCotacaoImg from "../../assets/projects/apiCotacao.png";

export function ProjectCard() {
  return (
    <Flex>
      <Box>
        <CardModel
          imgUrl={cotacaoImg}
          title="Cotação Hoje"
          description="Projeto coisado para coisas de um treco la vamos ver se quebra"
          url="https://front-end-cotacao-hoje.vercel.app"
          urlTitle="Link"
        />
      </Box>
      <Box>
        <CardModel
          imgUrl={portfolioImg}
          title="Cotação Hoje"
          description="Projeto coisado para coisas de um treco la vamos ver se quebra"
          url="https://amomvga.github.io/portfolio"
          urlTitle="Link"
        />
      </Box>
      <Box>
        <CardModel
          imgUrl={blackfridayImg}
          title="Cotação Hoje"
          description="Projeto coisado para coisas de um treco la vamos ver se quebra"
          url="https://amomvga.github.io/black-friday-landingPage"
          urlTitle="Link"
        />
      </Box>
      <Box>
        <CardModel
          imgUrl={marvelImg}
          title="Cotação Hoje"
          description="Projeto coisado para coisas de um treco la vamos ver se quebra"
        />
      </Box>
      <Box>
        <CardModel
          imgUrl={apiCotacaoImg}
          title="Cotação Hoje"
          description="Projeto coisado para coisas de um treco la vamos ver se quebra"
        />
      </Box>
    </Flex>
  );
}
