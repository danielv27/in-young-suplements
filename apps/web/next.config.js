/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  transpilePackages: ["@inyoung/shared"],
  output: "standalone",
  // Required for standalone output in a monorepo so Next.js traces files
  // relative to the monorepo root instead of the app directory.
  outputFileTracingRoot: path.join(__dirname, "../../"),
};

module.exports = nextConfig;
