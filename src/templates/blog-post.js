import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import {
  PostHeader,
  PostTitle,
  PostDate,
  PostDescription,
  MainContent,
} from '../components/Post/styles';

export default function BlogPost({ data }) {
  const {
    markdownRemark: {
      frontmatter: { title, description, date },
      timeToRead,
      html,
    },
  } = data;

  return (
    <Layout>
      <SEO title={title} />
      <PostHeader>
        <PostDate>
          {date} - {timeToRead} min de leitura
        </PostDate>
        <PostTitle>{title}</PostTitle>
        <PostDescription>{description}</PostDescription>
      </PostHeader>

      <MainContent>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </MainContent>
    </Layout>
  );
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      timeToRead
      html
    }
  }
`;

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        date: PropTypes.string,
      }),
      html: PropTypes.string,
      timeToRead: PropTypes.string,
    }),
  }).isRequired,
};
