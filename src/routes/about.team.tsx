import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { SectionHeading } from "@/components/SectionHeading";
import founderImg from "@/assets/Mme Simo.jpg";
import team1 from "@/assets/Alex-Michel Ngningha.png";
import team2 from "@/assets/IMG_5542.jpg";
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
    name: "Claudine SIMO MAMO",
    role: "Founder & Managing Partner",
    bio: "Mrs Simo is a CEMAC-certified Chartered Accountant and a Fellow of the Association of Chartered Certified Accountants (ACCA), bringing over 37 years of distinguished experience in audit, accounting, and advisory across Central Africa. As Founder and Managing Partner of AGILE, she advises financial institutions and major organizations on governance, structural resilience, and sustainable performance optimization.Beyond her technical mastery, Mrs Simo is dedicated to institutional capacity-building; fostering a culture of accountability and empowering the next generation of leadership.",
    img: founderImg,
  },
  {
    name: "Alex-Michel NGNINGHA",
    role: "Senior Actuarial Consultant",
    bio: "A solid expertise in P&C actuarial consulting, risk management, and reinsurance across French and European markets. As a Senior Executive Manager, he leads strategic engagements in Solvency II balance sheet audits, Enterprise Risk Management (ERM), ESG strategy, and M&A valuations. His previous Executive roles at Ernst & Young, Mazars Actuariat, SCOR Global P&C, and Aon Benfield focused on reserving, treaty pricing, internal model validation, and underwriting portfolio management. He holds a master’s degree in actuarial science and finance and is a qualified member of the INSTITUT DES ACTUAIRES.",
    img: team1,
  },
  {
    name: "Ange ALIMA AFANA",
    role: "Senior Risk Executive & Consultant",
    bio: "Strategic leader with over 14 years experience at the crossroads of financial risk, organisational transformation, and corporate governance within international groups (Wells Fargo, BNP Paribas, ICBC Standard Bank, Louis Dreyfus, Baobab Group). With a proven ability to design and drive ambitious risk strategies, to orchestrate complex operational transformations, and to generate measurable value in demanding multicultural and regulatory environments. Her background also spans capital markets, commodities trading, microfinance, and fintech.",
    img: team2,
  },
  // {
  //   name: "Joseph Mbarga",
  //   role: "Senior Advisor, Performance",
  //   bio: "Three decades guiding agro-industry, utilities and microfinance leadership teams toward sustainable, measurable performance.",
  //   img: team3,
  // },
];

function TeamPage() {
  const [founder, ...rest] = TEAM;
  return (
    <AppLayout>
      <section className="container-page pt-20 md:pt-28">
        <SectionHeading
          // eyebrow="Our team"
          title="A team shaped by legacy, driven by excellence."
          intro="Our founders and senior executives bring decades of elite cross-border experience, uncompromising rigour, and direct, hands-on oversight to every engagement."
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
            <div className="eyebrow-accent text-[15px] mb-5">Founder · Managing Partner</div>
            <h2 className="font-display text-3xl font-light leading-[1.05] text-foreground md:text-5xl">
              {founder.name}
            </h2>
            <div className="mt-6 h-px w-16 bg-primary" />
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-justify text-muted-foreground md:text-[17px]">
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
          <div className="eyebrow text-[16px] font-bold text-primary">Partners &amp; senior advisors</div>
          <div className="font-display text-sm text-muted-foreground">
            {/* 0{rest.length} leading the practice */}
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

