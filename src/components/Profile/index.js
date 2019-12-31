import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Avatar from '../Avatar';

import {
  ProfileWrapper,
  ProfileLink,
  ProfileAuthor,
  ProfilePosition,
  ProfileDescription,
} from './styles';

export default function Profile() {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          description
          position
          title
        }
      }
    }
  `);

  return (
    <ProfileWrapper>
      <Avatar />
      <ProfileLink>
        <ProfileAuthor>
          {title}
          <ProfilePosition>{position}</ProfilePosition>
        </ProfileAuthor>
        <ProfileDescription>{description}</ProfileDescription>
      </ProfileLink>
    </ProfileWrapper>
  );
}
