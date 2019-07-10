import React from "react";
import { Link } from "gatsby";
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

const StyledLink = styled(Link)({
  backgroundImage: "none"
});

const PostGrid = ({ posts }) => {
  return (
    <Grid>
      {posts.map(post => (
        <StyledLink to={`/posts/${post.node.id}`}>
          <SquareImage fluid={post.node.coverImages[0].fluid} />
        </StyledLink>
      ))}
    </Grid>
  );
};

export default PostGrid;
