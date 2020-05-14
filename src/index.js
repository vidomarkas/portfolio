import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ProjectContextProvider } from "./Context/ProjectContext";
import { PagesContextProvider } from "./Context/PagesContext";
import { ReviewContextProvider } from "./Context/ReviewContext";

ReactDOM.render(
  <React.StrictMode>
    <ProjectContextProvider>
      <PagesContextProvider>
        <ReviewContextProvider>
          <App />
        </ReviewContextProvider>
      </PagesContextProvider>
    </ProjectContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
