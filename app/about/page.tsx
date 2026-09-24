import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About AGILE | Audit, Advisory & Governance",
  description:
    "Founded in 2026 and led by Claudine Simo Mamo, AGILE supports institutions with audit, governance and sustainable performance.",
  openGraph: {
    title: "About AGILE",
    images: ["/assets/founder.jpg", "/assets/logo.png"],
  },
};

export default function Page() {
  return <AboutClient />;
}
