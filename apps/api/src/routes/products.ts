import { Router } from "express";
import { products, getProductBySlug } from "@inyoung/shared";

export const productsRouter = Router();

productsRouter.get("/", (_req, res) => {
  res.json({ success: true, data: products });
});

productsRouter.get("/:slug", (req, res) => {
  const product = getProductBySlug(req.params.slug);
  if (!product) {
    res.status(404).json({ error: "Product not found" });
    return;
  }
  res.json({ success: true, data: product });
});
