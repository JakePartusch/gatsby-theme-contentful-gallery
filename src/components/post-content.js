import React from "react"
import styled from "@emotion/styled"

const Header = styled.h1({
  fontSize: "2rem",
  color: "rgb(0,0,0,0.75)",
  textAlign: "center",
  margin: 0,
})

const PublishDate = styled.div({
  color: "rgb(0,0,0,0.75)",
  textAlign: "center",
  marginTop: "0.5rem",
})

const Body = styled.div({
  margin: "0.5rem 1rem",
  textAlign: "center",
})

const CardContent = styled.div({
  padding: "0.5rem",
  flex: "1",
})

const PostContent = ({ post }) => {
  const bodyContent = {
    __html: post.body.childMarkdownRemark.html,
  }
  return (
    <CardContent>
      <Header>{post.shortDescription}</Header>
      <PublishDate>{new Date(post.publishDate).toDateString()}</PublishDate>
      <Body dangerouslySetInnerHTML={bodyContent} />
    </CardContent>
  )
}

export default PostContent
