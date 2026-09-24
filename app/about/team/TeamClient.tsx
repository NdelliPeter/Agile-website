"use client";

import { AppLayout } from "@/app/components/AppLayout";
import { SectionHeading } from "@/app/components/SectionHeading";
import { useT } from "@/app/providers";

// Images stay local (matched to members by array position, same as the original site).
const TEAM_IMAGES = [
  "/assets/Mme%20Simo.jpg",
  "/assets/Alex-Michel%20Ngningha.png",
  "/assets/IMG_5542.jpg",
];

type Member = {
  name: string;
  role: string;
  bio: string;
  active?: boolean;
};

export default function TeamClient() {
  const t = useT();
  const members = t("about.team.members", { returnObjects: true }) as Member[];
  const team = members
    .map((m, i) => ({ ...m, img: TEAM_IMAGES[i] }))
    .filter((m) => m.active !== false);
  const [founder, ...rest] = team;

  return (
    <AppLayout>
      <section className="container-page pt-20 md:pt-28">
        <SectionHeading
          title={t("about.team.page.title")}
          intro={t("about.team.page.intro")}
          size="xl"
          widthClassName="max-w-full md:max-w-[70%]"
        />
      </section>

      {/* FEATURED FOUNDER — editorial asymmetric */}
      <section className="container-page pt-16 md:pt-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <div
              className="overflow-hidden bg-secondary"
              style={{ borderRadius: "1px 35px 1px 35px" }}
            >
              <img
                src={founder.img}
                alt={founder.name}
                width={768}
                height={1129}
                className="aspect-[2/3] w-full object-cover "
              />
            </div>
          </div>
          <div className="md:col-span-7 md:pt-6">
            <div className="eyebrow-accent text-[15px] mb-5">
              {t("about.team.page.founderEyebrow")}
            </div>
            <h2 className="font-display text-3xl font-light leading-[1.05] text-foreground md:text-5xl">
              {founder.name}
            </h2>
            <div className="mt-6 h-px w-16 bg-primary" />
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-justify text-muted-foreground md:text-[17px]">
              {founder.bio}
            </p>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-px overflow-hidden border border-border bg-border">
              {[
                { v: "37+", l: t("about.team.founderStats.yearsPractice") },
                { v: "FCCA", l: t("about.team.founderStats.fellowAcca") },
                { v: "CEMAC", l: t("about.team.founderStats.chartered") },
              ].map((s) => (
                <div key={s.l} className="bg-background p-4 text-center">
                  <dt className="font-display text-xl font-medium text-foreground">{s.v}</dt>
                  <dd className="mt-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* SECONDARY ROW — partners & senior advisors */}
      <section className="container-page py-20 md:py-28">
        <div className="mb-10 flex items-end justify-between border-b border-border pb-5">
          <div className="eyebrow text-[16px] font-bold text-primary">
            {t("about.team.page.secondaryHeading")}
          </div>
          <div className="font-display text-sm text-muted-foreground" />
        </div>
        <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((m) => (
            <article key={m.name} className="group flex flex-col">
              <div
                className="overflow-hidden bg-secondary"
                style={{ borderRadius: "1px 35px 1px 35px" }}
              >
                <img
                  src={m.img}
                  alt={m.name}
                  width={768}
                  height={960}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-all duration-500 md:grayscale md:group-hover:grayscale-0"
                />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold leading-tight text-foreground md:text-2xl">
                {m.name}
              </h3>
              <p className="mt-1 text-[14px] font-bold uppercase tracking-[0.16em] text-primary">
                {m.role}
              </p>
              <div className="mt-4 h-px w-10 bg-border" />
              <p className="mt-4 text-[15px] text-justify leading-relaxed text-muted-foreground">
                {m.bio}
              </p>
            </article>
          ))}
        </div>
      </section>
    </AppLayout>
  );
}
