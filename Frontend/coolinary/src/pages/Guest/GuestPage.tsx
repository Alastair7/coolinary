import { useAuth0 } from "@auth0/auth0-react";
import { useTypeWriter } from "@hooks/useTypewriter";
import ChefHat from "../../assets/images/chefHat.svg?react";
import { Button } from "../../shared/components/button/Button";
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

  const words: string[] = ["friends", "love", "family"];

  let word = useTypeWriter(words);

  return (
    <>
      <header>
        <h1>Coolinary</h1>
        <h2>
          Create and share recipes with your{" "}
          <span className="typewriter_words">{word}</span>
        </h2>
        <ChefHat className="chef-hat" />
      </header>

      <Button variant={"primary"} onClick={handleLogin}>
        Connect to Coolinary
      </Button>
    </>
  );
};
