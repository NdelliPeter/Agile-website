import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";
import { useT } from "@/components/AppProviders";

import { FAQAccordion } from "@/components/FAQAccordion";
import { INDUSTRY_KEYS, type IndustryKey } from "@/lib/services-data";
import industriesHero from "@/assets/industries-hero.jpg";
import bankingImg from "@/assets/industry-banking.jpg";
import insuranceImg from "@/assets/industry-insurance.jpg";
import microfinanceImg from "@/assets/industry-microfinance.jpg";
import assetImg from "@/assets/industry-asset.jpg";
import mgmtImg from "@/assets/industry-management.jpg";
import agroImg from "@/assets/industry-agro.jpg";
import diligenceBusinessImg from "@/assets/office-meeting-discussion-stockcake.jpg";

const IMG: Record<IndustryKey, string> = {
  banking: bankingImg,
  insurance: insuranceImg,
  microfinance: microfinanceImg,
  assetManagement: assetImg,
  managementCompanies: mgmtImg,
  agroIndustry: agroImg,
  diligenceBusiness: diligenceBusinessImg,
};

const STATS: Record<IndustryKey, Array<{ value: string; label: string }>> = {
  banking: [
    { value: "14+", label: "COBAC engagements" },
    { value: "8", label: "CEMAC banking clients" },
    { value: "100%", label: "On-time reg. filings" },
  ],
  insurance: [
    { value: "CIMA", label: "Code-aligned audits" },
    { value: "6", label: "Insurers served" },
    { value: "12+", label: "Solvency reviews" },
  ],
  microfinance: [
    { value: "20+", label: "MFI mandates" },
    { value: "3", label: "CEMAC countries" },
    { value: "PARMEC", label: "Framework expertise" },
  ],
  assetManagement: [
    { value: "COSUMAF", label: "Registered with" },
    { value: "4", label: "Asset managers" },
    { value: "100M+ XAF", label: "AUM advised" },
  ],
  managementCompanies: [
    { value: "OHADA", label: "Governance experts" },
    { value: "10+", label: "Holding structures" },
    { value: "5", label: "Board advisory seats" },
  ],
  agroIndustry: [
    { value: "9", label: "Agro-industry clients" },
    { value: "IFRS", label: "Reporting standard" },
    { value: "3", label: "Value-chain audits" },
  ],
  diligenceBusiness: [
    { value: "15+", label: "Due diligence mandates" },
    { value: "5", label: "M&A advisory clients" },
    { value: "100%", label: "Confidentiality assured" },
  ],
};

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries | AGILE Sector Expertise" },
      {
        name: "description",
        content:
          "Sector expertise for banking, insurance, microfinance, asset management, management companies and agro industry under OHADA, COBAC, CIMA, COSUMAF.",
      },
      { property: "og:title", content: "Industries | AGILE" },
      { property: "og:image", content: industriesHero },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  const t = useT();
  return (
    <AppLayout overlayHeader>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={industriesHero}
          alt=""
          width={1920}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/55 to-black/80" />
        <div
          className="absolute inset-0 mix-blend-multiply opacity-50"
          style={{
            background:
              "linear-gradient(135deg, rgba(80,144,140,0.55) 0%, rgba(42,34,27,0.2) 55%, rgba(11,9,7,0.65) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />
        <div className="container-page relative z-10 flex min-h-[62vh] flex-col justify-end pb-16 pt-36 md:min-h-[64vh] md:pb-20 md:pt-44">
          <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-10">
              <div className="mb-5 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-white/70">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-primary)]" />
                {t("common.nav.industries")}
              </div>
              <h1
                className="display-2xl max-w-7xl text-white"
                style={{ textShadow: "0 2px 30px rgba(0,0,0,0.45)" }}
              >
                {t("industries.overview.headline")}
              </h1>
            </div>
            <div className="md:col-span-10">
              <p className="max-w-7xl text-base leading-relaxed text-white/85 md:text-[17px]">
                {t("industries.overview.intro")}
              </p>
            </div>
          </div>
          <div className="mt-12 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/55">
            <ArrowDown size={12} className="animate-bounce" /> Explore sectors
          </div>
        </div>
      </section>

      {/* anchor nav */}
      <section className="sticky top-[78px] z-30 mt-16 border-y border-border bg-background/90 backdrop-blur">
        <div className="container-page flex gap-1 overflow-x-auto max-w-none justify-center py-3 text-sm">
          {INDUSTRY_KEYS.map((k) => (
            <a
              key={k}
              href={`#${k}`}
              className="shrink-0 rounded-full border border-transparent px-3 py-1 text-muted-foreground hover:border-border hover:text-foreground"
            >
              {t(`industries.items.${k}.title`)}
            </a>
          ))}
        </div>
      </section>

      {INDUSTRY_KEYS.map((k, i) => {
        const challengesRaw = t(`industries.items.${k}.challenges`, { returnObjects: true });
        const challenges = Array.isArray(challengesRaw) ? challengesRaw : [];

        const faqRaw = t(`industries.items.${k}.faq`, { returnObjects: true });
        const faq = typeof faqRaw === 'object' && faqRaw !== null && !Array.isArray(faqRaw)
          ? (faqRaw as { q: string; a: string })
          : null;

        const statsRaw = t(`ui.industries.stats.${k}`, { returnObjects: true });
        const stats = Array.isArray(statsRaw) ? statsRaw : (STATS[k] || []);

        return (
          <section
            id={k}
            key={k}
            className={
              "scroll-mt-32 border-t border-border " +
              (i % 2 === 1 ? "bg-secondary/30" : "")
            }
          >
            <div className="container-page py-20 md:py-28">
              <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
                <div className="md:col-span-5">
                  <img
                    src={IMG[k]}
                    alt=""
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover duotone"
                  />
                </div>
                <div className="md:col-span-7">
                  <div className="eyebrow mb-4">{String(i + 1).padStart(2, "0")} · {t("ui.industries.sector")}</div>
                  <h2 className="display-md text-foreground">
                    {t(`industries.items.${k}.title`)}
                  </h2>
                  <p className="mt-6 text-[15.5px] leading-relaxed text-muted-foreground md:text-base">
                    {t(`industries.items.${k}.description`)}
                  </p>

                  {stats.length > 0 && (
                    <dl className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border">
                      {stats.map((s) => (
                        <div key={s.label} className="bg-background px-3 py-4 text-center sm:px-4 sm:py-5">
                          <dt className="font-display text-lg font-medium text-primary sm:text-xl">
                            {s.value}
                          </dt>
                          <dd className="mt-1 text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
                            {s.label}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
              </div>

              <div className="mt-16">
                {challenges.length > 0 && (
                  <>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                      {t("ui.industries.keyChallenges")}
                    </h3>
                    <ul className="mt-4 divide-y divide-border border-y border-border">
                      {challenges.map((c, j) => (
                        <li key={j} className="grid grid-cols-[40px_1fr] gap-6 py-5 md:grid-cols-[60px_1fr]">
                          <span className="font-display text-s font-bold tracking-[0.18em] text-primary">
                            {String(j + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[15px] leading-relaxed text-foreground md:text-base">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {t(`industries.items.${k}.frameworks`) !== `industries.items.${k}.frameworks` && (
                  <p className="mt-8 rounded-2xl border border-border bg-background/60 p-5 text-sm leading-relaxed text-foreground md:text-base">
                    <span className="eyebrow mr-2 text-primary">{t("ui.industries.frameworks")}</span>
                    {t(`industries.items.${k}.frameworks`)}
                  </p>
                )}

                {faq && (
                  <div className="mt-8">
                    <FAQAccordion items={[faq]} />
                  </div>
                )}
              </div>

            </div>
          </section>
        );
      })}
    </AppLayout>
  );
}
