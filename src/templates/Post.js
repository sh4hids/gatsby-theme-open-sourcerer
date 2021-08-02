/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import urljoin from 'url-join';

import { Text, SocialShareLinks } from '../components';
import DefaultLayout from '../layouts/DefaultLayout';

const Post = ({ pageContext, data }) => {
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;
  const author = data.site.siteMetadata.author.fullName;
  const { siteUrl } = data.site.siteMetadata;

  console.log(post);

  return (
    <DefaultLayout
      title={post.title}
      url={pageContext.slug}
      postMeta={{
        author,
        timeToRead: postNode.timeToRead,
        publishedAt: post.publishedAt,
      }}
    >
      <Text variant="raw" html={postNode.html} />
      <SocialShareLinks
        title={post.title}
        link={urljoin(siteUrl, pageContext.slug)}
      />
    </DefaultLayout>
  );
};

export const pageQuery = graphql`
  query ($slug: String!) {
    site {
      siteMetadata {
        siteUrl
        author {
          fullName
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        publishedAt
        tags
        slug
      }
      fields {
        slug
      }
    }
  }
`;

export default Post;
