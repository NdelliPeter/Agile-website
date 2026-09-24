import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICE_IMAGES, SERVICE_KEYS, type ServiceKey } from "@/app/lib/services-data";
import ServiceDetailClient from "./ServiceDetailClient";

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export async function generateStaticParams() {
  return SERVICE_KEYS.map((serviceKey) => ({ serviceKey }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceKey: string }>;
}): Promise<Metadata> {
  const { serviceKey } = await params;
  const title = `${capitalize(serviceKey)} | AGILE Services`;
  const image = SERVICE_IMAGES[serviceKey as ServiceKey];
  return {
    title,
    openGraph: {
      title: `${capitalize(serviceKey)} | AGILE`,
      images: image ? [image] : undefined,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ serviceKey: string }> }) {
  const { serviceKey } = await params;
  if (!SERVICE_KEYS.includes(serviceKey as ServiceKey)) {
    notFound();
  }
  return <ServiceDetailClient serviceKey={serviceKey as ServiceKey} />;
}
