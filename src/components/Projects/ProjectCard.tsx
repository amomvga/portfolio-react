import { Flex, Box, SimpleGrid } from "@chakra-ui/react";
import { CardModel } from "./CardModel";

import cotacaoImg from "../../assets/projects/cotacaohoje.png";
import portfolioImg from "../../assets/projects/portfolio.png";
import blackfridayImg from "../../assets/projects/bklp.png";
import marvelImg from "../../assets/projects/marvel.png";
import apiCotacaoImg from "../../assets/projects/apiCotacao.png";

export function ProjectCard() {
  return (
    <Flex w="100%">
      <SimpleGrid
        minChildWidth="320px"
        spacingX="10px"
        spacingY="20px"
        w="100%"
        align="center"
        mt="50px"
      >
        <Box>
          <CardModel
            imgUrl={cotacaoImg}
            title="Cotação Hoje"
            description="Esse projeto faz a cotação de algumas moedas
             e um grafico com os ultimos 15 dias de fechamento da moeda,
              infelizmente a API gratuita não está se comportando como o esperado.
              Foi utilizado o Next"
            url="https://front-end-cotacao-hoje.vercel.app"
            urlTitle="Confira"
          />
        </Box>

        <Box>
          <CardModel
            imgUrl={portfolioImg}
            title="Portfólio"
            description="Este foi meu primeiro portfólio feito em HTML, CSS, Bootstrap e javascript."
            url="https://amomvga.github.io/portfolio"
            urlTitle="Confira"
          />
        </Box>
        <Box>
          <CardModel
            imgUrl={blackfridayImg}
            title="BlackFriday LP"
            description="Criado para praticar HTML, CSS, Bootstrap e javascript, ele possui um contador
            regressivo até o dia esperado e um card de ofertas."
            url="https://amomvga.github.io/black-friday-landingPage"
            urlTitle="Confira"
          />
        </Box>
        <Box>
          <CardModel
            imgUrl={marvelImg}
            title="Consumo API Marvel"
            description="O desafio desse projeto era consumir API da Marvel, consultando 
            o nome do personagem e retornando as séries e quadrinhos em que ele apareceu.
            Utilizando HTML, CSS, Bootstrap e javascript"
            url="https://github.com/amomvga/MarvelPage"
            urlTitle="Confira"
          />
        </Box>
        <Box>
          <CardModel
            imgUrl={apiCotacaoImg}
            title="API Cotação Hoje"
            description="O desafio de criar essa API foi fazer minha API consumir uma 
            API externa.
            Foi utilizado Node em sua construção."
            url="https://github.com/amomvga/back-end-cotacaoHoje"
            urlTitle="Confira"
          />
        </Box>
      </SimpleGrid>
    </Flex>
  );
}
