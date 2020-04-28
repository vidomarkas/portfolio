import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ProjectContextProvider } from "./Context/ProjectContext";
import { PagesContextProvider } from "./Context/PagesContext";
import { BlogContextProvider } from "./Context/BlogContext";

ReactDOM.render(
  <React.StrictMode>
    <ProjectContextProvider>
      <PagesContextProvider>
        <BlogContextProvider>
          <App />
        </BlogContextProvider>
      </PagesContextProvider>
    </ProjectContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
