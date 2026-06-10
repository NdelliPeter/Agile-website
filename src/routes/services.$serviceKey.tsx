import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, ArrowDown, Check } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";
import { useT } from "@/components/AppProviders";
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

const SERVICE_INDEX: Record<ServiceKey, string> = {
  audit: "01",
  agro: "02",
  risk: "03",
  performance: "04",
  heritage: "05",
  humanCapital: "06",
};

const SERVICE_PRINCIPLES: Record<ServiceKey, { k: string; v: string }[]> = {
  audit: [
    { k: "Independence", v: "No conflicts. No shortcuts." },
    { k: "Evidence-led", v: "Every opinion backed by testing." },
    { k: "Regulator-ready", v: "BEAC, COBAC & IFRS aligned." },
  ],
  agro: [
    { k: "Field-tested", v: "From cocoa to cattle." },
    { k: "Yield-focused", v: "Tracked KPIs per hectare." },
    { k: "Sustainable", v: "ESG built into every model." },
  ],
  risk: [
    { k: "Quantified", v: "Heatmaps backed by data." },
    { k: "Scenario-ready", v: "Stress-tested against shocks." },
    { k: "Embedded", v: "Owned by your three lines." },
  ],
  performance: [
    { k: "Metrics that matter", v: "Tied to strategy, not vanity." },
    { k: "Quick wins", v: "Value in the first 90 days." },
    { k: "Built to scale", v: "Systems that survive growth." },
  ],
  heritage: [
    { k: "Discretion", v: "Family-first confidentiality." },
    { k: "Generational", v: "Structured to outlast you." },
    { k: "Cross-border", v: "CEMAC & international fluent." },
  ],
  humanCapital: [
    { k: "Talent-first", v: "People drive the numbers." },
    { k: "Governance-ready", v: "Boards that actually function." },
    { k: "Coached, not taught", v: "Skills that stick." },
  ],
};

