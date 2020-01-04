import React from 'react';
import PropTypes from 'prop-types';

import { Container, RecommendedLink } from './styles';

export default function RecommendedPost({ next, previous }) {
  return (
    <Container>
      {previous && (
        <RecommendedLink to={previous.fields.slug} className="previous">
          {previous.frontmatter.title}
        </RecommendedLink>
      )}
      {next && (
        <RecommendedLink to={next.fields.slug} className="next">
          {next.frontmatter.title}
        </RecommendedLink>
      )}
    </Container>
  );
}

RecommendedPost.propTypes = {
  next: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }).isRequired,
  previous: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }).isRequired,
};
