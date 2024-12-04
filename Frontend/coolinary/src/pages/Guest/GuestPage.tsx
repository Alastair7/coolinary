import { useAuth0 } from "@auth0/auth0-react";
import "./GuestPage.scss";

export const GuestPage = () => {
  const { loginWithRedirect } = useAuth0();
  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/home",
      },
    });
  };

  return (
    <>
      <header>
        <h1>Coolinary</h1>
        <h2>Create and share recipes with your friends</h2>
      </header>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};
