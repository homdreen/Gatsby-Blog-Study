import React from 'react';

import Profile from '../Profile';
import SocialLinks from '../SocialLinks';

import { Container } from './styles';

export default function Sidebar() {
  return (
    <Container>
      <Profile />
      <SocialLinks />
    </Container>
  );
}
