import React from 'react';

import {
  Container,
  SocialLinksList,
  SocialLinksLink,
  SocialLinksItem,
  IconWrapper,
} from './styles';

import links from './content';

export default function SocialLinks() {
  return (
    <Container>
      <SocialLinksList>
        {links.map((link, i) => {
          const Icon = link.icon;

          return (
            <SocialLinksItem key={i}>
              <SocialLinksLink
                href={link.url}
                title={link.label}
                target="_blank"
                rel="noopener norefer"
              >
                <IconWrapper>
                  <Icon />
                </IconWrapper>
              </SocialLinksLink>
            </SocialLinksItem>
          );
        })}
      </SocialLinksList>
    </Container>
  );
}
