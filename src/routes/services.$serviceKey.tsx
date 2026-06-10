import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";
import { useT } from "@/components/AppProviders";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion, type FAQItem } from "@/components/FAQAccordion";
import { Pipeline } from "@/components/Pipeline";
import { SERVICE_IMAGES, SERVICE_KEYS, type ServiceKey } from "@/lib/services-data";

export const Route = createFileRoute("/services/$serviceKey")({
  beforeLoad: ({ params }) => {
    if (!SERVICE_KEYS.includes(params.serviceKey as ServiceKey)) throw notFound();
  },
  head: ({ params }) => ({
    meta: [
      { title: `${capitalize(params.serviceKey)} | AGILE Services` },
      { property: "og:title", content: `${capitalize(params.serviceKey)} | AGILE` },
      { property: "og:image", content: SERVICE_IMAGES[params.serviceKey as ServiceKey] },
    ],
  }),
  component: ServiceDetailPage,
});

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function ServiceDetailPage() {
  const t = useT();
  const { serviceKey } = Route.useParams();
  const key = serviceKey as ServiceKey;
  const deliverables = (t(`services.items.${key}.deliverables`, { returnObjects: true }) as string[]) || [];
  const faqs = (t(`services.items.${key}.faqs`, { returnObjects: true }) as FAQItem[]) || [];

  const pipelineSteps = [
    { label: "Scope", detail: "Align objectives, materiality and regulatory scope with stakeholders." },
    { label: "Assess", detail: "Walk through systems, data, controls and prior reporting." },
    { label: "Test", detail: "Sample, substantively test, model and challenge findings." },
    { label: "Report", detail: "Issue clear opinions, recommendations and management letters." },
    { label: "Embed", detail: "Coach teams to sustain compliance and improvements." },
  ];

  return (
    <AppLayout>
      {/* Hero image */}
      <section className="relative">
        <img
          src={SERVICE_IMAGES[key]}
          alt=""
          width={1600}
          height={900}
          className="aspect-[16/9] w-full object-cover md:aspect-[21/8]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
      </section>

      <section className="container-page -mt-20 md:-mt-32">
        <Link
          to="/services"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft size={14} /> {t("common.nav.services")}
        </Link>
        <SectionHeading
          eyebrow="Service"
          title={t(`services.items.${key}.title`)}
          intro={t(`services.items.${key}.short`)}
          size="lg"
        />
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <p className="text-[15.5px] leading-relaxed text-foreground md:text-base">
              {t(`services.items.${key}.detail`)}
            </p>
          </div>
          <aside className="md:col-span-5">
            <div className="eyebrow mb-4">Key deliverables</div>
            <ul className="divide-y divide-border border-y border-border">
              {deliverables.map((d, i) => (
                <li key={i} className="grid grid-cols-[28px_1fr] gap-3 py-4">
                  <span className="font-display text-xs font-medium tracking-[0.18em] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-foreground">{d}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30">
        <div className="container-page py-20 md:py-24">
          <SectionHeading eyebrow="Delivery pipeline" title="How we deliver this engagement." size="md" />
          <div className="mt-10">
            <Pipeline steps={pipelineSteps} />
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <SectionHeading eyebrow="FAQ" title="Common questions." size="md" />
        <div className="mt-10">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="flex flex-col items-start justify-between gap-6 border-t border-border pt-10 md:flex-row md:items-center">
          <p className="font-display text-2xl font-medium text-foreground md:text-3xl">
            {t("services.overview.ctaHeadline")}
          </p>
          <Link
            to="/contact"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-[var(--brand-primary-hover)]"
          >
            {t("services.overview.ctaButton")} <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </AppLayout>
  );
}
