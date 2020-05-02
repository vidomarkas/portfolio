import React, { useContext } from "react";
import Calendar from "../assets/img/calendar.svg";
import { Link } from "react-router-dom";
import "../sass/LatestPost.scss";
import { BlogContext } from "../Context/BlogContext";

function LatestPost() {
  const { posts } = useContext(BlogContext);
  const post = posts[posts.length - 1];
  //remove tags from excerpt
  let cleanExcerpt = post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "");
  console.log("post", post);
  return (
    <div className="card latest">
      <h2 className="card-heading latest-heading">Latest blog post</h2>
      <img
        className="card-img"
        src={post.featured_image_src}
        alt={post.title.rendered}
      />
      <div className="latest-body">
        <h3 className="latest-title">{post.title.rendered}</h3>
        <div className="latest-content">
          <p>{cleanExcerpt}</p>
        </div>
        <div className="latest-details">
          <div className="latest-date">
            <img src={Calendar} alt="date" />
            <span>{post.date.slice(0, 10)}</span>
          </div>
          <Link to={`/post/${post.slug}`} className="btn latest-btn">
            Read
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LatestPost;
