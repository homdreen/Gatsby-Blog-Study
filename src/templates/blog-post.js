import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import RecommendedPost from '../components/RecommendedPost';
import Comments from '../components/Comments';

import {
  PostHeader,
  PostTitle,
  PostDate,
  PostDescription,
  MainContent,
} from '../components/Post/styles';

export default function BlogPost({ data, pageContext }) {
  const {
    markdownRemark: {
      frontmatter: { title, description, date },
      fields: { slug },
      timeToRead,
      html,
    },
  } = data;

  const { next, previous } = pageContext;

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
      <RecommendedPost next={next} previous={previous} />
      <Comments url={slug} title={title} />
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
      fields {
        slug
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
      fields: PropTypes.shape({
        slug: PropTypes.string,
      }),
      html: PropTypes.string,
      timeToRead: PropTypes.string,
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    next: PropTypes.object,
    previous: PropTypes.object,
  }).isRequired,
};
