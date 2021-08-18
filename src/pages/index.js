import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { DefaultLayout } from '../layouts';
import {
  Box,
  Text,
  ProjectGrid,
  PostSummaryCard,
  LinkButton,
} from '../components';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          blogPath
          postPerPage
          author {
            nickName
            summary
          }
        }
      }
      allYamlPage(filter: { pageType: { eq: "Projects" } }) {
        nodes {
          metaDescription
          pageType
          title
          contents {
            ... on Project {
              name
              description
              url
              githubRepo
            }
          }
        }
      }
      allMarkdownRemark(
        sort: { fields: [frontmatter___publishedAt], order: DESC }
        skip: 0
        limit: 4
        filter: { frontmatter: { isPublished: { eq: true } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            excerpt
            timeToRead
            frontmatter {
              title
              tags
              publishedAt
            }
          }
        }
      }
    }
  `);

  const { contents = [] } = data.allYamlPage.nodes[0] || {};
  const posts = data.allMarkdownRemark.edges;
  const { blogPath, author, postPerPage } = data.site.siteMetadata;
  const projects = contents.slice(0, 4);

  return (
    <DefaultLayout
      title=""
      description={author.summary}
      heroTitle={
        author.nickName ? `Hi, I am ${author.nickName}...` : 'Hello there...'
      }
    >
      {projects && projects.length ? (
        <Box>
          <Text variant="h2" textAlign="center" mb={4}>
            Open Source Projects
          </Text>
          <ProjectGrid projects={projects} limit={4} />
          {projects.length >= 4 ? (
            <Box textAlign="center" mt={4}>
              <LinkButton to="/projects/">See More Projects</LinkButton>
            </Box>
          ) : (
            <></>
          )}
        </Box>
      ) : (
        <></>
      )}
      {posts && posts.length ? (
        <Box my={5}>
          <Text variant="h2" textAlign="center" mb={4}>
            Recent Posts
          </Text>
          {posts.map((post) => (
            <PostSummaryCard
              post={post}
              blogPath={blogPath}
              key={post.node.id}
            />
          ))}
          {posts.length >= postPerPage ? (
            <Box textAlign="center" mt={4}>
              <LinkButton to={`/${blogPath}/`}>See More Posts</LinkButton>
            </Box>
          ) : (
            <></>
          )}
        </Box>
      ) : (
        <></>
      )}
    </DefaultLayout>
  );
};

export default IndexPage;
