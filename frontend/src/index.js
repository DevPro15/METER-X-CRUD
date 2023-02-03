// React
import React from "react";
import ReactDOM from "react-dom/client";
// Component
import App from "./App";
// Snackbar
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SnackbarProvider anchorOrigin={{ horizontal: "left", vertical: "bottom" }}>
      <App />
    </SnackbarProvider>
  </React.StrictMode>
);
