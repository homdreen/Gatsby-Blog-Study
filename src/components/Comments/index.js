import React from 'react';
import PropTypes from 'prop-types';
import ReactDisqusComments from 'react-disqus-comments';

import { Container, CommentsTitle } from './styles';

export default function Comments({ url, title }) {
  const completeURL = `https://felipemelchior.com.br${url}`;

  return (
    <Container>
      <CommentsTitle>Comentários</CommentsTitle>

      <ReactDisqusComments
        shortname="felipemelchior-com-br"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </Container>
  );
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
