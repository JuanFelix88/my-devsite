import React from 'react';
import { IoCloudSharp, IoLogoGithub } from 'react-icons/io5';

import {
  Box,
  Container,
  ContainerBoxes,
  ContainerSeparetedStrips,
  ContainerStrips,
  HorizontalStrip,
  Item,
  Items,
  VerticalStrip,
} from './styles';

const Tree: React.FC = () => {
  return (
    <Container>
      <ContainerStrips>
        <VerticalStrip style={{ height: `10px` }} />
        <HorizontalStrip />
        <ContainerSeparetedStrips>
          <VerticalStrip style={{ height: `10px` }} />
          <VerticalStrip style={{ height: `10px` }} />
        </ContainerSeparetedStrips>
      </ContainerStrips>
      <ContainerBoxes>
        <Box>
          <Items>
            <Item>
              <a href="https://github.com/JuanFelix88/pizza-bot-wpp">
                <IoLogoGithub size={18} /> pizza-bot-wpp
              </a>
            </Item>
            <Item>
              <a href="https://github.com/JuanFelix88/rust-example">
                <IoLogoGithub size={18} />
                rust-example
              </a>
            </Item>
            <Item>
              <a href="https://github.com/JuanFelix88/gifts-list">
                <IoLogoGithub size={18} />
                gifts-list
              </a>
            </Item>
            <Item>
              <a href="https://github.com/JuanFelix88/be-the-hero">
                <IoLogoGithub size={18} />
                be-the-hero
              </a>
            </Item>
          </Items>
        </Box>
        <Box>
          <Items>
            <Item>
              <a
                href="https://lacosmo.vercel.app"
                title="Website institucional da empresa Lacosmo"
              >
                <IoCloudSharp size={18} />
                Lacosmo Website
              </a>
            </Item>
            <Item>
              <a
                href="https://hsa-vedacoes.vercel.app"
                title="Website institucional da empresa HSA Vedações Hidráulicas"
              >
                <IoCloudSharp size={18} />
                HSA Website
              </a>
            </Item>
            <Item>
              <a
                href="https://dashboard.chalecafe.com.br"
                title="Aplicação Web para gerenciamento de uma cantina escolar"
              >
                <IoCloudSharp size={18} />
                Chalé Café Dashboard
              </a>
            </Item>
            <Item>
              <a
                href="https://chalecafe.com.br"
                title="Aplicação Web com mais de 100 usuários"
              >
                <IoCloudSharp size={18} />
                Chalé Café WebApp
              </a>
            </Item>
          </Items>
        </Box>
      </ContainerBoxes>
    </Container>
  );
};

export default Tree;
