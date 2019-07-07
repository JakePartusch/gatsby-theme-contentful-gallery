import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";

const Grid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(100px, 1fr))",
  gridAutoRows: "1fr",
  gridGap: "8px",
  alignItems: "stretch",
  margin: "28px 0"
});

const SquareImage = styled(Img)({
  maxHeight: 300,
  height: "100%",
  ":hover": {
    opacity: 0.5
  }
});

const PostGrid = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPost(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            id
            coverImages {
              fluid(maxWidth: 600, maxHeight: 600) {
                ...GatsbyContentfulFluid
              }
            }
            shortDescription
          }
        }
      }
    }
  `);
  return (
    <Grid>
      {data.allContentfulPost.edges.map(post => (
        <Link to={`/posts/${post.node.id}`}>
          <SquareImage fluid={post.node.coverImages[0].fluid} />
        </Link>
      ))}
    </Grid>
  );
};

export default PostGrid;
