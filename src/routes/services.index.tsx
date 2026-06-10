import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";
import { useT } from "@/components/AppProviders";
import { SectionHeading } from "@/components/SectionHeading";
import { SERVICE_KEYS, SERVICE_IMAGES } from "@/lib/services-data";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | AGILE Audit & Advisory" },
      {
        name: "description",
        content:
          "Audit and assurance, agro industry, risk and compliance, performance, heritage and governance services across CEMAC and beyond.",
      },
      { property: "og:title", content: "Services | AGILE" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const t = useT();
  return (
    <AppLayout>
      <section className="container-page pt-20 md:pt-28">
        <SectionHeading
          eyebrow={t("common.nav.services")}
          title={t("services.overview.headline")}
          intro={t("services.overview.intro")}
          size="xl"
        />
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="border-t border-border">
          {SERVICE_KEYS.map((key, i) => (
            <Link
              key={key}
              to="/services/$serviceKey"
              params={{ serviceKey: key }}
              className="group grid grid-cols-1 gap-6 border-b border-border py-10 transition-colors hover:bg-secondary/40 md:grid-cols-12 md:gap-10 md:py-14"
            >
              <div className="md:col-span-1 font-display text-xs font-medium tracking-[0.18em] text-primary md:pt-1">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="md:col-span-6">
                <h3 className="font-display text-2xl font-medium leading-snug text-foreground md:text-3xl">
                  {t(`services.items.${key}.title`)}
                </h3>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                  {t(`services.items.${key}.short`)}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  {t("common.cta.readMore")}{" "}
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </div>
              <div className="md:col-span-5">
                <img
                  src={SERVICE_IMAGES[key]}
                  alt=""
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30">
        <div className="container-page flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-end md:py-20">
          <h2 className="display-md max-w-xl text-foreground">
            {t("services.overview.ctaHeadline")}
          </h2>
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
