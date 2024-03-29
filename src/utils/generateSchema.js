import urljoin from 'url-join';
import defaultConfig from '../config';

export default function generateSchema({
  title,
  author,
  url,
  image,
  description,
  keywords,
  createdAt,
  updatedAt,
  type = 'Article',
  config = { ...defaultConfig },
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,

    ...(type === 'Person' && {
      name: author.fullName || config.author.fullName,
      url: author.url || urljoin(config.siteUrl, `/about/`),
      sameAs: [author.links.twitter || config.author.links.twitter],
    }),

    ...(type !== 'Person' && {
      publisher: {
        '@type': 'Organization',
        name: config.siteTitle,
        logo: {
          '@type': 'ImageObject',
          url: urljoin(config.siteUrl, config.siteLogo),
          width: 1024,
          height: 1024,
        },
      },
      ...(author && {
        author: {
          '@type': 'Person',
          name: config.author.fullName,
          url: urljoin(config.siteUrl, `/about/`),
          sameAs: [config.author.links.twitter],
        },
      }),
      ...(createdAt && {
        datePublished: new Date(createdAt).toISOString(),
      }),
      ...(updatedAt && {
        dateModified: new Date(updatedAt).toISOString(),
      }),

      ...(title && { headline: title }),
      url: url || `${config.siteUrl}`,
      ...(keywords && { keywords: keywords.join(', ') }),

      ...(image && {
        image: {
          '@type': 'ImageObject',
          url: urljoin(config.siteUrl, image),
          width: 1280,
          height: 720,
        },
      }),
      description: description || config.siteDescription,
    }),

    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${config.siteUrl}`,
    },
  };

  return schema;
}
