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
    <div className="card latest-post">
      <h2 className="card-heading latest-post-heading">Latest blog post</h2>
      <img
        className="card-img"
        src={post.featured_image_src}
        alt={post.title.rendered}
      />
      <div className="latest-post-body">
        {/* <h2 className="card-heading">Latest post</h2> */}
        <h3 className="latest-post-title">{post.title.rendered}</h3>

        <div className="latest-post-content">
          <p>
            {cleanExcerpt}
            {/* Some quick example text to build on the card title and make up the
            bulk of the card's content. */}
          </p>
        </div>
        <div className="latest-post-details">
          <div className="latest-post-details">
            <img src={Calendar} alt="date" />
            <span>{post.date.slice(0, 10)}</span>
          </div>
          <Link to={`/post/${post.slug}`} className="btn latest-post-btn">
            Read
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LatestPost;
