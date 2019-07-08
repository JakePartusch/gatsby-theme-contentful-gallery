import React from "react";
import Layout from "./layout";
import SEO from "./seo";
import Header from "./header";
import PostGrid from "./post-grid";

const Posts = ({ pageContext }) => {
  return (
    <Layout>
      <SEO />
      <Header />
      <PostGrid posts={pageContext.posts} />
    </Layout>
  );
};

export default Posts;
