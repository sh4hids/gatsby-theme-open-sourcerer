/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import urljoin from 'url-join';

import {
  Text,
  SocialShareLinks,
  PostTags,
  UtterancesComments,
} from '../components';
import { DefaultLayout } from '../layouts';

const Post = ({ pageContext, data }) => {
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;
  const author = data.site.siteMetadata.author.fullName;
  const { siteUrl, blogPath, utterancesCommentRepo } = data.site.siteMetadata;

  return (
    <DefaultLayout
      title={post.title}
      url={`/${blogPath}${pageContext.slug}`}
      postMeta={{
        author,
        timeToRead: postNode.timeToRead,
        publishedAt: post.publishedAt,
      }}
      description={postNode.excerpt}
    >
      <Text variant="raw" html={postNode.html} className="post-body" />
      <PostTags tags={post.tags || {}} blogPath={blogPath} />
      <SocialShareLinks
        title={post.title}
        link={urljoin(siteUrl, blogPath, pageContext.slug)}
      />
      {utterancesCommentRepo ? <UtterancesComments /> : <></>}
    </DefaultLayout>
  );
};

export const pageQuery = graphql`
  query ($slug: String!) {
    site {
      siteMetadata {
        siteUrl
        blogPath
        utterancesCommentRepo
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
