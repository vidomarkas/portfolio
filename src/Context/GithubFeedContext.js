import React, { createContext, useState } from "react";

export const GithubFeedContext = createContext({});

export const GithubFeedContextProvider = (props) => {
  const [closed, setClosed] = useState(false);

  const toggleGithubFeed = () => {
    setClosed(!closed);
  };

  return (
    <GithubFeedContext.Provider
      value={{
        toggleGithubFeed,
        closed,
      }}
    >
      {props.children}
    </GithubFeedContext.Provider>
  );
};
