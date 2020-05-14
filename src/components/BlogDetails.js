// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { BlogContext } from "../Context/BlogContext";

// function BlogDetails({ location }) {
//   const { posts } = useContext(BlogContext);
//   const [currentPost] = posts.filter((post) => {
//     return post.slug === location.pathname.slice(6);
//   });
//   console.log(currentPost);
//   return (
//     <div className="single-post">
//       <div className="single-post-container">
//         <h2
//           className="single-post-heading"
//           dangerouslySetInnerHTML={{ __html: currentPost.title.rendered }}
//         ></h2>
//         <span className="single-post-date">
//           {currentPost.date.slice(0, 10)}
//         </span>
//         <img
//           className="single-post-image"
//           src={currentPost.featured_image_src}
//           alt={currentPost.title.rendered}
//         />
//         <div
//           className="single-post-content"
//           dangerouslySetInnerHTML={{ __html: currentPost.content.rendered }}
//         ></div>
//         <Link className="btn btn-secondary" to="/blog/">
//           ‹ Back
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default BlogDetails;
