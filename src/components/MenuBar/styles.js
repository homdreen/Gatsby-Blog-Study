import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: var(--mediumBackground);
  border-left: 1px solid var(--borders);
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
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;

  position: relative;
  width: 3.75rem;

  .active {
    color: var(--highlight);
  }

  &:hover {
    color: var(--highlight);
  }
`;
