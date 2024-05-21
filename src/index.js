import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
<Auth0Provider
    domain="dev-er70gts78qj8bet8.us.auth0.com"
    clientId="FFc6EbhkfuPBNVrrNE2mZtFLac9mg9zM"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <App />
    </Auth0Provider>
    </BrowserRouter>
  );
