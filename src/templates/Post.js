/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import urljoin from 'url-join';

import {
  Text,
  SocialShareLinks,
  PostTags,
  UtterancesComments,
  Divider,
} from '../components';
import { DefaultLayout } from '../layouts';

const Post = ({ pageContext, data }) => {
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;
  const author = data.site.siteMetadata.author.fullName;
  const { siteUrl, blogPath, utterancesCommentRepo, baseEditUrl } =
    data.site.siteMetadata;
  const editUrl = baseEditUrl
    ? `${baseEditUrl}${pageContext.slug.slice(
        11,
        pageContext.slug.length - 1
      )}.md`
    : '';

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
      {editUrl ? (
        <>
          <Divider mt={4} mb={3} width="8rem" />
          <Text variant="label1">
            Edit this post <a href={editUrl}>here</a>.
          </Text>
          <Divider mt={3} mb={4} width="8rem" />
        </>
      ) : (
        <></>
      )}
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
        baseEditUrl
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
