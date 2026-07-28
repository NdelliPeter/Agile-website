import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, ArrowDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AppLayout } from "@/components/AppLayout";
import { useT } from "@/components/AppProviders";
import { SectionHeading } from "@/components/SectionHeading";
import { Pipeline } from "@/components/Pipeline";
import { ServiceWheel } from "@/components/ServiceWheel";
import { ServiceOrbit } from "@/components/ServiceOrbit";
import { AfricaMap } from "@/components/AfricaMap";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import heroImg from "@/assets/IMG_0797.jpg";


const FRAMEWORKS = ["BEAC", "COBAC", "CIMA", "OHADA", "IFRS", "ISA", "GAFI", "BVMAC"];
const STAT_SHORT = ["Years experience", "Frameworks", "Sectors served"];



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
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">

        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full scale-105 object-cover"
        />
        {/* Layered duotone wash */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0907]/95 via-[#15120F]/65 to-[#15120F]/30" />
        <div
          className="absolute inset-0 mix-blend-multiply opacity-40"
          style={{
            background:
              "linear-gradient(135deg, rgba(80,144,140,0.55) 0%, transparent 55%, rgba(11,9,7,0.6) 100%)",
          }}
        />
        {/* 8-col grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px)",
            backgroundSize: "12.5% 100%",
          }}
        />

        {/* Kinetic eyebrow ticker — directly under the header */}
        <div className="absolute left-0 right-0 top-[70px] z-10 overflow-hidden border-y border-white/10 bg-black/30 py-2 backdrop-blur-sm md:top-[78px]">
          <div className="marquee-track text-[11px] font-medium uppercase tracking-[0.28em] text-white/55">
            {[...FRAMEWORKS, ...FRAMEWORKS, ...FRAMEWORKS, ...FRAMEWORKS].map((f, i) => (
              <span key={i} className="mx-8 inline-flex items-center gap-8">
                <span className="inline-block h-1 w-1 rounded-full bg-[var(--brand-primary)]" />
                {f}
              </span>
            ))}
          </div>
        </div>

        <div className="container-page relative z-10 w-full pb-32 pt-36 md:pb-36 md:pt-44">
          <Reveal>
            <div className="eyebrow mb-6" style={{ color: "#E4EDEC" }}>
              <span className="mr-3 inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-primary)] align-middle" />
              {t("common.brandFull")}
            </div>
            <h1 className="display-2xl max-w-5xl" style={{ color: "#F6F4F1" }}>
              {(t("home.hero.headline") as string).split(" ").map((w, i) => (
                <span
                  key={i}
                  className="word-reveal mr-[0.25em]"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  {w}
                </span>
              ))}
            </h1>
            <p
              className="mt-7 max-w-2xl text-base leading-relaxed md:text-lg"
              style={{ color: "#E4EDEC" }}
            >
              {t("home.hero.subheadline")}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
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
          </Reveal>
        </div>

        {/* Animated service orbit — top right, below header */}
        <div className="pointer-events-none absolute right-6 top-[120px] z-10 hidden lg:block xl:right-12">
          <div className="pointer-events-auto">
            <ServiceOrbit size={380} />
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-[8.5rem] right-6 z-10 hidden flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/55 md:flex">
          <span>Scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </div>

        {/* STATS — compact one-line index strip */}
        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="container-page">
            <div className="rounded-t-xl border border-b-0 border-white/15 bg-[#0B0907]/60 px-5 py-3 backdrop-blur-md md:px-8 md:py-3.5">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
                <div className="flex shrink-0 items-center gap-2 text-[10px] font-medium uppercase tracking-[0.28em] text-white/60">
                  <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--brand-primary)]" />
                  AGILE Index · Live
                </div>
                <div className="grid grid-cols-3 gap-4 md:flex-1 md:gap-8">
                  {(t("home.stats", { returnObjects: true }) as Array<{ value: string; label: string }>).map((s, i) => (
                    <div
                      key={i}
                      className={
                        "flex items-baseline gap-2.5 " +
                        (i > 0 ? "md:border-l md:border-white/15 md:pl-8" : "")
                      }
                    >
                      <CountUp
                        value={s.value}
                        className="font-display text-2xl font-medium tracking-tight text-white md:text-3xl"
                      />

                      <span className="text-[10.5px] uppercase tracking-[0.16em] text-white/70 md:text-[11px]">
                        {STAT_SHORT[i] ?? s.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="hidden shrink-0 text-[10px] uppercase tracking-[0.22em] text-white/40 md:block">
                  CEMAC · 2026
                </div>
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

              <Accordion
                type="single"
                collapsible
                defaultValue="pillar-0"
                className="mt-10 w-full border-t border-border"
              >
                {(t("home.africaFocus.pillars", { returnObjects: true }) as Array<{ title: string; body: string }>).map((p, i) => (
                  <AccordionItem key={i} value={`pillar-${i}`} className="border-b border-border">
                    <AccordionTrigger className="py-5 hover:no-underline md:py-6">
                      <div className="flex w-full items-center gap-5 text-left">
                        <span className="font-display text-xs font-medium tracking-[0.18em] text-primary">
                          0{i + 1}
                        </span>
                        <span className="font-display text-base font-medium text-foreground md:text-lg">
                          {p.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <p className="ml-[2.75rem] max-w-2xl text-[14px] leading-relaxed text-muted-foreground md:text-[15px]">
                        {p.body}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

            </div>

            <div className="md:col-span-6">
              <div className="relative">
                <AfricaMap className="h-auto w-full" />
              </div>
            </div>
          </div>

          {/* KPI indicators — full width below */}
          <dl className="mt-16 grid grid-cols-1 gap-8 border-t border-border pt-10 sm:grid-cols-3 sm:gap-10">
            {(t("home.africaFocus.stats", { returnObjects: true }) as Array<{ value: string; label: string }>).map((s, i) => (
              <div key={i}>
                <dt className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                  <CountUp value={s.value} />
                </dt>

                <dd className="mt-3 text-[13px] leading-snug text-muted-foreground md:text-sm">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>

          {/* CTA — full width below KPIs */}
          <div className="mt-12 flex w-full flex-col items-start justify-between gap-5 border-t border-border pt-10 md:flex-row md:items-center">
            <p className="font-display text-lg text-foreground md:text-xl">
              {t("home.africaFocus.ctaHeadline")}
            </p>
            <Link
              to="/contact"
              className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {t("home.africaFocus.ctaButton")}
              <ArrowUpRight size={16} />
            </Link>
          </div>


        </div>
      </section>
    </AppLayout>
  );
}
