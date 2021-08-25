import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Box from './Box';
import Text from './Text';
import ChevronLeftIcon from './ChevronLeftIcon';
import ChevronRightIcon from './ChevronRightIcon';

const Wrapper = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.space.lg}px;

  .paginate {
    display: inline-block;
    padding: ${({ theme }) => theme.space.md}px 0;
    text-align: center;
    border-radius: 8px;
    margin-right: ${({ theme }) => theme.space.lg}px;
    background-color: ${({ theme }) => theme.colors.bg1};

    &.paginate-prev {
      padding-left: ${({ theme }) => theme.space.lg}px;
      padding-right: ${({ theme }) => theme.space.xl}px;
    }

    &.paginate-next {
      padding-left: ${({ theme }) => theme.space.xl}px;
      padding-right: ${({ theme }) => theme.space.lg}px;
    }

    p {
      color: ${({ theme }) => theme.colors.text0};
      font-weight: ${({ theme }) => theme.fontWeights.medium};
      display: inline-block;
      margin: 0;
      text-transform: uppercase;
    }

    svg {
      position: relative;
      top: -2px;
    }

    &:last-child {
      margin-right: 0;
    }

    :hover {
      transition: all ease-in-out 0.3s;
      background-color: ${({ theme }) => theme.colors.primary1};
      box-shadow: ${({ theme }) => theme.elevations[2]};
    }
  }
`;

const Paginate = ({ pageContext }) => (
  <Wrapper>
    {pageContext.previousPagePath && (
      <Link
        className="paginate paginate-prev"
        to={`${pageContext.previousPagePath}${
          pageContext.humanPageNumber === 2 ? '' : '/'
        }`}
      >
        <ChevronLeftIcon /> <Text>Prev</Text>
      </Link>
    )}

    {pageContext.nextPagePath && (
      <Link
        className="paginate paginate-next"
        to={`${pageContext.nextPagePath}/`}
      >
        <Text>Next</Text> <ChevronRightIcon />
      </Link>
    )}
  </Wrapper>
);

Paginate.propTypes = {
  pageContext: PropTypes.shape({
    nextPagePath: PropTypes.string,
    previousPagePath: PropTypes.string,
    humanPageNumber: PropTypes.number,
  }).isRequired,
};

export default Paginate;
