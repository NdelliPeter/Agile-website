import type { NextConfig } from "next";
import { fileURLToPath } from "url";
import path from "path";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Don't auto-generate AGENTS.md / CLAUDE.md for AI coding agents on `next dev`.
  agentRules: false,
  // Pin the project root explicitly so Turbopack doesn't walk up looking for
  // a lockfile and pick a stray one from a parent directory.
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
