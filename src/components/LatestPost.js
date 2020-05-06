import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../sass/LatestPost.scss";
import { BlogContext } from "../Context/BlogContext";

function LatestPost() {
  const { posts } = useContext(BlogContext);

  const renderedPosts = posts.map((post, index) => {
    return (
      <Link key={index} to={`/post/${post.slug}`}>
        <li className="latest-post">
          <div className="latest-post-body">
            <img
              className="latest-post-img"
              src={post.featured_image_src_thumbnail}
              alt={post.title.rendered}
            />
            <p className="latest-post-title">{post.title.rendered}</p>
          </div>
        </li>
      </Link>
    );
  });

  return (
    <div className="card">
      <h2 className="card-heading latest-heading">Latest blog posts</h2>
      <ul className="latest-posts">{renderedPosts}</ul>
    </div>
  );
}

export default LatestPost;
