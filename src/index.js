import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ProjectContextProvider } from "./Context/ProjectContext";
import { PagesContextProvider } from "./Context/PagesContext";
import { BlogContextProvider } from "./Context/BlogContext";
// import { ContextProvider } from "./Context/Context";

ReactDOM.render(
  <React.StrictMode>
    <ProjectContextProvider>
      <PagesContextProvider>
        <BlogContextProvider>
          {/* <ContextProvider> */}
          <App />
          {/* </ContextProvider> */}
        </BlogContextProvider>
      </PagesContextProvider>
    </ProjectContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
