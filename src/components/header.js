import React from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { css, Styled } from "theme-ui";

const Avatar = styled(Img)({
  width: 150,
  height: 150,
  borderRadius: "50%",
  "@media(max-width:600px)": {
    width: 75,
    height: 75
  }
});

const Container = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem 0",
  margin: "1rem 0",
  borderBottom: "solid thin rgb(239,239,239)"
});

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulUser {
        edges {
          node {
            id
            avatar {
              fluid(maxHeight: 250, maxWidth: 250) {
                src
                srcSet
                aspectRatio
                sizes
              }
            }
            firstName
            lastName
            tagLine
          }
        }
      }
    }
  `);
  const user = data.allContentfulUser.edges[0].node;
  return (
    <Container>
      <Avatar fluid={user.avatar.fluid} />
      <Styled.div css={css({ marginLeft: "2rem" })}>
        <Styled.h1
          css={css({
            margin: 0
          })}
        >{`${user.firstName} ${user.lastName}`}</Styled.h1>
        <Styled.p
          css={css({
            margin: "0.25rem 0"
          })}
        >
          {user.tagLine}
        </Styled.p>
      </Styled.div>
    </Container>
  );
};

export default Header;
