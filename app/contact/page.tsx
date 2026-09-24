import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact AGILE | Audit & Advisory CEMAC",
  description:
    "Contact AGILE in Douala for audit, risk and advisory solutions across CEMAC and beyond.",
  openGraph: {
    title: "Contact AGILE",
    images: ["/assets/Porte%20Djerba.jpg"],
  },
};

export default function Page() {
  return <ContactClient />;
}
