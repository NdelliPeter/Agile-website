import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { SectionHeading } from "@/components/SectionHeading";
import founderImg from "@/assets/founder.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

export const Route = createFileRoute("/about/team")({
  head: () => ({
    meta: [
      { title: "Our Team | AGILE" },
      {
        name: "description",
        content:
          "Meet the partners and senior advisors at AGILE — a team built on mentorship, discipline and excellence.",
      },
      { property: "og:title", content: "Our Team | AGILE" },
      {
        property: "og:description",
        content: "Partners and senior advisors at AGILE.",
      },
    ],
  }),
  component: TeamPage,
});

type Member = {
  name: string;
  role: string;
  bio: string;
  img: string;
};

const TEAM: Member[] = [
  {
    name: "Claudine Simo Mamo",
    role: "Founder & Managing Partner",
    bio: "CEMAC certified Chartered Accountant and Fellow of ACCA with 37+ years across audit, accounting and advisory in Central Africa.",
    img: founderImg,
  },
  {
    name: "Emmanuel Nkomo",
    role: "Partner, Audit & Assurance",
    bio: "Twenty years auditing banks, insurers and asset managers across the CEMAC region; specialist in OHADA and IFRS engagements.",
    img: team1,
  },
  {
    name: "Aïcha Toure",
    role: "Director, Governance & Risk",
    bio: "Governance and risk advisor to financial institutions and growth-stage organisations, with deep COBAC and CIMA expertise.",
    img: team2,
  },
  {
    name: "Joseph Mbarga",
    role: "Senior Advisor, Performance",
    bio: "Three decades guiding agro-industry, utilities and microfinance leadership teams toward sustainable, measurable performance.",
    img: team3,
  },
];

function TeamPage() {
  const [founder, ...rest] = TEAM;
  return (
    <AppLayout>
      <section className="container-page pt-20 md:pt-28">
        <SectionHeading
          eyebrow="Our team"
          title="A team built on mentorship and excellence."
          intro="Partners and senior advisors who lead our engagements — combining discipline, regional depth and a commitment to developing the next generation."
          size="xl"
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
                height={960}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7 md:pt-6">
            <div className="eyebrow-accent mb-5">Founder · Managing Partner</div>
            <h2 className="font-display text-3xl font-light leading-[1.05] text-foreground md:text-5xl">
              {founder.name}
            </h2>
            <div className="mt-6 h-px w-16 bg-primary" />
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-muted-foreground md:text-[17px]">
              {founder.bio}
            </p>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-px overflow-hidden border border-border bg-border">
              {[
                { v: "37+", l: "Years practice" },
                { v: "FCCA", l: "Fellow ACCA" },
                { v: "CEMAC", l: "Chartered" },
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
          <div className="eyebrow text-primary">Partners &amp; senior advisors</div>
          <div className="font-display text-sm text-muted-foreground">
            0{rest.length} leading the practice
          </div>
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
                  className="aspect-[4/5] w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
              </div>
              <h3 className="mt-6 font-display text-xl font-medium leading-tight text-foreground md:text-2xl">
                {m.name}
              </h3>
              <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.16em] text-primary">
                {m.role}
              </p>
              <div className="mt-4 h-px w-10 bg-border" />
              <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
                {m.bio}
              </p>
            </article>
          ))}
        </div>
      </section>
    </AppLayout>
  );
}

