import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Navbar } from "../marketing/Navbar";

describe("Navbar", () => {
  it("renders the brand name", () => {
    render(<Navbar />);
    expect(screen.getByText("InYoung")).toBeInTheDocument();
    expect(screen.getByText("Labs")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Navbar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Supplements")).toBeInTheDocument();
    expect(screen.getByText("Assessment")).toBeInTheDocument();
  });

  it("renders Take Assessment CTA", () => {
    render(<Navbar />);
    const ctaLinks = screen.getAllByText("Take Assessment");
    expect(ctaLinks.length).toBeGreaterThan(0);
  });
});
