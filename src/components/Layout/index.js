import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from '../Sidebar';

import { LayoutWrapper, LayoutMain } from './styles';

import { GlobalStyles } from '../../styles/global';

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
