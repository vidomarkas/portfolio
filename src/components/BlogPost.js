import React from "react";
import { Link } from "react-router-dom";

function BlogPost({ post }) {
  let cleanExcerpt = post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "");
  return (
    <div className="card blog-item">
      <div className="blog-item-image-container">
        <div
          className="blog-item-image"
          style={{
            backgroundImage: `url(${post.featured_image_src_medium})`,
          }}
        ></div>
      </div>

      <div className="blog-item-content">
        <h3
          className="blog-item-title"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        ></h3>
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
