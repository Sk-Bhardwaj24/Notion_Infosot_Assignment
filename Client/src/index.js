import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { UpdatecontextProvider } from "./Contexts/Updatecontext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UpdatecontextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </UpdatecontextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
