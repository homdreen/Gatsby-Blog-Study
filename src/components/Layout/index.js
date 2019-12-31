import React from 'react';
import PropTypes from 'prop-types';

import Profile from '../Profile';

import { LayoutWrapper, LayoutMain } from './styles';

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <aside>
        <Profile />
      </aside>
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
