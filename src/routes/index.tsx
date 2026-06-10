import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";
import { useT } from "@/components/AppProviders";
import { SectionHeading } from "@/components/SectionHeading";
import { Pipeline } from "@/components/Pipeline";
import { ServiceWheel } from "@/components/ServiceWheel";
import { AfricaMap } from "@/components/AfricaMap";
import heroImg from "@/assets/hero-douala.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AGILE | Audit & Advisory in CEMAC and beyond" },
      {
        name: "description",
        content:
          "Statutory audits, risk management, compliance and advisory for banks, insurers, MFIs and agro industry across CEMAC and beyond.",
      },
      { property: "og:title", content: "AGILE | Audit & Advisory in CEMAC and beyond" },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const t = useT();

  const engagement = (t("home.engagement.steps", { returnObjects: true }) as Array<{ label: string; detail: string }>) || [];

  const testimonials = (t("home.testimonials.items", { returnObjects: true }) as Array<{ quote: string; name: string }>) || [];
  const filledTestimonials = testimonials.filter((x) => x.quote);

  return (
    <AppLayout overlayHeader>
      {/* HERO — full bleed, header floats over it */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0907]/90 via-[#15120F]/55 to-[#15120F]/25" />
        <div className="container-page relative z-10 w-full pb-44 pt-36 md:pb-52 md:pt-44">
          <div className="max-w-none">
            <div className="eyebrow mb-5" style={{ color: "#E4EDEC" }}>
              {t("common.brandFull")}
            </div>
            <h1 className="display-xl" style={{ color: "#F6F4F1" }}>
              {t("home.hero.headline")}
            </h1>
            <p
              className="mt-6 max-w-2xl text-base leading-relaxed md:text-lg"
              style={{ color: "#E4EDEC" }}
            >
              {t("home.hero.subheadline")}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#50908C] px-6 text-sm font-medium text-white transition-colors hover:bg-[#3F7370]"
              >
                {t("home.hero.cta")}
                <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-6 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                {t("common.nav.services")}
              </Link>
            </div>
          </div>
        </div>

        {/* STATS — overlay on hero, contrast-safe in both themes */}
        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="container-page">
            <div className="rounded-t-2xl border border-b-0 border-white/15 bg-[#0B0907]/55 px-6 py-7 backdrop-blur-md md:px-10 md:py-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
                {(t("home.stats", { returnObjects: true }) as Array<{ value: string; label: string }>).map((s, i) => (
                  <div
                    key={i}
                    className={
                      "md:px-2 " +
                      (i > 0 ? "border-t border-white/15 pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0" : "")
                    }
                  >
                    <div className="font-display text-4xl font-medium tracking-tight text-white md:text-5xl">
                      {s.value}
                    </div>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/80">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SERVICES — interactive spinning wheel */}
      <section className="container-page py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow={t("home.servicesPreview.heading")}
            title={t("services.overview.headline")}
            size="lg"
            align="center"
          />
          <p className="mt-5 text-sm text-muted-foreground md:text-base">
            {t("home.servicesPreview.wheelCta")}
          </p>
        </div>
        <div className="mt-14 md:mt-20">
          <ServiceWheel />
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            {t("common.cta.readMore")} <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* HOW WE WORK — pipeline */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container-page py-20 md:py-28">
          <SectionHeading
            eyebrow={t("home.engagement.heading")}
            title={t("home.engagement.title")}
            intro={t("home.engagement.intro")}
            size="lg"
          />
          <div className="mt-12">
            <Pipeline steps={engagement} />
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="container-page py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-6">
            <SectionHeading
              eyebrow={t("home.whyChooseUs.advantages.heading")}
              title={t("home.whyChooseUs.heading")}
              intro={t("home.whyChooseUs.paragraph")}
            />
          </div>
          <div className="md:col-span-6 md:pt-2">
            <ul className="space-y-6">
              {(t("home.whyChooseUs.advantages.items", { returnObjects: true }) as string[]).map(
                (item, i) => (
                  <li key={i} className="grid grid-cols-[auto_1fr] gap-5 border-t border-border pt-6">
                    <span className="font-display text-xs font-medium tracking-[0.18em] text-primary">
                      0{i + 1}
                    </span>
                    <p className="text-[15.5px] leading-relaxed text-foreground">{item}</p>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — pull quotes */}
      <section className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow={t("home.testimonials.heading")}
          title={t("home.testimonials.title")}
          size="md"
        />
        {filledTestimonials.length === 0 ? (
          <p className="mt-10 max-w-xl text-sm italic text-muted-foreground">
            {t("home.testimonials.empty")}
          </p>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
            {filledTestimonials.map((q, i) => (
              <figure key={i}>
                <blockquote className="font-display text-xl font-medium leading-snug text-foreground">
                  “{q.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm text-muted-foreground">— {q.name}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </section>

      {/* AFRICA FOCUS — audit & risk importance */}
      <section className="border-t border-border bg-secondary/40">
        <div className="container-page py-20 md:py-28">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-6">
              <SectionHeading
                eyebrow={t("home.africaFocus.eyebrow")}
                title={t("home.africaFocus.title")}
                intro={t("home.africaFocus.intro")}
                size="lg"
              />

              <dl className="mt-10 grid grid-cols-3 gap-6 border-y border-border py-8">
                {(t("home.africaFocus.stats", { returnObjects: true }) as Array<{ value: string; label: string }>).map((s, i) => (
                  <div key={i}>
                    <dt className="font-display text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                      {s.value}
                    </dt>
                    <dd className="mt-2 text-[12px] leading-snug text-muted-foreground md:text-[13px]">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>

              <ul className="mt-10 space-y-6">
                {(t("home.africaFocus.pillars", { returnObjects: true }) as Array<{ title: string; body: string }>).map((p, i) => (
                  <li key={i} className="grid grid-cols-[auto_1fr] gap-5">
                    <span className="font-display text-xs font-medium tracking-[0.18em] text-primary">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-base font-medium text-foreground md:text-lg">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">
                        {p.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <p className="font-display text-base text-foreground md:text-lg">
                  {t("home.africaFocus.ctaHeadline")}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  {t("home.africaFocus.ctaButton")}
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="relative rounded-2xl border border-border bg-background p-6 md:p-8">
                <AfricaMap className="h-auto w-full" />
                <div className="mt-6 border-t border-border pt-5">
                  <div className="font-display text-sm uppercase tracking-[0.22em] text-primary">
                    {t("home.africaFocus.map.caption")}
                  </div>
                  <p className="mt-2 text-[14px] leading-relaxed text-foreground">
                    {t("home.africaFocus.map.subcaption")}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12.5px] text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                      <span className="inline-block h-3 w-3 rounded-sm bg-primary" />
                      {t("home.africaFocus.map.legendHighlight")}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="inline-block h-3 w-3 rounded-sm bg-foreground/10" />
                      {t("home.africaFocus.map.legendOther")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
