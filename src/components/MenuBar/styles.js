import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #192734;
  border-left: 1px solid #38444d;
  height: 100vh;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.74rem;
`;

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuBarLink = styled(Link)`
  display: block;

  transition: color 0.5s;
`;

export const MenuBarItem = styled.span`
  color: #8899a6;
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;

  position: relative;
  width: 3.75rem;

  .active {
    color: #1fa1f2;
  }

  &:hover {
    color: #1fa1f2;
  }
`;
