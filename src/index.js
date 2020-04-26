import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ProjectContextProvider } from "./Context/ProjectContext";
import { PagesContextProvider } from "./Context/PagesContext";

ReactDOM.render(
  <React.StrictMode>
    <ProjectContextProvider>
      <PagesContextProvider>
        <App />
      </PagesContextProvider>
    </ProjectContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
