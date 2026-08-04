import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";
import { useT } from "@/components/AppProviders";
import { SERVICE_KEYS, SERVICE_IMAGES } from "@/lib/services-data";
import servicesHero from "@/assets/ServiceHero.jpg";

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
      { property: "og:image", content: servicesHero },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const t = useT();
  return (
    <AppLayout overlayHeader>
      {/* HERO — focused banner with brand-aligned image */}
      <section className="relative isolate overflow-hidden">
        <img
          src={servicesHero}
          alt=""
          width={1920}
          height={896}
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
            <div className="md:col-span-8">
              <div className="mb-5 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-white/70">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-primary)]" />
                {t("common.nav.services")}
              </div>
              <h1
                className="display-2xl max-w-3xl text-white"
                style={{ textShadow: "0 2px 30px rgba(0,0,0,0.45)" }}
              >
                {t("services.overview.headline")}
              </h1>
            </div>
            <div className="md:col-span-4">
              <p className="max-w-md text-base leading-relaxed text-white/85 md:text-[17px]">
                {t("services.overview.intro")}
              </p>
            </div>
          </div>
          <div className="mt-12 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/55">
            <ArrowDown size={12} className="animate-bounce" /> Explore the practice
          </div>
        </div>
      </section>


      <section className="container-page py-20 md:py-28">
        <div className="border-t border-border">
          {SERVICE_KEYS.map((key, i) => {
            const imageFirst = i % 2 === 1;
            return (
              <Link
                key={key}
                to="/services/$serviceKey"
                params={{ serviceKey: key }}
                className="group grid grid-cols-1 items-center gap-8 border-b border-border py-10 transition-colors hover:bg-secondary/40 md:grid-cols-12 md:gap-12 md:py-14"
              >
                <div className={`md:col-span-7 ${imageFirst ? "md:order-2" : ""}`}>
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
                <div className={`md:col-span-5 ${imageFirst ? "md:order-1" : ""}`}>
                  <img
                    src={SERVICE_IMAGES[key]}
                    alt=""
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover"
                  />
                </div>
              </Link>
            );
          })}
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
