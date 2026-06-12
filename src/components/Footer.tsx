import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Facebook, Linkedin, Mail, MapPin } from "lucide-react";
import { useT } from "./AppProviders";
import { BrandMark } from "./BrandMark";


export function Footer() {
  const t = useT();
  const linkedin = t("contact.social.linkedin");
  const facebook = t("contact.social.facebook");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const offices = t("footer.offices.items", { returnObjects: true }) as Array<{
    city: string;
    country: string;
    role: string;
  }>;
  const credentials = t("footer.credentials", { returnObjects: true }) as string[];

  const socials = [
    { url: linkedin, Icon: Linkedin, label: "LinkedIn" },
    { url: facebook, Icon: Facebook, label: "Facebook" },
  ].filter((s) => s.url && s.url.length > 0);

  return (
    <footer className="mt-24 border-t border-primary/40 bg-primary text-primary-foreground dark:border-border dark:bg-background dark:text-foreground">
      {/* Newsletter band */}
      <div className="border-b border-primary-foreground/15 dark:border-border">
        <div className="container-page grid grid-cols-1 items-center gap-8 py-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary-foreground/70 dark:text-primary">
              The AGILE Brief
            </div>
            <h3 className="mt-3 font-display text-2xl font-light leading-tight text-primary-foreground dark:text-foreground md:text-3xl">
              Regulatory shifts, audit insights and governance briefings — once a month, never noise.
            </h3>
          </div>
          <form
            className="md:col-span-5"
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setSubscribed(true);
            }}
          >
            <div className="flex items-stretch gap-2 border-b border-primary-foreground/40 pb-2 dark:border-border">
              <input
                type="email"
                required
                disabled={subscribed}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@institution.com"
                className="flex-1 bg-transparent text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none dark:text-foreground dark:placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:text-white dark:text-primary"
              >
                {subscribed ? "Subscribed" : "Subscribe"} <ArrowRight size={14} />
              </button>
            </div>
            <p className="mt-2 text-[11px] text-primary-foreground/60 dark:text-muted-foreground">
              No spam. Unsubscribe in one click.
            </p>
          </form>
        </div>
      </div>

      {/* Main grid */}
      <div className="container-page py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand / contact */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <BrandMark variant="full" size={44} forceLight />
              <span className="text-base font-semibold tracking-tight">AGILE</span>
            </div>
            <p className="mt-5 max-w-md text-[14.5px] leading-relaxed text-primary-foreground/80 dark:text-muted-foreground">
              {t("footer.tagline")}
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-primary-foreground/85 dark:text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 text-primary-foreground dark:text-primary" />
                <span>{t("contact.info.address")}</span>
              </div>
              <a
                href={`mailto:${t("contact.info.emailGeneral")}`}
                className="inline-flex items-center gap-2 hover:text-primary-foreground dark:hover:text-foreground"
              >
                <Mail size={15} className="text-primary-foreground dark:text-primary" />
                {t("contact.info.emailGeneral")}
              </a>
            </div>

            {socials.length > 0 && (
              <div className="mt-6 flex items-center gap-2">
                {socials.map(({ url, Icon, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/40 bg-white/10 text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary dark:border-primary/30 dark:bg-[var(--brand-tint)] dark:text-primary dark:hover:bg-primary dark:hover:text-primary-foreground"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground dark:text-foreground">
              {t("common.nav.services")}
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {["audit", "agro", "risk", "performance", "heritage", "humanCapital"].map((k) => (
                <li key={k}>
                  <Link
                    to="/services/$serviceKey"
                    params={{ serviceKey: k }}
                    className="text-primary-foreground/80 transition-colors hover:text-primary-foreground dark:text-muted-foreground dark:hover:text-foreground"
                  >
                    {t(`home.servicesPreview.cards.${k}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground dark:text-foreground">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground dark:text-muted-foreground dark:hover:text-foreground">
                  {t("common.nav.about")}
                </Link>
              </li>
              <li>
                <Link to="/about/team" className="text-primary-foreground/80 hover:text-primary-foreground dark:text-muted-foreground dark:hover:text-foreground">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-primary-foreground/80 hover:text-primary-foreground dark:text-muted-foreground dark:hover:text-foreground">
                  {t("common.nav.industries")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground dark:text-muted-foreground dark:hover:text-foreground">
                  {t("common.nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground dark:text-foreground">
              Resources
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/insights" className="text-primary-foreground/80 hover:text-primary-foreground dark:text-muted-foreground dark:hover:text-foreground">
                  {t("common.nav.insights")}
                </Link>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground dark:text-muted-foreground dark:hover:text-foreground">
                  Annual Report
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground dark:text-muted-foreground dark:hover:text-foreground">
                  Regulatory Watch
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground dark:text-muted-foreground dark:hover:text-foreground">
                  Press &amp; Media
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Offices strip */}
        <div className="mt-14 border-t border-primary-foreground/20 pt-8 dark:border-border">
          <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary-foreground/60 dark:text-muted-foreground">
            Offices
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {OFFICES.map((o) => (
              <div key={o.city} className="flex items-start gap-3">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-primary-foreground/80 dark:bg-primary" />
                <div>
                  <div className="font-display text-base font-medium text-primary-foreground dark:text-foreground">
                    {o.city}
                    <span className="ml-2 text-[12px] font-normal text-primary-foreground/65 dark:text-muted-foreground">
                      {o.country}
                    </span>
                  </div>
                  <div className="mt-0.5 text-[11px] uppercase tracking-[0.16em] text-primary-foreground/55 dark:text-muted-foreground">
                    {o.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials strip */}
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-primary-foreground/20 pt-6 text-[10.5px] font-medium uppercase tracking-[0.2em] text-primary-foreground/65 dark:border-border dark:text-muted-foreground">
          {CREDENTIALS.map((c, i) => (
            <span key={c} className="inline-flex items-center gap-3">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-primary-foreground/40 dark:bg-border" />}
              {c}
            </span>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-primary-foreground/20 pt-6 text-xs text-primary-foreground/75 dark:border-border dark:text-muted-foreground md:flex-row md:items-center">
          <p>{t("footer.copyright")}</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-primary-foreground dark:hover:text-foreground">
              {t("footer.privacyPolicy")}
            </a>
            <a href="#" className="hover:text-primary-foreground dark:hover:text-foreground">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
