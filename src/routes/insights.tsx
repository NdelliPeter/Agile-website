import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";
import { useT } from "@/components/AppProviders";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion, type FAQItem } from "@/components/FAQAccordion";
import insight1 from "@/assets/insight-1.jpg";
import insight2 from "@/assets/insight-2.jpg";
import insight3 from "@/assets/insight-3.jpg";
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
      { property: "og:image", content: insight1 },
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
    <AppLayout>
      <section className="container-page pt-20 md:pt-28">
        <SectionHeading
          eyebrow={t("insights.title")}
          title="Practical insight for regulated institutions."
          intro={t("insights.intro")}
          size="xl"
        />
      </section>

      <section className="container-page py-12">
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
      </section>

      <section className="container-page pb-20">
        <div className="border-t border-border">
          {articles.map((a, i) => (
            <article
              key={i}
              className="group grid grid-cols-1 gap-8 border-b border-border py-10 md:grid-cols-12 md:gap-12 md:py-14"
            >
              <div className="md:col-span-5">
                <img
                  src={INSIGHT_IMAGES[i % INSIGHT_IMAGES.length]}
                  alt=""
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="md:col-span-7 md:pt-2">
                <div className="font-display text-xs font-medium tracking-[0.18em] text-primary">
                  {String(i + 1).padStart(2, "0")} · {a.keyword}
                </div>
                <h3 className="mt-3 font-display text-2xl font-medium leading-snug text-foreground md:text-3xl">
                  {a.title}
                </h3>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                  {a.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  {t("common.cta.readMore")} <ArrowRight size={14} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Case studies */}
      <section className="border-t border-border bg-secondary/30">
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
      </section>

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
              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                {t("insights.newsletter.privacy")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
