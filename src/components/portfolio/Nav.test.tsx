import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { Nav } from "./Nav";

const renderNav = () =>
  render(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>
  );

describe("Nav", () => {
  it("opens and closes the mobile menu", () => {
    renderNav();

    const toggle = screen.getByRole("button", { name: /open navigation/i });
    fireEvent.click(toggle);

    const mobileNav = document.getElementById("mobile-navigation");
    expect(mobileNav).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /close navigation/i })).toHaveAttribute(
      "aria-expanded",
      "true"
    );

    fireEvent.click(within(mobileNav!).getByRole("link", { name: /projects/i }));

    expect(screen.getByRole("button", { name: /open navigation/i })).toHaveAttribute(
      "aria-expanded",
      "false"
    );
  });
});
