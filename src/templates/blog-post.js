import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';

// import { Container } from './styles';

export default function BlogPost() {
  const { markdownRemark } = useStaticQuery(graphql`
    query Post($slug: String) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
        frontmatter {
          title
        }
        html
      }
    }
  `);

  const {
    frontmatter: { title },
    html,
  } = markdownRemark;

  return (
    <Layout>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}
