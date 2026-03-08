import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "../ui/badge";

describe("Badge", () => {
  it("renders with text", () => {
    render(<Badge>Skin Health</Badge>);
    expect(screen.getByText("Skin Health")).toBeInTheDocument();
  });

  it("applies secondary variant", () => {
    render(<Badge variant="secondary">Secondary</Badge>);
    const badge = screen.getByText("Secondary");
    expect(badge.className).toContain("bg-neutral");
  });
});
