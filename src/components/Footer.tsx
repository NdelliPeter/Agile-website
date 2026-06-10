import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, Mail, MapPin } from "lucide-react";
import { useT } from "./AppProviders";
import { BrandMark } from "./BrandMark";

export function Footer() {
  const t = useT();
  const linkedin = t("contact.social.linkedin");
  const facebook = t("contact.social.facebook");

  const socials = [
    { url: linkedin, Icon: Linkedin, label: "LinkedIn" },
    { url: facebook, Icon: Facebook, label: "Facebook" },
  ].filter((s) => s.url && s.url.length > 0);

  return (
    <footer className="mt-24 border-t border-border bg-background">
      <div className="container-page py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <BrandMark variant="full" size={44} />
              <span className="text-base font-semibold tracking-tight">AGILE</span>
            </div>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              {t("footer.tagline")}
            </p>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 text-primary" />
                <span>{t("contact.info.address")}</span>
              </div>
              <a
                href={`mailto:${t("contact.info.emailGeneral")}`}
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <Mail size={15} className="text-primary" />
                {t("contact.info.emailGeneral")}
              </a>
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              {t("common.nav.services")}
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {["audit", "agro", "risk", "performance", "heritage", "humanCapital"].map((k) => (
                <li key={k}>
                  <Link
                    to="/services/$serviceKey"
                    params={{ serviceKey: k }}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t(`home.servicesPreview.cards.${k}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              {t("footer.companyHeading") !== "footer.companyHeading"
                ? t("footer.companyHeading")
                : "Company"}
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">
                  {t("common.nav.about")}
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-muted-foreground hover:text-foreground">
                  {t("common.nav.industries")}
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-muted-foreground hover:text-foreground">
                  {t("common.nav.insights")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                  {t("common.nav.contact")}
                </Link>
              </li>
            </ul>

            {socials.length > 0 && (
              <div className="mt-6 flex items-center gap-2">
                {socials.map(({ url, Icon, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-[var(--brand-tint)] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>{t("footer.copyright")}</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-foreground">
              {t("footer.privacyPolicy")}
            </a>
            <a href="#" className="hover:text-foreground">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
