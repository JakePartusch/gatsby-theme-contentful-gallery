# Gatsby Theme Contentful Gallery

<p><img src="gallery-screenshot.png?raw=true"/></p>

## Getting Started

### Create a new Contentful Space

### Run the setup scripts

```
yarn global add contentful-management
contentful space import --space-id SPACE_ID --mt MANAGEMENT_TOKEN --content-file scripts/contentful-export.json
```

### Add the plugin to your `gatsby-config`

```
yarn add @jakepartusch/gatsby-theme-contentful-gallery
```

```
  plugins: [
    {
      resolve: "@jakepartusch/gatsby-theme-contentful-gallery",
      options: {
        contentfulSpaceId: YOU_SPACE_ID,
        contentfulAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ...
  ]
```
