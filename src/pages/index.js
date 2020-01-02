import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import PostItem from '../components/PostItem';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <PostItem
        slug="/about"
        background="red"
        category="misc"
        date="01 de janeiro de 2019"
        timeToRead="5"
        title="Blog de estudo sobre GatsbyJS"
        description="Este blog foi desenvolvido com Gatsby, ferramenta que une ReactJS e GraphQL para a criação de sites estáticos (Olá SEO!)"
      />
    </Layout>
  );
}
