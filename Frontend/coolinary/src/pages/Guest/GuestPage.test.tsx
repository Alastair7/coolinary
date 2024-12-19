import * as auth0 from "@auth0/auth0-react";
import { useTypeWriter } from "@hooks/useTypewriter";
import { fireEvent } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, Mock, vi } from "vitest";
import { GuestPage } from "./GuestPage";

vi.mock("@auth0/auth0-react");
vi.mock("@hooks/useTypewriter.ts");

describe("GuestPage", () => {
  let loginWithRedirectMock: Mock;

  beforeEach(() => {
    (useTypeWriter as any).mockReturnValue("Mock Typewriter");

    loginWithRedirectMock = vi.fn();
    (auth0 as any).useAuth0 = vi.fn().mockReturnValue({
      loginWithRedirect: loginWithRedirectMock,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should redirect to universal login when login button is clicked", async () => {
    const guestPage = render(<GuestPage />);

    const loginButton = guestPage.getByRole("button", {
      name: "Connect to Coolinary",
    });

    fireEvent.click(loginButton);

    expect(loginWithRedirectMock).to.toHaveBeenCalledOnce();
  });
});
