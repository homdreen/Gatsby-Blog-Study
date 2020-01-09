import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.div`
  border-bottom: 1px solid var(--borders);
  border-top: 1px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;
`;

export const RecommendedLink = styled(Link)`
  display: flex;
  align-items: center;
  background: var(--mediumBackground);
  color: var(--highlight);
  padding: 3rem;
  text-decoration: none;
  width: 50%;
  transition: background 0.5s;

  &:hover {
    background: var(--borders);
  }

  &.previous {
    border-right: 1px solid var(--borders);
  }

  &.next {
    justify-content: flex-end;
  }

  &.previous:before {
    content: '\\2190';
    margin-right: 0.5rem;
  }

  &.next:after {
    content: '\\2192';
    margin-left: 0.5rem;
  }
`;
