import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christophe Dubuisson — EdTech Product Designer",
  description: "Portfolio of Christophe Dubuisson: pedagogy, language and EdTech product design.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
