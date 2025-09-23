import "./index.css";
import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import index from "./store/index.ts";
createRoot(document.getElementById("root")!).render(
  <Provider store={index}>
    <App />
  </Provider>
);
