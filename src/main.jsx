// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MyContextApp from "./components/Context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <MyContextApp>
      <App />
    </MyContextApp>
  // </StrictMode>
);
