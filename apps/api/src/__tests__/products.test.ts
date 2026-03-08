import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../app";

describe("GET /api/products", () => {
  it("returns all products", async () => {
    const res = await request(app).get("/api/products");
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  it("each product has required fields", async () => {
    const res = await request(app).get("/api/products");
    res.body.data.forEach((product: Record<string, unknown>) => {
      expect(product.id).toBeTruthy();
      expect(product.name).toBeTruthy();
      expect(product.slug).toBeTruthy();
      expect(product.price).toBeTypeOf("number");
    });
  });
});

describe("GET /api/products/:slug", () => {
  it("returns a product by slug", async () => {
    const res = await request(app).get("/api/products/daily-foundation");
    expect(res.status).toBe(200);
    expect(res.body.data.id).toBe("daily-foundation");
  });

  it("returns 404 for unknown slug", async () => {
    const res = await request(app).get("/api/products/unknown-product");
    expect(res.status).toBe(404);
  });
});
