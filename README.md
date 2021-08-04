# gatsby-theme-open-sourcerer

A configurable minimal gatsby portfolio theme for open source developers.

## Install

```bash
npm i @sh4hids/gatsby-theme-open-sourcerer
```

After installing add the theme in your `gatsby-config.js` like this:

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

## Default Pages

- About
- Blog
- Projects
- Uses
- Contact

## Component Shadowing

Create the following directories in your src folder:

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
