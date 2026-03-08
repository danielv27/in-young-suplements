import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "../marketing/Footer";

describe("Footer", () => {
  it("renders brand name", () => {
    render(<Footer />);
    expect(screen.getByText("InYoung")).toBeInTheDocument();
  });

  it("renders legal disclaimer", () => {
    render(<Footer />);
    expect(screen.getByText(/These statements have not been evaluated/i)).toBeInTheDocument();
  });

  it("renders Products section", () => {
    render(<Footer />);
    expect(screen.getByText("Products")).toBeInTheDocument();
  });
});