function ServiceDetailPage() {
  const t = useT();
  const { serviceKey } = Route.useParams();
  const key = serviceKey as ServiceKey;
  const deliverables = (t(`services.items.${key}.deliverables`, { returnObjects: true }) as string[]) || [];
  const faqs = (t(`services.items.${key}.faqs`, { returnObjects: true }) as FAQItem[]) || [];
  const principles = SERVICE_PRINCIPLES[key];

  const pipelineSteps = [
    { label: "Scope", detail: "Align objectives, materiality and regulatory scope with stakeholders." },
    { label: "Assess", detail: "Walk through systems, data, controls and prior reporting." },
    { label: "Test", detail: "Sample, substantively test, model and challenge findings." },
    { label: "Report", detail: "Issue clear opinions, recommendations and management letters." },
    { label: "Embed", detail: "Coach teams to sustain compliance and improvements." },
  ];

  return (
    <AppLayout overlayHeader>
      {/* ============ HERO ============ */}
      <section className="relative isolate min-h-[88vh] w-full overflow-hidden">
        <img
          src={SERVICE_IMAGES[key]}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Dark gradient + brand teal wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/85" />
        <div
          className="absolute inset-0 mix-blend-multiply opacity-60"
          style={{
            background:
              "linear-gradient(135deg, rgba(80,144,140,0.55) 0%, rgba(42,34,27,0.2) 50%, rgba(15,18,15,0.7) 100%)",
          }}
        />

        {/* Decorative grid lines */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />

        <div className="container-page relative z-10 flex min-h-[88vh] flex-col justify-end pb-16 pt-32 md:pb-24 md:pt-40">
          {/* Breadcrumb */}
          <Link
            to="/services"
            className="mb-8 inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-white/70 transition hover:text-white"
          >
            <ArrowLeft size={14} /> {t("common.nav.services")}
          </Link>

          <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <div className="mb-6 flex items-center gap-4">
                <span
                  className="font-display text-5xl font-light text-[var(--brand-primary)] md:text-6xl"
                  style={{ textShadow: "0 2px 24px rgba(0,0,0,0.5)" }}
                >
                  {SERVICE_INDEX[key]}
                </span>
                <span className="h-px w-16 bg-white/40" />
                <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/80">
                  AGILE Service
                </span>
              </div>
              <h1
                className="font-display text-4xl font-light leading-[1.05] text-white md:text-6xl lg:text-7xl"
                style={{ textShadow: "0 2px 30px rgba(0,0,0,0.4)" }}
              >
                {t(`services.items.${key}.title`)}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
                {t(`services.items.${key}.short`)}
              </p>
            </div>

            <div className="hidden md:col-span-4 md:block">
              <div
                className="border-l-2 border-[var(--brand-primary)] bg-white/5 p-6 backdrop-blur-md"
                style={{ borderRadius: "1px 35px 1px 35px" }}
              >
                <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-white/60">
                  Engagement type
                </div>
                <div className="font-display text-xl font-light text-white">
                  Advisory · Assurance · Coaching
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-white/70">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-primary)]" />
                  Currently accepting mandates
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/50">
            <ArrowDown size={14} className="animate-bounce" /> Scroll
          </div>
        </div>
      </section>

      {/* ============ OVERVIEW ============ */}
      <section className="container-page py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <div className="sticky top-28">
              <div className="eyebrow mb-4 text-primary">The mandate</div>
              <h2 className="font-display text-3xl font-light leading-tight text-foreground md:text-4xl">
                Why institutions{" "}
                <span className="italic text-primary">choose us</span> for this.
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border">
                {principles.map((p) => (
                  <div key={p.k} className="bg-background p-5">
                    <div className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                      {p.k}
                    </div>
                    <div className="mt-2 font-display text-lg font-light text-foreground">
                      {p.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <p className="text-base leading-relaxed text-muted-foreground md:text-[17px]">
              {t(`services.items.${key}.detail`)}
            </p>

            <div className="mt-14">
              <div className="mb-6 flex items-baseline justify-between border-b border-border pb-4">
                <div className="eyebrow text-primary">Key deliverables</div>
                <div className="font-display text-sm text-muted-foreground">
                  {String(deliverables.length).padStart(2, "0")} outputs
                </div>
              </div>
              <ul className="space-y-1">
                {deliverables.map((d, i) => (
                  <li
                    key={i}
                    className="group grid grid-cols-[44px_24px_1fr] items-start gap-4 border-b border-border/60 py-5 transition hover:bg-secondary/50"
                  >
                    <span className="font-display text-base font-medium text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="text-[15px] leading-relaxed text-foreground">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PIPELINE ============ */}
      <section className="relative overflow-hidden border-y border-border bg-secondary/40">
        <div
          className="absolute -right-32 -top-32 h-96 w-96 opacity-30"
          style={{
            background:
              "radial-gradient(circle, var(--brand-primary) 0%, transparent 70%)",
          }}
        />
        <div className="container-page relative py-20 md:py-28">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="eyebrow mb-3 text-primary">Delivery pipeline</div>
              <h2 className="font-display text-3xl font-light leading-tight text-foreground md:text-5xl">
                How we deliver this engagement.
              </h2>
            </div>
            <div className="font-display text-sm text-muted-foreground">
              Five disciplined stages · zero surprises
            </div>
          </div>
          <Pipeline steps={pipelineSteps} />
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="container-page py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <div className="eyebrow mb-3 text-primary">FAQ</div>
            <h2 className="font-display text-3xl font-light leading-tight text-foreground md:text-4xl">
              Common questions, <span className="italic text-primary">answered.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Don't see your question? Our partners are available for a confidential
              call within 48 hours.
            </p>
          </div>
          <div className="md:col-span-8">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="container-page pb-24">
        <div
          className="relative overflow-hidden p-10 md:p-16"
          style={{
            borderRadius: "1px 35px 1px 35px",
            background:
              "linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-primary-hover) 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <div className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-white/70">
                Ready when you are
              </div>
              <p className="font-display text-3xl font-light leading-tight text-white md:text-5xl">
                {t("services.overview.ctaHeadline")}
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link
                to="/contact"
                className="inline-flex h-14 items-center gap-3 bg-white px-7 text-sm font-medium text-[var(--brand-primary-hover)] transition hover:bg-white/90"
                style={{ borderRadius: "1px 35px 1px 35px" }}
              >
                {t("services.overview.ctaButton")} <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
