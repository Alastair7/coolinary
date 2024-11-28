import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router";

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const auth0Domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const auth0ClientId = import.meta.env.VITE_AUTH0_CLIENTID;
  const auth0RedirectUri: string = import.meta.env.VITE_AUTH0_CALLBACK_URI;

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(auth0Domain && auth0ClientId && auth0RedirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={auth0Domain}
      clientId={auth0ClientId}
      authorizationParams={{ redirect_uri: auth0RedirectUri }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
