exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = require.resolve(`./src/templates/post.js`);
  const result = await graphql(`
    query AllPosts {
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
  posts.forEach(edge => {
    createPage({
      path: `/posts/${edge.node.id}`,
      component: blogPostTemplate,
      context: {
        post: edge.node
      }
    });
  });
};
