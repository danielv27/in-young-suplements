import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { AssessmentResults } from "../assessment/AssessmentResults";

const mockResults = {
  recommendedProducts: ["daily-foundation", "vitamin-d3-k2"],
  priorityFocus: ["Foundational Nutrition"],
  assessmentSummary: "Your primary focus area is Foundational Nutrition. We recommend 2 supplements.",
  rationale: {
    "daily-foundation": "A foundational multivitamin for everyone.",
    "vitamin-d3-k2": "Low sun exposure: add Vitamin D3+K2.",
  },
};

describe("AssessmentResults", () => {
  it("renders the plan heading", () => {
    render(<AssessmentResults results={mockResults} />);
    expect(screen.getByText("Your Personalized Plan")).toBeInTheDocument();
  });

  it("renders assessment summary", () => {
    render(<AssessmentResults results={mockResults} />);
    expect(screen.getByText(/Your primary focus area is Foundational Nutrition/)).toBeInTheDocument();
  });

  it("renders recommended product names", () => {
    render(<AssessmentResults results={mockResults} />);
    expect(screen.getByText("Daily Foundation")).toBeInTheDocument();
    expect(screen.getByText("Vitamin D3 + K2")).toBeInTheDocument();
  });

  it("renders rationale for products", () => {
    render(<AssessmentResults results={mockResults} />);
    expect(screen.getByText(/foundational multivitamin/i)).toBeInTheDocument();
  });

  it("renders priority focus badges", () => {
    render(<AssessmentResults results={mockResults} />);
    expect(screen.getByText("Foundational Nutrition")).toBeInTheDocument();
  });
});
