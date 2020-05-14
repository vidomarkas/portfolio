import React, { createContext, useState, useEffect } from "react";

export const ReviewContext = createContext({});

export const ReviewContextProvider = (props) => {
  const [reviews, setReviews] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchReviews = () => {
    fetch("https://vdomarkas.com/wp/wp-json/wp/v2/reviews")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching reviews. ", err);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchReviews();
    // eslint-disable-next-line
  }, []);

  if (!loading) {
    return (
      <ReviewContext.Provider value={{ reviews }}>
        {props.children}
      </ReviewContext.Provider>
    );
  } else {
    return null;
  }
};
