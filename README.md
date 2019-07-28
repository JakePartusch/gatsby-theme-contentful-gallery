# Gatsby Theme Contentful Gallery

<p><img height="300" src="gallery-screenshot.png?raw=true"/></p>

## Getting Started

### Create a new Contentful Space

https://www.contentful.com/faq/basics/#how-do-i-create-a-space

### Run the setup scripts

```
yarn global add contentful-management
contentful space import --space-id SPACE_ID --mt MANAGEMENT_TOKEN --content-file scripts/contentful-export.json
```

### Add the plugin to your `gatsby-config`

```
yarn add gatsby-theme-contentful-gallery
```

```
  plugins: [
    {
      resolve: "gatsby-theme-contentful-gallery",
      options: {
        contentfulSpaceId: YOU_SPACE_ID,
        contentfulAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ...
  ]
```
