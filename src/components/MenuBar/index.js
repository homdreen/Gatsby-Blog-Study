import React from 'react';

import { Home, Grid } from 'styled-icons/boxicons-solid/';
import {
  SearchAlt2 as Search,
  UpArrowAlt as Arrow,
} from 'styled-icons/boxicons-regular';
import { Lightbulb as Light } from 'styled-icons/remix-fill/Lightbulb';

import { Container, MenuBarGroup, MenuBarItem, MenuBarLink } from './styles';

export default function MenuBar() {
  return (
    <Container>
      <MenuBarGroup>
        <MenuBarLink to="/" title="Voltar para a Home">
          <MenuBarItem>
            <Home />
          </MenuBarItem>
        </MenuBarLink>
        <MenuBarLink to="/search" title="Pesquisar">
          <MenuBarItem>
            <Search />
          </MenuBarItem>
        </MenuBarLink>
      </MenuBarGroup>

      <MenuBarGroup>
        <MenuBarItem>
          <Light />
        </MenuBarItem>
        <MenuBarItem>
          <Grid />
        </MenuBarItem>
        <MenuBarItem>
          <Arrow />
        </MenuBarItem>
      </MenuBarGroup>
    </Container>
  );
}
