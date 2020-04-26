import React, { createContext, useState, useEffect } from "react";

export const PagesContext = createContext({});

export const PagesContextProvider = (props) => {
  const [pages, setPages] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchPages = () => {
    fetch("https://vdomarkas.com/wp/wp-json/wp/v2/pages")
      .then((response) => response.json())
      .then((data) => {
        setPages(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching the project data. ", err);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchPages();
    // eslint-disable-next-line
  }, []);

  if (!loading) {
    console.log("pages", pages);
    return (
      <PagesContext.Provider value={{ pages }}>
        {props.children}
      </PagesContext.Provider>
    );
  } else {
    return null;
  }
};
