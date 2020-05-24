import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ProjectContextProvider } from "./Context/ProjectContext";
import { PagesContextProvider } from "./Context/PagesContext";
import { ReviewContextProvider } from "./Context/ReviewContext";
import { GithubFeedContextProvider } from "./Context/GithubFeedContext";

ReactDOM.render(
  <React.StrictMode>
    <ProjectContextProvider>
      <PagesContextProvider>
        <ReviewContextProvider>
          <GithubFeedContextProvider>
            <App />
          </GithubFeedContextProvider>
        </ReviewContextProvider>
      </PagesContextProvider>
    </ProjectContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
