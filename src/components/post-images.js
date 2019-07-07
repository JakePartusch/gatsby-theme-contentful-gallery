import React, { useState } from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import SwipeableViews from "react-swipeable-views"
import { bindKeyboard } from "react-swipeable-views-utils"
const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews)

const CardImage = styled(Img)(({ selected }) => ({
  minWidth: 500,
  minHeight: 500,
  "@media (max-width:960px)": {
    minWidth: "100vw",
  },
  display: selected ? undefined : "none",
}))

const Dots = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "1rem",
})

const Dot = styled.div(({ selected }) => ({
  width: 8,
  height: 8,
  margin: "0 2px",
  borderRadius: "50%",
  backgroundColor: selected ? "#1976d2" : "rgba(0, 0, 0, 0.26)",
}))

const PostImages = ({ post }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  return (
    <div>
      <BindKeyboardSwipeableViews
        onChangeIndex={index => setSelectedImageIndex(index)}
      >
        {post.coverImages.map((image, i) => (
          <CardImage selected={selectedImageIndex === i} fluid={image.fluid} />
        ))}
      </BindKeyboardSwipeableViews>
      {post.coverImages.length > 1 && (
        <Dots>
          {post.coverImages.map((image, i) => (
            <Dot selected={selectedImageIndex === i} />
          ))}
        </Dots>
      )}
    </div>
  )
}

export default PostImages
