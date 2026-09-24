import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services | AGILE Audit & Advisory",
  description:
    "Audit and assurance, agro industry, risk and compliance, performance, heritage and governance services across CEMAC and beyond.",
  openGraph: {
    title: "Services | AGILE",
    images: ["/assets/ServiceHero.jpg"],
  },
};

export default function Page() {
  return <ServicesClient />;
}
