import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function AppLayout({
  children,
  overlayHeader = false,
}: {
  children: ReactNode;
  overlayHeader?: boolean;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header overlay={overlayHeader} />
      <main className={"flex-1 " + (overlayHeader ? "" : "pt-20 md:pt-20")}>{children}</main>
      <Footer />
    </div>
  );
}
