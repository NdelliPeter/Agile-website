"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ArrowDown, Check } from "lucide-react";
import { AppLayout } from "@/app/components/AppLayout";
import { useT } from "@/app/providers";
import { FAQAccordion, type FAQItem } from "@/app/components/FAQAccordion";
import { Pipeline } from "@/app/components/Pipeline";
import { SERVICE_IMAGES, SERVICE_GALLERY, type ServiceKey } from "@/app/lib/services-data";

// Renders translated copy that wraps its emphasised phrase in *asterisks*,
// e.g. "Why institutions *choose us* for this." — keeps the accent styling
// intact across languages without splitting the sentence into two keys.
function EmphasisText({ text }: { text: string }) {
  return (
    <>
      {text.split("*").map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="italic text-primary">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

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
  diligenceBusiness: [
    { k: "Data-driven", v: "Objective insights, not opinions." },
    { k: "Risk-focused", v: "Identify threats before they materialize." },
    { k: "Growth-oriented", v: "Opportunities for expansion and partnerships." },
  ],
};

export default function ServiceDetailClient({ serviceKey }: { serviceKey: ServiceKey }) {
  const t = useT();
  const key = serviceKey;

  const deliverables =
    (t(`services.items.${key}.deliverables`, { returnObjects: true }) as string[]) || [];
  const faqs = (t(`services.items.${key}.faqs`, { returnObjects: true }) as FAQItem[]) || [];
  const principles = SERVICE_PRINCIPLES[key];

  const pipelineSteps = t("services.pipeline.steps", { returnObjects: true }) as Array<{
    label: string;
    detail: string;
  }>;

  return (
    <AppLayout overlayHeader>
      {/* ============ HERO ============ */}
      <section className="relative isolate min-h-[66vh] w-full overflow-hidden">
        <img
          src={SERVICE_IMAGES[key]}
          alt=""
          className={
            "absolute inset-0 h-full w-full object-cover " +
            (key === "humanCapital" ? "object-[center_25%]" : "")
          }
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

        <div className="container-page relative z-10 flex min-h-[66vh] flex-col items-center justify-end pb-12 pt-28 text-center md:pb-16 md:pt-32">
          <Link
            href="/services"
            className="mb-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-white/70 transition hover:text-white"
          >
            <ArrowLeft size={14} /> {t("common.nav.services")}
          </Link>

          <h1
            className="w-full font-display text-4xl font-light leading-[1.05] text-white md:text-6xl lg:text-7xl"
            style={{ textShadow: "0 2px 30px rgba(0,0,0,0.4)" }}
          >
            {t(`services.items.${key}.title`).replace(/\s*\(.*?\)\s*/g, "")}
          </h1>
          <p className="mt-6 w-full text-base leading-relaxed text-white/85 md:text-lg ">
            {t(`services.items.${key}.short`)}
          </p>
        </div>
      </section>

      {/* ============ OVERVIEW ============ */}
      <section className="container-page py-20 md:py-28">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="eyebrow mb-4 text-primary">{t("services.detail.mandateEyebrow")}</div>
          <h2 className="font-display text-3xl font-light leading-tight text-foreground md:text-4xl">
            <EmphasisText text={t("services.detail.mandateHeading")} />
          </h2>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,360px)_minmax(0,1fr)] md:gap-12">
          <div className="w-full">
            <ServiceSlideshow
              images={SERVICE_GALLERY[key]}
              alt={t(`services.items.${key}.title`)}
            />
          </div>
          <div>
            <p className="whitespace-pre-line text-base leading-relaxed text-muted-foreground text-justify md:text-[17px]">
              {t(`services.items.${key}.detail`)}
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="mb-8 text-center">
            <div className="eyebrow mb-3 text-[16px] text-primary">
              {t("services.detail.deliverablesEyebrow")}
            </div>
          </div>
          <ul className="space-y-1 border-t border-border">
            {deliverables.map((d, i) => (
              <li
                key={i}
                className="group grid grid-cols-[44px_24px_1fr] items-start gap-4 border-b border-border/60 py-5 text-left transition hover:bg-secondary/50"
              >
                <span className="font-display text-base font-medium text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 flex h-5 w-1 items-center justify-center rounded-full text-primary transition group-hover:bg-primary group-hover:text-primary-foreground" />
                <span className="text-[15px] leading-relaxed text-foreground">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ PIPELINE ============ */}
      <section className="relative overflow-hidden border-y border-border bg-secondary/40">
        <div
          className="absolute -right-32 -top-32 h-96 w-96 opacity-30"
          style={{
            background: "radial-gradient(circle, var(--brand-primary) 0%, transparent 70%)",
          }}
        />
        <div className="container-page relative py-20 md:py-28">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-display text-3xl font-light leading-tight text-foreground md:text-5xl">
              {t("services.detail.processHeading")}
            </h2>
          </div>
          <Pipeline steps={pipelineSteps} />
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="container-page py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-light leading-tight text-foreground md:text-4xl">
            <EmphasisText text={t("services.detail.faqHeading")} />
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {t("services.detail.faqFooter")}
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* ============ CTA — editorial, quiet ============ */}
      <section className="border-t border-border">
        <div className="container-page py-20 md:py-28">
          <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-8">
              <p className="font-display text-lg font-light leading-[1.1] tracking-tight text-foreground md:text-5xl">
                {t("services.overview.ctaHeadline")}
              </p>
            </div>
            <div className="md:col-span-4 md:justify-self-end">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 border-b border-foreground/70 pb-2 text-sm font-medium uppercase tracking-[0.18em] text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {t("services.overview.ctaButton")}
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}

function ServiceSlideshow({ images, alt }: { images: string[]; alt: string }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % images.length), 4500);
    return () => clearInterval(id);
  }, [images.length]);
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-secondary shadow-[0_30px_80px_-30px_rgba(20,15,10,0.35)]">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={alt}
          loading="lazy"
          className={
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 " +
            (i === idx ? "opacity-100" : "opacity-0")
          }
        />
      ))}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => setIdx(i)}
            className={
              "h-1.5 rounded-full transition-all " +
              (i === idx ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80")
            }
          />
        ))}
      </div>
    </div>
  );
}
