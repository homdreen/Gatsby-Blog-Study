import React from 'react';
import PropTypes from 'prop-types';
import PostItem from '../PostItem';

export default function Hit({ hit }) {
  return (
    <PostItem
      slug={hit.fields.slug}
      background={hit.background}
      title={hit.title}
      date={hit.date}
      description={hit.description}
      category={hit.category}
      timeToRead={hit.timeToRead}
    />
  );
}

Hit.propTypes = {
  hit: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
    title: PropTypes.string,
    background: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    timeToRead: PropTypes.string,
  }).isRequired,
};
