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

      <section className="container-page py-20 md:py-28">
        <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <article key={m.name} className="group flex flex-col">
              <div className="overflow-hidden bg-secondary" style={{ borderRadius: "1px 35px 1px 35px" }}>
                <img
                  src={m.img}
                  alt={m.name}
                  width={768}
                  height={960}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
              </div>
              <h3 className="mt-6 font-display text-2xl font-medium leading-tight text-foreground">
                {m.name}
              </h3>
              <p className="mt-1 text-[13px] font-medium uppercase tracking-[0.16em] text-primary">
                {m.role}
              </p>
              <div className="mt-4 h-px w-10 bg-border" />
              <p className="mt-4 text-[14.5px] leading-relaxed text-muted-foreground">
                {m.bio}
              </p>
            </article>
          ))}
        </div>
      </section>
    </AppLayout>
  );
}
