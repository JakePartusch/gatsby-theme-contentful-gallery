exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const PostTemplate = require.resolve(`./src/templates/post.js`);
  const PostsTemplate = require.resolve(`./src/templates/posts.js`);

  const result = await graphql(`
    query {
      allContentfulPost(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            id
            coverImages {
              fluid(maxWidth: 800, maxHeight: 800) {
                src
                srcSet
                aspectRatio
                sizes
              }
            }
            shortDescription
            contentful_id
            publishDate
            body {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panic(result.errors);
  }

  const posts = result.data.allContentfulPost.edges;
  // Create post pages.
  posts.forEach(post => {
    createPage({
      path: `/posts/${post.node.id}`,
      component: PostTemplate,
      context: {
        post: post.node
      }
    });
  });

  // Create index page
  createPage({
    path: "/",
    component: PostsTemplate,
    context: {
      posts
    }
  });
};
