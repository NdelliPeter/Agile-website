import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { useT } from "@/components/AppProviders";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { INDUSTRY_KEYS, type IndustryKey } from "@/lib/services-data";
import bankingImg from "@/assets/industry-banking.jpg";
import insuranceImg from "@/assets/industry-insurance.jpg";
import microfinanceImg from "@/assets/industry-microfinance.jpg";
import assetImg from "@/assets/industry-asset.jpg";
import mgmtImg from "@/assets/industry-management.jpg";
import agroImg from "@/assets/industry-agro.jpg";

const IMG: Record<IndustryKey, string> = {
  banking: bankingImg,
  insurance: insuranceImg,
  microfinance: microfinanceImg,
  assetManagement: assetImg,
  managementCompanies: mgmtImg,
  agroIndustry: agroImg,
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
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  const t = useT();
  return (
    <AppLayout>
      <section className="container-page pt-20 md:pt-28">
        <SectionHeading
          eyebrow={t("common.nav.industries")}
          title={t("industries.overview.headline")}
          intro={t("industries.overview.intro")}
          size="xl"
        />
      </section>

      {/* anchor nav */}
      <section className="sticky top-[78px] z-30 mt-16 border-y border-border bg-background/90 backdrop-blur">
        <div className="container-page flex gap-1 overflow-x-auto py-3 text-sm">
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
        const challenges = (t(`industries.items.${k}.challenges`, {
          returnObjects: true,
        }) as string[]) || [];
        const faq = t(`industries.items.${k}.faq`, { returnObjects: true }) as {
          q: string;
          a: string;
        };
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
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="md:col-span-7">
                  <div className="eyebrow mb-4">{String(i + 1).padStart(2, "0")} · Sector</div>
                  <h2 className="display-md text-foreground">
                    {t(`industries.items.${k}.title`)}
                  </h2>
                  <p className="mt-6 text-[15.5px] leading-relaxed text-muted-foreground md:text-base">
                    {t(`industries.items.${k}.description`)}
                  </p>

                  <h3 className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                    Key challenges
                  </h3>
                  <ul className="mt-4 divide-y divide-border border-y border-border">
                    {challenges.map((c, j) => (
                      <li key={j} className="grid grid-cols-[28px_1fr] gap-3 py-4">
                        <span className="font-display text-xs font-medium tracking-[0.18em] text-primary">
                          {String(j + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm leading-relaxed text-foreground">{c}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-8 rounded-2xl border border-border bg-background/60 p-5 text-sm leading-relaxed text-foreground">
                    <span className="eyebrow mr-2 text-primary">Frameworks</span>
                    {t(`industries.items.${k}.frameworks`)}
                  </p>

                  <div className="mt-8">
                    <FAQAccordion items={[faq]} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </AppLayout>
  );
}
