import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { useT } from "@/components/AppProviders";
import { SectionHeading } from "@/components/SectionHeading";
import { VerticalPipeline } from "@/components/Pipeline";
import founderImg from "@/assets/founder.jpg";

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
  const team = t("about.team.members", { returnObjects: true }) as Array<{
    name: string;
    role: string;
    bio: string;
  }>;
  const filledTeam = team.filter((m) => m.name);

  return (
    <AppLayout>
      <section className="container-page pt-20 md:pt-28">
        <SectionHeading
          eyebrow={t("common.nav.about")}
          title={t("about.header.title")}
          intro={t("about.header.intro")}
          size="xl"
        />
      </section>

      {/* Story */}
      <section className="container-page py-20 md:py-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <SectionHeading eyebrow="Our story" title={t("about.story.heading")} size="md" />
          </div>
          <div className="md:col-span-7">
            <p className="text-[15.5px] leading-relaxed text-foreground md:text-base">
              {t("about.story.body")}
            </p>
            <blockquote className="mt-10 border-l-2 border-primary pl-6 font-display text-2xl font-medium leading-snug text-foreground md:text-3xl">
              “{t("about.quote")}”
            </blockquote>
          </div>
        </div>
      </section>

      {/* Founder bio */}
      <section className="border-t border-border">
        <div className="container-page grid grid-cols-1 gap-12 py-20 md:grid-cols-12 md:gap-16 md:py-28">
          <div className="md:col-span-4">
            <img
              src={founderImg}
              alt="Claudine Simo Mamo"
              width={1200}
              height={1500}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-sm object-cover"
              style={{ borderRadius: "1px 35px 1px 35px" }}
            />
          </div>
          <div className="md:col-span-8 md:pt-2">
            <div className="eyebrow mb-4 text-primary">Leadership</div>
            <h2 className="font-display text-3xl font-medium leading-tight text-foreground md:text-4xl">
              Claudine Simo Mamo
            </h2>
            <p className="mt-2 text-base font-medium text-muted-foreground md:text-lg">
              Founder &amp; Managing Partner
            </p>
            <p className="mt-6 text-[15.5px] leading-relaxed text-muted-foreground md:text-base">
              {t("about.founderBio.body")}
            </p>
          </div>
        </div>
      </section>


      {/* Vision / Mission */}
      <section className="container-page py-20 md:py-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <div className="border-t border-border pt-8">
            <div className="eyebrow mb-4">{t("about.vision.heading")}</div>
            <p className="font-display text-2xl font-medium leading-snug text-foreground md:text-3xl">
              {t("about.vision.body")}
            </p>
          </div>
          <div className="border-t border-border pt-8">
            <div className="eyebrow mb-4">{t("about.mission.heading")}</div>
            <p className="font-display text-2xl font-medium leading-snug text-foreground md:text-3xl">
              {t("about.mission.body")}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container-page py-20 md:py-28">
          <SectionHeading
            eyebrow={t("about.values.heading")}
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
                <div className="font-display text-xs font-medium tracking-[0.18em] text-primary">
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
            <SectionHeading eyebrow={t("about.timeline.heading")} title="A career, in milestones." size="md" />
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

      {/* Team */}
      <section className="border-t border-border">
        <div className="container-page py-20 md:py-28">
          <SectionHeading
            eyebrow={t("about.team.heading")}
            title="A team built on mentorship and excellence."
            size="md"
          />
          {filledTeam.length === 0 ? (
            <p className="mt-10 max-w-xl text-sm italic text-muted-foreground">
              Coming soon — team profiles will be added as they are confirmed.
            </p>
          ) : (
            <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
              {filledTeam.map((m, i) => (
                <div key={i}>
                  <div className="aspect-[4/5] w-full bg-secondary" />
                  <h4 className="mt-4 font-display text-base font-medium">{m.name}</h4>
                  <p className="text-sm text-muted-foreground">{m.role}</p>
                </div>
              ))}
            </div>
          )}
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
              <p className="text-[15.5px] leading-relaxed text-foreground md:text-base">
                {t("about.socialResponsibility.body")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
