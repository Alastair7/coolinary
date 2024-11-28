import { useAuth0 } from "@auth0/auth0-react";

export const LoginPage = () => {
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
      <h1>Start using Coolinary!</h1>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};
