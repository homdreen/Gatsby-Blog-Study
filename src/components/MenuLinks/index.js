import React from 'react';

import {
  Container,
  MenuLinksList,
  MenuLinksItem,
  MenuLinksLink,
} from './styles';

import links from './content';

export default function MenuLinks() {
  return (
    <Container>
      <MenuLinksList>
        {links.map((link, i) => (
          <MenuLinksItem key={i}>
            <MenuLinksLink to={link.url} activeClassName="active">
              {link.label}
            </MenuLinksLink>
          </MenuLinksItem>
        ))}
      </MenuLinksList>
    </Container>
  );
}
