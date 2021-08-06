import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import DefaultLayout from '../layouts/DefaultLayout';
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

  const { contents: projects } = data.allYamlPage.nodes[0] || {};
  const posts = data.allMarkdownRemark.edges;
  const { blogPath } = data.site.siteMetadata;

  return (
    <DefaultLayout
      title=""
      description="I am a fullstack JavaScript Developer from Dhaka, Bangladesh. I love to work with Node, React, MySQL, MongoDB and all other related technologies. When I am not coding, I like to read books, gardening and spend time with my family and friends."
      heroTitle="Hi, I am John..."
    >
      {projects && projects.length && (
        <Box>
          <Text variant="h2" textAlign="center" mb={4}>
            Open Source Projects
          </Text>
          <ProjectGrid projects={projects} />
          <Box textAlign="center" mt={4}>
            <LinkButton to="/projects/">See More Projects</LinkButton>
          </Box>
        </Box>
      )}
      {posts && posts.length && (
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
          <Box textAlign="center" mt={4}>
            <LinkButton to={`/${blogPath}/`}>See More Posts</LinkButton>
          </Box>
        </Box>
      )}
    </DefaultLayout>
  );
};

export default IndexPage;
