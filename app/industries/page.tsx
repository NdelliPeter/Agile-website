import type { Metadata } from "next";
import IndustriesClient from "./IndustriesClient";

export const metadata: Metadata = {
  title: "Industries | AGILE Sector Expertise",
  description:
    "Sector expertise for banking, insurance, microfinance, asset management, management companies and agro industry under OHADA, COBAC, CIMA, COSUMAF.",
  openGraph: {
    title: "Industries | AGILE",
    images: ["/assets/CSM_Dubai%20Tours%204.jpg"],
  },
};

export default function Page() {
  return <IndustriesClient />;
}
