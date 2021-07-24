import React from 'react';
import { Helmet } from 'react-helmet';
import urljoin from 'url-join';
import config from '../config';
import generateSchema from '../utils/generateSchema';

const SEO = ({
  title,
  description,
  url = '',
  image,
  author,
  keywords,
  createdAt,
  updatedAt,
  pageType,
}) => {
  title = `${title ? `${title} ${config.titleSeparator} ` : ``}${config.title}`;
  url = urljoin(config.siteUrl, url);
  description = description || config.description;

  const schemaOrgJSONLD = generateSchema({
    author,
    image,
    description,
    url,
    title,
    keywords,
    updatedAt,
    createdAt,
    type: pageType,
  });

  return (
    <Helmet htmlAttributes={{ lang: 'en' }}>
      {/* General tags */}
      <title>{`${title}`}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={`${url}`} />
      {pageType === 'Article' ? (
        <meta property="og:type" content="article" />
      ) : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      <meta property="fb:app_id" content={config.fbAppId || ''} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={config.author.links.twitter || ''}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
