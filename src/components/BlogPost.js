import React from "react";
import { Link } from "react-router-dom";

function BlogPost({ post }) {
  let cleanExcerpt = post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "");
  return (
    <div className="card blog-item">
      <Link to={{ pathname: `/blog/${post.slug}` }}>
        <div className="blog-item-image">
          <img src={post.featured_image_src} alt={post.title.rendered} />
        </div>
      </Link>
      <div className="blog-item-content">
        <h3 className="blog-item-title">{post.title.rendered}</h3>
        <p className="blog-item-excerpt">{cleanExcerpt}</p>
        <Link
          to={{ pathname: `/post/${post.slug}` }}
          className="btn blog-item-btn"
        >
          Read
        </Link>
      </div>
    </div>
  );
}

export default BlogPost;
