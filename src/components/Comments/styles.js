import styled from 'styled-components';

export const Container = styled.section`
  margin: auto;
  max-width: 800px;
  padding: 3rem 6.4rem 3rem;

  iframe[src*='ads-iframe'] {
    display: none;
  }

  #disqus-thread {
    a {
      color: var(--highlight) !important;
    }
  }
`;

export const CommentsTitle = styled.h2`
  color: var(--white);
  font-size: 2.1rem;
  font-weight: 700;
  padding-bottom: 2rem;
`;
