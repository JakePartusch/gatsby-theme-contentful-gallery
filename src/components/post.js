import React from "react"
import styled from "@emotion/styled"
import PostContent from "./post-content"
import PostImages from "./post-images"

const PostContainer = styled.div({
  maxWidth: 600,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  "@media(min-width:960px)": {
    alignItems: "center",
  },
})

const Card = styled.div({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  boxShadow:
    "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)",
  "@media (max-width:960px)": {
    boxShadow: "none",
  },
})

const Post = ({ post }) => {
  return (
    <PostContainer>
      <Card>
        <PostImages post={post} />
        <PostContent post={post} />
      </Card>
    </PostContainer>
  )
}

export default Post
