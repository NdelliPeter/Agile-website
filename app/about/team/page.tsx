import type { Metadata } from "next";
import TeamClient from "./TeamClient";

export const metadata: Metadata = {
  title: "Our Team | AGILE",
  description:
    "Meet the partners and senior advisors at AGILE — a team built on mentorship, discipline and excellence.",
  openGraph: {
    title: "Our Team | AGILE",
    description: "Partners and senior advisors at AGILE.",
  },
};

export default function Page() {
  return <TeamClient />;
}
