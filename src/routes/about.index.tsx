import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";
import { useT } from "@/components/AppProviders";
import { SectionHeading } from "@/components/SectionHeading";
import { VerticalPipeline } from "@/components/Pipeline";
import founderImg from "@/assets/founder.jpg";
import logoImg from "@/assets/logo.png";
import aboutHeroImg from "@/assets/Alex Uzbek 1 Noir & Blanc.jpeg"


export const Route = createFileRoute("/about/")({
  head: () => ({
    meta: [
      { title: "About AGILE | Audit, Advisory & Governance" },
      {
        name: "description",
        content:
          "Founded in 2026 and led by Claudine Simo Mamo, AGILE supports institutions with audit, governance and sustainable performance.",
      },
      { property: "og:title", content: "About AGILE" },
      { property: "og:image", content: founderImg },
      { property: "og:image", content: logoImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const t = useT();
  const values = t("about.values.items", { returnObjects: true }) as Array<{
    name: string;
    desc: string;
  }>;
  const milestones = t("about.timeline.items", { returnObjects: true }) as Array<{
    year: string;
    event: string;
  }>;

  return (
    <AppLayout>
      {/* Brand signature — animated logo motif (first on page) */}
      <section className="relative overflow-hidden bg-foreground text-background">
        {/* Aurora glow field */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-1/2 h-[640px] w-[640px] -translate-y-1/2 rounded-full bg-primary/30 blur-[140px] animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[120px] animate-[pulse_10s_ease-in-out_infinite]" />
        </div>
        {/* Subtle grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage: `url(${aboutHeroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="container-page relative grid grid-cols-1 items-center gap-16 py-24 md:grid-cols-12 md:py-32">
          {/* Logo stage */}
          <div className="md:col-span-5">
            <div className="relative mx-auto aspect-square w-full max-w-[420px]">
              {/* Rotating rings */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-full border border-primary/30"
                style={{ animation: "spin 28s linear infinite" }}
              />
              <div
                aria-hidden
                className="absolute inset-6 rounded-full border border-primary/20"
                style={{ animation: "spin 40s linear infinite reverse" }}
              />
              <div
                aria-hidden
                className="absolute inset-12 rounded-full border border-dashed border-primary/15"
                style={{ animation: "spin 60s linear infinite" }}
              />
              {/* Halo */}
              <div
                aria-hidden
                className="absolute inset-10 rounded-full bg-primary/20 blur-3xl"
                style={{ animation: "pulse 4s ease-in-out infinite" }}
              />
              {/* Logo */}
              <div className="absolute inset-0 grid place-items-center">
                <img
                  src={logoImg}
                  alt="AGILE"
                  className="h-[58%] w-[58%] object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.25)]"
                  style={{ animation: "float 6s ease-in-out infinite" }}
                />
              </div>
              {/* Orbit dot */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{ animation: "spin 16s linear infinite" }}
              >
                <span className="absolute left-1/2 top-0 -ml-1.5 h-3 w-3 rounded-full bg-primary shadow-[0_0_20px_rgba(94,234,212,0.8)]" />
              </div>
            </div>
          </div>

          {/* Manifesto */}
          <div className="md:col-span-7">
            {/* <div className="eyebrow mb-5 text-primary">The AGILE mark</div> */}
            <h2 className="font-display text-3xl font-light leading-[1.1] tracking-tight md:text-5xl">
              A proven Governance
              <br />
              <span className="italic text-primary">Confident execution.</span>
            </h2>
            <div className="mt-8 h-px w-16 bg-primary" />
            <p className="mt-8 max-w-xl text-[16px] leading-relaxed text-background/75 md:text-base">
              A continuous line of discipline and momentum. This is our signature across every audit, boardroom, and milestone.
            </p>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-px overflow-hidden border border-background/10 bg-background/10">
              {[
                { v: "2026", l: "Founded" },
                { v: "CEMAC", l: "Chartered" },
                { v: "FCCA", l: "Fellowship" },
              ].map((s) => (
                <div key={s.l} className="bg-foreground p-5 text-center">
                  <dt className="font-display text-2xl font-bold text-background">{s.v}</dt>
                  <dd className="mt-1 text-[10.5px] uppercase tracking-[0.18em] text-background/55">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
        `}</style>
      </section>

      {/* About header */}
      <section className="container-page pt-20 md:pt-28">
        <SectionHeading
          // eyebrow={t("common.nav.about")}
          title={t("about.header.title")}
          intro={t("about.header.intro")}
          size="xl"
        />
      </section>

      {/* Story */}
      <section className="container-page py-20 md:py-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <SectionHeading title={t("about.story.heading")} size="md" />
          </div>
          <div className="md:col-span-7">
            <p className="text-[15.5px] text-justify leading-relaxed text-foreground md:text-base">
              {t("about.story.body")}
            </p>
            <blockquote className="mt-10 border-l-2 border-primary pl-6 font-display text-2xl font-medium leading-snug text-foreground md:text-3xl">
              “{t("about.quote")}”
            </blockquote>
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="container-page py-20 md:py-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <div className=" border-border pt-8">
            <div className="eyebrow tracking-[0px] text-primary text-[28px] font-bold mb-4">{t("about.vision.heading")}</div>
            <p className="font-display text-justify text-[15.5px] leading-snug text-foreground md:text-lg">
              {t("about.vision.body")}
            </p>
          </div>
          <div className=" border-border pt-8">
            <div className="eyebrow tracking-[0px] text-primary text-[28px] font-bold mb-4">{t("about.mission.heading")}</div>
            <p className="font-display text-justify text-[15.5px] leading-snug text-foreground md:text-lg">
              {t("about.mission.body")}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container-page py-20 md:py-28">
          <SectionHeading
            // eyebrow={t("about.values.heading")}
            title="Five values that shape every engagement."
            intro={t("about.values.intro")}
            size="lg"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-0">
            {values.map((v, i) => (
              <div
                key={i}
                className="border-t border-border pt-5 md:border-r md:px-5 md:pr-6 md:last:border-r-0"
              >
                <div className="font-display text-[18px] font-bold tracking-[0.06em] text-primary">
                  0{i + 1} · {v.name}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container-page py-20 md:py-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <SectionHeading title="A career, in milestones." size="md" />
          </div>
          <div className="md:col-span-7">
            <VerticalPipeline
              steps={milestones.map((m) => ({
                label: m.year || "—",
                detail: m.event,
              }))}
            />
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="border-t border-border">
        <div className="container-page py-20 md:py-28">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow={t("about.team.heading")}
              title="A team built on mentorship and excellence."
              size="lg"
            />
            <Link
              to="/about/team"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-md font-medium text-primary-foreground transition-colors hover:bg-[var(--brand-primary-hover)]"
              style={{ borderRadius: "1px 35px 1px 35px" }}
            >
              Meet our team <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>


      {/* Social responsibility */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container-page py-20 md:py-28">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <SectionHeading
                eyebrow="Community"
                title={t("about.socialResponsibility.heading")}
                size="md"
              />
            </div>
            <div className="md:col-span-7">
              <p className="text-[15.5px] leading-relaxed text-justify text-foreground md:text-base">
                {t("about.socialResponsibility.body")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
