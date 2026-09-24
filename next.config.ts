import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Don't auto-generate AGENTS.md / CLAUDE.md for AI coding agents on `next dev`.
  agentRules: false,
};

export default nextConfig;
