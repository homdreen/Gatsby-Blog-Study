import React from 'react';

import Profile from '../Profile';
import SocialLinks from '../SocialLinks';
import MenuLinks from '../MenuLinks';

import { Container } from './styles';

export default function Sidebar() {
  return (
    <Container>
      <Profile />
      <SocialLinks />
      <MenuLinks />
    </Container>
  );
}
