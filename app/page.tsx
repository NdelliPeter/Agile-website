import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "AGILE | Audit & Advisory in CEMAC and beyond",
  description:
    "Statutory audits, risk management, compliance and advisory for banks, insurers, MFIs and agro industry across CEMAC and beyond.",
  openGraph: {
    title: "AGILE | Audit & Advisory in CEMAC and beyond",
    images: ["/assets/IMG_6965.jpg"],
  },
};

export default function Page() {
  return <HomeClient />;
}
