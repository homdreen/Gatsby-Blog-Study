import React, { useState, useEffect } from 'react';

import { Home, Grid } from 'styled-icons/boxicons-solid/';
import {
  SearchAlt2 as Search,
  UpArrowAlt as Arrow,
} from 'styled-icons/boxicons-regular';
import { Lightbulb as Light } from 'styled-icons/remix-fill/Lightbulb';

import { Container, MenuBarGroup, MenuBarItem, MenuBarLink } from './styles';

export default function MenuBar() {
  const [theme, setTheme] = useState('null');

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, []);

  function handleTheme() {
    const isDarkMode = theme === 'dark';
    window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');
  }

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
        <MenuBarItem
          title="Mudar o tema"
          onClick={handleTheme}
          className={theme}
        >
          <Light />
        </MenuBarItem>
        <MenuBarItem title="Mudar visualização">
          <Grid />
        </MenuBarItem>
        <MenuBarItem title="Ir para o topo">
          <Arrow />
        </MenuBarItem>
      </MenuBarGroup>
    </Container>
  );
}
