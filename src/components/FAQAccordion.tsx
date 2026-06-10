import { Plus } from "lucide-react";

export type FAQItem = { q: string; a: string };

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((it, i) => (
        <details
          key={i}
          className="group [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left">
            <span className="font-display text-base font-medium text-foreground md:text-lg">
              {it.q}
            </span>
            <Plus
              size={20}
              className="mt-1 shrink-0 text-primary transition-transform group-open:rotate-45"
            />
          </summary>
          <p className="pb-6 pr-10 text-[15px] leading-relaxed text-muted-foreground">{it.a}</p>
        </details>
      ))}
    </div>
  );
}
