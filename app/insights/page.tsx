import type { Metadata } from "next";
import InsightsClient from "./InsightsClient";

export const metadata: Metadata = {
  title: "Insights | AGILE Financial Compliance",
  description:
    "Expert insights on CIMA, COBAC, COSUMAF and OHADA compliance for financial institutions across CEMAC and beyond.",
  openGraph: {
    title: "Insights | AGILE",
    images: ["/assets/CSM_Yogam%202.jpeg"],
  },
};

export default function Page() {
  return <InsightsClient />;
}
