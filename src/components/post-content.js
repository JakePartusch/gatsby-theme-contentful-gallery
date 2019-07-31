import React from "react";
import styled from "@emotion/styled";
import { css, Styled } from "theme-ui";

const CardContent = styled.div({
  padding: "0.5rem",
  flex: "1"
});

const PostContent = ({ post }) => {
  const bodyContent = {
    __html: post.body.childMarkdownRemark.html
  };
  return (
    <CardContent>
      <Styled.h1
        css={css({
          textAlign: "center",
          margin: 0
        })}
      >
        {post.shortDescription}
      </Styled.h1>
      <Styled.p
        css={css({
          textAlign: "center",
          marginTop: "0.5rem"
        })}
      >
        {new Date(post.publishDate)
          .toUTCString()
          .split(" ")
          .splice(0, 4)
          .join(" ")}
      </Styled.p>
      <Styled.p
        css={css({
          margin: "0.5rem 1rem",
          textAlign: "center"
        })}
        dangerouslySetInnerHTML={bodyContent}
      />
    </CardContent>
  );
};

export default PostContent;
