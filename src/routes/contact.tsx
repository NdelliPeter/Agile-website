import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";
import { useT } from "@/components/AppProviders";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import contactImg from "@/assets/contact-hero.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AGILE | Audit & Advisory CEMAC" },
      {
        name: "description",
        content: "Contact AGILE in Douala for audit, risk and advisory solutions across CEMAC and beyond.",
      },
      { property: "og:title", content: "Contact AGILE" },
      { property: "og:image", content: contactImg },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const t = useT();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const serviceOptions = t("contact.form.serviceOptions", { returnObjects: true }) as string[];

  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const canSubmit = form.fullName && form.email && form.message;

  return (
    <AppLayout>
      <section className="container-page pt-20 md:pt-28">
        <SectionHeading
          eyebrow={t("common.nav.contact")}
          title={t("contact.headline")}
          intro={t("contact.subheadline")}
          size="xl"
        />
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <div className="eyebrow mb-4">Office</div>
            <ul className="space-y-5 border-y border-border py-6">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-[15.5px] leading-relaxed text-foreground">
                  {t("contact.info.address")}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-primary" />
                <a
                  href={`tel:${t("contact.info.phoneMobile")}`}
                  className="text-[15.5px] leading-relaxed text-foreground hover:text-primary"
                >
                  {t("contact.info.phoneMobile")}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-primary" />
                <a
                  href={`mailto:${t("contact.info.emailGeneral")}`}
                  className="text-[15.5px] leading-relaxed text-foreground hover:text-primary"
                >
                  {t("contact.info.emailGeneral")}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-[15.5px] leading-relaxed text-foreground">
                  {t("contact.info.hours")}
                </span>
              </li>
            </ul>
            <img
              src={contactImg}
              alt=""
              loading="lazy"
              className="mt-10 aspect-[16/10] w-full object-cover"
            />
          </div>

          <div className="md:col-span-7">
            {submitted ? (
              <div className="border-y border-border py-16 text-center">
                <h3 className="font-display text-2xl font-medium text-foreground md:text-3xl">
                  Thank you.
                </h3>
                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {t("contact.form.thankYou")}
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <Field label={t("contact.form.fullName")} value={form.fullName} onChange={(v) => update("fullName", v)} />
                  <Field label={t("contact.form.email")} type="email" value={form.email} onChange={(v) => update("email", v)} />
                  <Field label={t("contact.form.company")} value={form.company} onChange={(v) => update("company", v)} />
                  <Field label={t("contact.form.phone")} value={form.phone} onChange={(v) => update("phone", v)} />
                </div>
                <div>
                  <label className="eyebrow mb-2 block">{t("contact.form.service")}</label>
                  <Select value={form.service} onValueChange={(v) => update("service", v)}>
                    <SelectTrigger className="h-12 w-full rounded-md border border-border bg-card px-3 text-[15px] text-foreground">
                      <SelectValue placeholder="—" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover text-popover-foreground">
                      {serviceOptions.map((o) => (
                        <SelectItem key={o} value={o}>
                          {o}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="eyebrow mb-2 block">{t("contact.form.message")}</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    rows={5}
                    className="w-full resize-none border-b border-border bg-transparent py-3 text-[15px] text-foreground outline-none focus:border-primary"
                  />
                </div>
                <button
                  type="button"
                  disabled={!canSubmit}
                  onClick={() => setSubmitted(true)}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground hover:bg-[var(--brand-primary-hover)] disabled:opacity-50"
                >
                  {t("contact.form.submit")}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <iframe
          title="AGILE Office"
          src="https://www.google.com/maps?q=1682%20Avenue%20De%20Gaulle%20Bonanjo%20Douala&output=embed"
          className="h-[420px] w-full border-0 grayscale"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </AppLayout>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label className="eyebrow mb-2 block">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border-b border-border bg-transparent py-3 text-[15px] text-foreground outline-none focus:border-primary"
      />
    </div>
  );
}
