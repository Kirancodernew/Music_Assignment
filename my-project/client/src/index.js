import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { MusicProvider } from "./context/MusicContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MusicProvider>
          <App />
        </MusicProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
