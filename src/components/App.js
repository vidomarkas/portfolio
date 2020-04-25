import React, { Component } from "react";

import Footer from "./Footer";
import SocialMedia from "./SocialMedia";
import GithubFeed from "./GithubFeed";
import Main from "./Main";

import "../sass/App.scss";

export class App extends Component {
  render() {
    return (
      <div className="app-container">
        <GithubFeed />
        <Main />
        <SocialMedia />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
