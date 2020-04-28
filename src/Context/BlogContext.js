import React, { createContext, useState, useEffect } from "react";

export const BlogContext = createContext({});

export const BlogContextProvider = (props) => {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchPosts = () => {
    console.log("fetching Posts");
    fetch("https://vdomarkas.com/wp/wp-json/wp/v2/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching the project data. ", err);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchPosts();
    // eslint-disable-next-line
  }, []);

  if (!loading) {
    console.log("posts", posts);
    return (
      <BlogContext.Provider value={{ posts }}>
        {props.children}
      </BlogContext.Provider>
    );
  } else {
    return null;
  }
};
