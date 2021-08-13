# gatsby-theme-open-sourcerer

A configurable minimal gatsby portfolio theme for open source developers.

## Install

```bash
npm i @sh4hids/gatsby-theme-open-sourcerer
```

After installing, add the theme plugin in your `gatsby-config.js` like this:

```javascript
module.exports = {
  plugins: [
    {
      resolve: '@sh4hids/gatsby-theme-open-sourcerer',
      options: {
        ...yourConfig,
      },
    },
  ],
};
```

## Configuration

You can provide necessary configuration via plugin options on `gatsby-config.js`. Copy the default configuration from [here](https://github.com/sh4hids/gatsby-theme-open-sourcerer/blob/main/src/config/index.js) and customize as you need.

## Component Shadowing

If you want to customize a component, you can use [theme shadowing](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/). Create the following directories in your src folder:

```
├── src
│   ├── @sh4hids
│   │   └── gatsby-theme-open-sourcerer
```

For example, if you want to shadow the `BrandLogo` component, your directory structure will be like this:

```
├── src
│   ├── @sh4hids
│   │   └── gatsby-theme-open-sourcerer
│   │       └── components
│   │           ├── BrandLogo.js
```

You can shadow any component you like by following the above structure.

## Customizing Pages

Contents for the following pages are required for this theme to work. You have to provide contents for these in `.yml` format in your contents folder.

- Projects ([content structure](https://github.com/sh4hids/gatsby-theme-open-sourcerer/blob/main/contents/projects.yml))
- Uses ([content structure](https://github.com/sh4hids/gatsby-theme-open-sourcerer/blob/main/contents/uses.yml))

### Customizing About/Contact Page

Create files named `About.mdx`/`Contact.mdx` in the following directory:

```
├── src
│   ├── @sh4hids
│   │   ├── gatsby-theme-open-sourcerer
│   │   │   ├── templates
│   │   │   │   ├── About.mdx
│   │   │   │   ├── Contact.mdx
```

#### Page layout

Copy the base layout for each of the pages from the following links and customize as you like.

- [About](https://raw.githubusercontent.com/sh4hids/gatsby-theme-open-sourcerer/main/src/templates/About.mdx)
- [Contact](https://raw.githubusercontent.com/sh4hids/gatsby-theme-open-sourcerer/main/src/templates/Contact.mdx)

## Useing Built-in Components

You can import and use any components from the source folder. Some of the components directory are:

- [layouts]()
- [components]()
- [themes]()

Example:

```javascript
import { Box } from '@shahids/gatsby-theme-open-sourcerer/src/components';
```

## Want to help?

If you want to help in any way to make the theme better, you are welcome. Some of the ways you can help are:

- Reporting an issue (bug)
- Improving the documentation (README)
- Adding your site to the showcase section

## Showcase

- [shahid.pro](https://shahid.pro)
