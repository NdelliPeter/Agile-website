"use client";

import { ArrowDown } from "lucide-react";
import { AppLayout } from "@/app/components/AppLayout";
import { useT } from "@/app/providers";
import { FAQAccordion } from "@/app/components/FAQAccordion";
import { INDUSTRY_KEYS, type IndustryKey } from "@/app/lib/services-data";

const industriesHero = "/assets/CSM_Dubai%20Tours%204.jpg";

const IMG: Record<IndustryKey, string> = {
  banking: "/assets/IMG_3870.jpg",
  insurance: "/assets/CSM_Amazone%20Cotonou%201.jpeg",
  microfinance: "/assets/microfinance.jpg",
  assetManagement: "/assets/Asset%20management.jpg",
  managementCompanies: "/assets/Indutry%20Funds.jpg",
  agroIndustry: "/assets/Alex_PCT%20%20.jpg",
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
};

export default function IndustriesClient() {
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
          className="absolute inset-0 mix-blend-multiply opacity-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(80,144,140,0.55) 0%, rgba(42,34,27,0.2) 55%, rgba(11,9,7,0.65) 100%)",
          }}
        />
        <div className="container-page relative z-10 flex min-h-[62vh] flex-col justify-end pb-16 pt-36 md:min-h-[64vh] md:pb-20 md:pt-44">
          <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-10">
              <h1
                className="display-2xl max-w-7xl text-white"
                style={{
                  fontSize: "clamp(2.25rem, 6vw, 4.375rem)",
                  textShadow: "0 2px 30px rgba(0,0,0,0.45)",
                }}
              >
                {t("industries.overview.headline")}
              </h1>
            </div>
            <div className="md:col-span-10">
              <p className="max-w-7xl text-base text-justify leading-relaxed text-white/85 md:text-[17px]">
                {t("industries.overview.intro")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* anchor nav */}
      <section className="sticky top-[78px] z-30 mt-16 border-y border-border bg-background/90 backdrop-blur">
        <div className="container-page grid grid-cols-2 gap-2 py-3 text-sm sm:grid-cols-3 md:flex md:flex-wrap md:items-center md:justify-center md:gap-1">
          {INDUSTRY_KEYS.map((k) => (
            <a
              key={k}
              href={`#${k}`}
              className="rounded-full border border-transparent px-3 py-1 text-center text-[16px] text-muted-foreground hover:border-border hover:text-foreground"
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
        const faq =
          typeof faqRaw === "object" && faqRaw !== null && !Array.isArray(faqRaw)
            ? (faqRaw as { q: string; a: string })
            : null;

        return (
          <section
            id={k}
            key={k}
            className={
              "scroll-mt-32 border-t border-border " + (i % 2 === 1 ? "bg-secondary/30" : "")
            }
          >
            <div className="container-page py-20 md:py-28">
              <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
                <div className="md:col-span-5">
                  <img
                    src={IMG[k]}
                    alt=""
                    loading="lazy"
                    className={
                      "aspect-[4/3] w-full object-cover " +
                      (k === "banking" ? "duotone " : "") +
                      (k === "assetManagement" ? "object-top" : "object-[center_30%]")
                    }
                  />
                </div>
                <div className="md:col-span-7">
                  <h2 className="display-md text-foreground">{t(`industries.items.${k}.title`)}</h2>
                  <p
                    className="mt-6 text-[15.5px] leading-relaxed text-justify text-muted-foreground md:text-base"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {t(`industries.items.${k}.description`)}
                  </p>
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
                        <li
                          key={j}
                          className="grid grid-cols-[40px_1fr] gap-6 py-5 md:grid-cols-[60px_1fr]"
                        >
                          <span className="font-display text-s font-bold tracking-[0.18em] text-primary">
                            {String(j + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[15px] leading-relaxed text-foreground md:text-base">
                            {c}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {t(`industries.items.${k}.frameworks`) !== `industries.items.${k}.frameworks` && (
                  <p className="mt-8 rounded-2xl border border-border bg-background/60 p-5 text-sm leading-relaxed text-foreground md:text-base">
                    <span className="eyebrow mr-2 text-primary">
                      {t("ui.industries.frameworks")}
                    </span>
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
