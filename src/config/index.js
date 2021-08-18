const config = {
  siteTitle: 'Gatsby Theme Open Sourcerer',
  siteDescription: 'A minimal gatsby theme for open source developer',
  siteUrl: 'https://example.com/',
  siteLogo: '',
  contentPath: 'contents',
  headerLogoText: 'HackerMan',
  seoImage: '/images/seo.jpg',
  heroImage: '',
  titleSeparator: '|',
  urlDateFormat: 'yyyy/MM/dd',
  displayDateFormat: 'MMMM dd , yyyy',
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
    nickName: 'HackerMan',
    bio: 'Full-time open sourcerer',
    summary:
      'Eu nulla labore adipisicing consequat veniam qui ullamco. Fugiat laborum consequat elit enim quis ullamco sit minim dolor ad.',
    email: 'hello@example.com',
    links: {
      facebook: 'https://facebook.com/danvercoder9',
      github: 'https://github.com/danvercoder9',
      instagram: 'https://instagram.com/danvercoder9',
      linkedin: 'https://linkedin.com/danvercoder9',
      twitter: 'https://twitter.com/danvercoder9',
    },
  },
  footer: {
    title: 'Words of Thanks',
    description:
      'Sunt adipisicing culpa deserunt est est excepteur voluptate occaecat voluptate irure elit sit nostrud culpa. Deserunt est est excepteur voluptate occaecat voluptate irure elit sit',
    copyright: `© ${new Date().getFullYear()} Danver Coder. All Rights Reserved.`,
  },
};

module.exports = config;
