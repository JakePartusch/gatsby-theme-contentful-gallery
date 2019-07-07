import React from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

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

const Content = styled.div({
  marginLeft: "2rem"
});

const User = styled.h1({
  fontWeight: 300,
  fontSize: "1.5rem",
  margin: 0
});

const Tagline = styled.p({
  fontWeight: 200,
  color: "rgb(0,0,0,0.75)",
  margin: "0.25rem 0"
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
      <Content>
        <User>{`${user.firstName} ${user.lastName}`}</User>
        <Tagline>{user.tagLine}</Tagline>
      </Content>
    </Container>
  );
};

export default Header;
