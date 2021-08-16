const config = {
  title: 'Gatsby Theme Open Sourcerer',
  shortTitle: 'HackerMan',
  description: 'A minimal gatsby theme for open source developer',
  siteUrl: 'https://example.com/',
  contentPath: 'contents',
  logo: '/logo.jpg',
  seoImage: '/seo.jpg',
  heroImage: '',
  titleSeparator: '|',
  pathPrefix: '/',
  blogPath: 'blog',
  blogTitle: 'Blog',
  postPerPage: 8,
  socialShareTitle: '-: SHARE :-',
  manifest: {
    icon: 'src/assets/images/logo.svg',
    backgroundColor: `#FAFAFC`,
    themeColor: `#27283F`,
  },
  author: {
    fullName: 'Denver Coder 9',
    bio: 'Full-time open sourcerer',
    summary:
      'Eu nulla labore adipisicing consequat veniam qui ullamco. Fugiat laborum consequat elit enim quis ullamco sit minim dolor ad.',
    email: 'hello@example.com',
    skype: 'johndoe',
    links: {
      facebook: 'https://facebook.com/',
      github: 'https://github.com/',
      instagram: 'https://instagram.com/',
      linkedin: 'https://linkedin.com/',
      twitter: 'https://twitter.com/',
    },
  },
  footer: {
    title: 'Words of Thanks',
    description:
      'Sunt adipisicing culpa deserunt est est excepteur voluptate occaecat voluptate irure elit sit nostrud culpa. Deserunt est est excepteur voluptate occaecat voluptate irure elit sit',
    copyright: `© ${new Date().getFullYear()} John Doe. All Rights Reserved.`,
  },
};

module.exports = config;
