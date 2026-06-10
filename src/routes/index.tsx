import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";
import { useT } from "@/components/AppProviders";
import { SectionHeading } from "@/components/SectionHeading";
import { Pipeline } from "@/components/Pipeline";
import { SERVICE_KEYS, SERVICE_IMAGES } from "@/lib/services-data";
import heroImg from "@/assets/hero-douala.jpg";
import founderImg from "@/assets/founder.jpg";

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

  const pipelineSteps = [
    { label: t("common.cta.consultation"), detail: t("services.overview.intro").slice(0, 90) + "…" },
  ];
  // Use a clean fixed engagement pipeline:
  const engagement = [
    { label: "Discover", detail: "Listen, scope, and map your regulatory and operational context." },
    { label: "Diagnose", detail: "Assess systems, risks and controls against OHADA, COBAC, CIMA and COSUMAF." },
    { label: "Deliver", detail: "Execute audit, advisory or training engagements with rigour and clarity." },
    { label: "Sustain", detail: "Monitor outcomes, build internal capacity and sustain compliant performance." },
  ];

  const testimonials = (t("home.testimonials.items", { returnObjects: true }) as Array<{ quote: string; name: string }>) || [];
  const filledTestimonials = testimonials.filter((x) => x.quote);

  return (
    <AppLayout>
      {/* HERO */}
      <section className="relative -mt-[64px] flex min-h-[88svh] items-end overflow-hidden">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A14]/85 via-[#1F1A14]/40 to-[#1F1A14]/15" />
        <div className="container-page relative z-10 w-full pb-16 pt-32 md:pb-24 md:pt-40">
          <div className="max-w-4xl">
            <div className="eyebrow mb-6 text-[#E4EDEC]" style={{ color: "#E4EDEC" }}>
              {t("common.brandFull")}
            </div>
            <h1
              className="display-xl text-[#F6F6F6]"
              style={{ color: "#F6F6F6" }}
            >
              {t("home.hero.headline")}
            </h1>
            <p
              className="mt-7 max-w-2xl text-lg leading-relaxed md:text-xl"
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
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container-page py-20 md:py-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {(t("home.stats", { returnObjects: true }) as Array<{ value: string; label: string }>).map((s, i) => (
            <div key={i} className="border-t border-border pt-6">
              <div className="font-display text-5xl font-medium tracking-tight text-foreground md:text-6xl">
                {s.value}
              </div>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES — numbered editorial rows */}
      <section className="container-page py-20 md:py-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <SectionHeading
              eyebrow={t("home.servicesPreview.heading")}
              title={t("services.overview.headline")}
              size="lg"
            />
            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              {t("common.cta.readMore")} <ArrowRight size={14} />
            </Link>
          </div>
          <div className="md:col-span-7">
            <div className="border-t border-border">
              {SERVICE_KEYS.map((key, i) => (
                <Link
                  key={key}
                  to="/services/$serviceKey"
                  params={{ serviceKey: key }}
                  className="group grid grid-cols-[auto_1fr_auto] items-start gap-5 border-b border-border py-7 transition-colors hover:bg-secondary/40 md:gap-8 md:py-8"
                >
                  <div className="font-display text-xs font-medium tracking-[0.18em] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium leading-snug text-foreground md:text-2xl">
                      {t(`home.servicesPreview.cards.${key}.title`)}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                      {t(`home.servicesPreview.cards.${key}.desc`)}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="mt-2 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK — pipeline */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container-page py-20 md:py-28">
          <SectionHeading
            eyebrow="How we work"
            title="A clear pipeline, from first conversation to lasting impact."
            intro="Every engagement follows a disciplined sequence so outcomes are predictable, auditable, and built to last."
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
          title="In the words of those we serve."
          size="md"
        />
        {filledTestimonials.length === 0 ? (
          <p className="mt-10 max-w-xl text-sm italic text-muted-foreground">
            Coming soon — client testimonials are being prepared from prior engagements.
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

      {/* FOUNDER */}
      <section className="border-t border-border">
        <div className="container-page grid grid-cols-1 gap-12 py-20 md:grid-cols-12 md:gap-16 md:py-28">
          <div className="md:col-span-5">
            <img
              src={founderImg}
              alt="Claudine Simo Mamo"
              width={1200}
              height={1500}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="md:col-span-7 md:pt-6">
            <SectionHeading
              eyebrow={t("home.aboutPreview.heading")}
              title="Claudine Simo Mamo, Founder & Managing Partner."
              size="lg"
            />
            <p className="mt-6 text-[15.5px] leading-relaxed text-muted-foreground md:text-base">
              {t("home.aboutPreview.shortBio")}
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              {t("common.nav.about")} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
