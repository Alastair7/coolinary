import { useAuth0 } from "@auth0/auth0-react";

export const HomePage = () => {
  const { logout, isAuthenticated } = useAuth0();
  console.log(isAuthenticated);
  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };
  return (
    <>
      {isAuthenticated ? <h1>Coolinary</h1> : <h1>Not Authenticated</h1>}
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};
