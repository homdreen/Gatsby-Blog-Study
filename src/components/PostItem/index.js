import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  PostItemLink,
  PostItemDate,
  PostItemDescription,
  PostItemInfo,
  PostItemTag,
  PostItemTitle,
} from './styles';

export default function PostItem({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description,
}) {
  return (
    <PostItemLink to={slug}>
      <Container>
        <PostItemTag background={background}>{category}</PostItemTag>
        <PostItemInfo>
          <PostItemDate>
            {date} - {timeToRead} min de leitura
          </PostItemDate>
          <PostItemTitle>{title}</PostItemTitle>
          <PostItemDescription>{description}</PostItemDescription>
        </PostItemInfo>
      </Container>
    </PostItemLink>
  );
}

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

PostItem.defaultProps = {
  background: 'var(--highlight)',
};
