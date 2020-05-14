import React from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
// import SocialMedia from "./SocialMedia";
import GithubFeed from "./GithubFeed";
import Main from "./Main";

import "../sass/App.scss";

export function App() {
  const { width } = useWindowDimensions();

  if (width <= 1174) {
    return (
      <div className="app-container">
        <Main />
      </div>
    );
  } else {
    return (
      <div className="app-container">
        {/* <SocialMedia /> */}
        <Main />
        <GithubFeed />
      </div>
    );
  }
}

export default App;
