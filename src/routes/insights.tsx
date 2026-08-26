import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowDown, Mail } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";
import { useT } from "@/components/AppProviders";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion, type FAQItem } from "@/components/FAQAccordion";
import insightsHero from "@/assets/CSM_Yogam 2.jpeg";
import insight1 from "@/assets/CSM_Amazone Cotonou 1.jpeg";
import insight2 from "@/assets/Alex_Uzbek 4 Noir & Blanc Samarcan.jpeg";
import insight3 from "@/assets/Alex_Uzbek 3 Color Samarcan.jpeg";
import insight4 from "@/assets/insight-4.jpg";
import insight5 from "@/assets/insight-5.jpg";

const INSIGHT_IMAGES = [insight1, insight2, insight3, insight4, insight5];

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights | AGILE Financial Compliance" },
      {
        name: "description",
        content:
          "Expert insights on CIMA, COBAC, COSUMAF and OHADA compliance for financial institutions across CEMAC and beyond.",
      },
      { property: "og:title", content: "Insights | AGILE" },
      { property: "og:image", content: insightsHero },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  const t = useT();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const articles = t("insights.articles", { returnObjects: true }) as Array<{
    title: string;
    summary: string;
    keyword: string;
  }>;
  const categories = t("insights.categories", { returnObjects: true }) as string[];
  const caseStudies = t("insights.caseStudies.items", { returnObjects: true }) as Array<{
    title: string;
    challenge: string;
    approach: string;
    outcome: string;
  }>;
  const filledCases = caseStudies.filter((c) => c.title);
  const faqs = t("insights.faqs", { returnObjects: true }) as FAQItem[];

  return (
    <AppLayout overlayHeader>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={insightsHero}
          alt=""
          width={1920}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/55 to-black/80" />
        <div
          className="absolute inset-0 mix-blend-multiply opacity-50"
          style={{
            background:
              "linear-gradient(135deg, rgba(80,144,140,0.55) 0%, rgba(42,34,27,0.2) 55%, rgba(11,9,7,0.65) 100%)",
          }}
        />
        {/* <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        /> */}
        <div className="container-page relative z-10 flex min-h-[62vh] flex-col justify-end pb-16 pt-36 md:min-h-[64vh] md:pb-20 md:pt-44">
          <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-10">
              {/* <div className="mb-5 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-white/70">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-primary)]" />
                {t("insights.title")}
              </div> */}
              <h1
                className="display-2xl max-w-7xl text-white"
                style={{  fontSize: "clamp(2.25rem, 6vw, 4.375rem)", textShadow: "0 2px 30px rgba(0,0,0,0.45)" }}
              >
                {t("insights.title")}
              </h1>
            </div>
            <div className="md:col-span-10">
              <p className="max-w-7xl text-base text-justify leading-relaxed text-white/85 md:text-[17px]">
                {t("insights.intro")}
              </p>
            </div>
          </div>
          {/* <div className="mt-12 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/55">
            <ArrowDown size={12} className="animate-bounce" /> Read the latest
          </div> */}
        </div>
      </section>

      {/* <section className="container-page py-12">
        <div className="flex flex-wrap gap-2">
          {categories.map((c, i) => (
            <span
              key={i}
              className="rounded-full border border-border bg-background px-3.5 py-1.5 text-xs text-muted-foreground"
            >
              {c}
            </span>
          ))}
        </div>
      </section> */}

      <section className="container-page pb-20">
        {articles.length > 0 && (
          <article className="group grid grid-cols-1 gap-8 border-t border-border pt-10 md:grid-cols-12 md:gap-12 md:pt-14">
            <div className="md:col-span-7">
              <img
                src={INSIGHT_IMAGES[0]}
                alt=""
                loading="lazy"
                className="aspect-[16/10] w-full object-cover object-[center_30%] duotone"
              />
            </div>
            <div className="md:col-span-5 md:pt-2">
              <div className="inline-flex items-center tracking-[0.08px] gap-2 font-display text-[15px] font-bold uppercase text-primary">
                <span className="inline-block h-1.5 w-6 bg-primary" />
                {t("ui.insights.featured")} · {articles[0].keyword}
              </div>
              <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-foreground md:text-[40px] md:leading-[1.1]">
                {articles[0].title}
              </h2>
              <p className="mt-5 text-[15.5px] text-justify leading-relaxed text-muted-foreground">
                {articles[0].summary}
              </p>
              {/* <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                {t("common.cta.readMore")} <ArrowRight size={14} />
              </span> */}
            </div>
          </article>
        )}

        {articles.length > 1 && (
          <div className="mt-16 grid grid-cols-1 gap-10 border-t border-border pt-12 md:grid-cols-2 md:gap-12">
            {articles.slice(1, 3).map((a, i) => (
              <article key={i} className="group">
                <img
                  src={INSIGHT_IMAGES[(i + 1) % INSIGHT_IMAGES.length]}
                  alt=""
                  loading="lazy"
                  className={
                    "aspect-[5/3] w-full object-cover " + (i === 1 ? "" : "duotone")
                  }
                />
                <div className="mt-5 font-display text-[15px] font-bold uppercase tracking-[0.08px] text-primary">
                  {String(i + 2).padStart(2, "0")} · {a.keyword}
                </div>
                <h3 className="mt-3 font-display text-xl font-medium leading-snug text-foreground md:text-2xl">
                  {a.title}
                </h3>
                <p className="mt-3 text-[14.5px] text-justify leading-relaxed text-muted-foreground">
                  {a.summary}
                </p>
              </article>
            ))}
          </div>
        )}

        {articles.length > 3 && (
          <div className="mt-16 border-t border-border">
            <div className="mb-6 mt-8 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {t("ui.insights.archive")}
            </div>
            <ul className="divide-y divide-border border-y border-border">
              {articles.slice(3).map((a, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="group grid grid-cols-[60px_1fr_auto] items-baseline gap-6 py-5 transition-colors hover:bg-secondary/40"
                  >
                    <span className="font-display text-[15px] font-bold tracking-[0.18em] text-primary">
                      {String(i + 4).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="font-display text-base font-medium text-foreground md:text-lg">
                        {a.title}
                      </div>
                      <div className="mt-1 text-[12px] uppercase tracking-[0.16em] text-muted-foreground">
                        {a.keyword}
                      </div>
                    </div>
                    <ArrowRight size={16} className="hidden text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary md:inline" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Case studies */}
      {/* <section className="border-t border-border bg-secondary/30">
        <div className="container-page py-20 md:py-24">
          <SectionHeading eyebrow={t("insights.caseStudies.heading")} title="Selected engagements." size="md" />
          {filledCases.length === 0 ? (
            <p className="mt-10 max-w-xl text-sm italic text-muted-foreground">
              Coming soon — anonymised case studies are being prepared.
            </p>
          ) : (
            <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
              {filledCases.map((c, i) => (
                <article key={i} className="border-t border-border pt-8">
                  <h3 className="font-display text-xl font-medium text-foreground">{c.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.challenge}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section> */}

      {/* FAQs */}
      <section className="container-page py-20 md:py-24">
        <SectionHeading eyebrow="FAQ" title="Answers to ten common questions." size="md" />
        <div className="mt-10">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-border">
        <div className="container-page py-20 md:py-24">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-6">
              <SectionHeading eyebrow="Newsletter" title={t("insights.newsletter.cta")} size="md" />
            </div>
            <div className="md:col-span-6">
              {subscribed ? (
                <p className="text-[15.5px] text-foreground">
                  Thank you — you’re subscribed to AGILE Insights.
                </p>
              ) : (
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="flex flex-1 items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5">
                    <Mail size={16} className="text-muted-foreground" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => email && setSubscribed(true)}
                    className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-[var(--brand-primary-hover)]"
                  >
                    Subscribe
                  </button>
                </div>
              )}
              <p className="mt-5 text-s leading-relaxed text-muted-foreground">
                {t("insights.newsletter.privacy")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
