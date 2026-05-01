import { createFileRoute } from "@tanstack/react-router";
import { Heart, Eye, Users, Target, Skull } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/themes")({
  head: () => ({
    meta: [
      { title: "CORE THEMES — Chainsaw Archive Doctrine" },
      {
        name: "description",
        content:
          "Doctrinal analysis of love vs control, freedom vs manipulation, and identity loss across the Chainsaw Man case files.",
      },
      { property: "og:title", content: "CORE THEMES — Doctrinal Analysis" },
      {
        property: "og:description",
        content:
          "Government-style breakdown of the core themes of Chainsaw Man.",
      },
    ],
  }),
  component: ThemesPage,
});

const themes: {
  icon: LucideIcon;
  code: string;
  title: string;
  subtitle: string;
  body: string;
  quote: string;
}[] = [
  {
    icon: Heart,
    code: "Θ.01",
    title: "LOVE vs MANIPULATION",
    subtitle: "Affection as a weaponized vector.",
    body: "Every emotional bond formed by subject CSM-01 was engineered, observed, or terminated by the DIRECTOR. Romantic affection (REZE) and parental affection (MAKIMA) are confirmed as primary control vectors. Genuine love and weaponized love are operationally indistinguishable to the subject.",
    quote: "“She told me she'd give me a normal life if I obeyed.”",
  },
  {
    icon: Target,
    code: "Θ.02",
    title: "FREEDOM vs CONTROL",
    subtitle: "Liberation requires devastation.",
    body: "The Control Devil's domain expands proportionally with bureaucratic structure. Public Safety, foreign agencies, and devil contracts function as nested cages. Subject's emancipation occurred only after total collapse of his support network — confirming the inverse correlation between safety and freedom.",
    quote: "“The fear of being ruled is older than fear of death.”",
  },
  {
    icon: Users,
    code: "Θ.03",
    title: "FAMILY THROUGH TRAUMA",
    subtitle: "Bonds forged at the threshold of survival.",
    body: "Operatives DENJI, AKI, and POWER formed a unit not by recruitment but by mutual disposability. Cohabitation was mandated by the DIRECTOR for monitoring purposes. The bond persisted regardless. Recommend further study on emergent kinship under engineered duress.",
    quote: "“I never had a family. So I didn't know what I was losing.”",
  },
  {
    icon: Eye,
    code: "Θ.04",
    title: "STATE WEAPONIZATION OF FEAR",
    subtitle: "Devils as instruments of policy.",
    body: "Devils scale with collective human fear. Governments — including ours — are confirmed cultivators of fear concepts (GUN, NUCLEAR, WAR, CONTROL) for strategic devil acquisition. The Public Safety Division is not protection. It is procurement.",
    quote: "“Every Devil is a weapon waiting for a flag.”",
  },
  {
    icon: Skull,
    code: "Θ.05",
    title: "IDENTITY LOSS // HUMAN vs DEVIL",
    subtitle: "Where does the host end?",
    body: "Hybrids retain human cognition with devil instinct. Fiends invert this ratio. The line is not biological — it is narrative. AKI HAYAKAWA was reclassified from operative to threat the instant the Gun Devil overwrote his name. A name is the only firewall.",
    quote: "“He wasn't Aki anymore. He was just the gun.”",
  },
];

function ThemesPage() {
  return (
    <div className="relative min-h-screen bg-background scanlines noise">
      <div className="scan-line" />
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-blood" />
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-blood sm:text-[10px] sm:tracking-[0.4em]">
            DOCTRINE Θ.00 // BEHAVIORAL ANALYSIS
          </span>
        </div>
        <h1
          className="glitch font-display text-4xl tracking-tight text-foreground sm:text-5xl md:text-7xl"
          data-text="CORE THEMES"
        >
          CORE <span className="text-blood">THEMES</span>
        </h1>
        <p className="mt-6 max-w-2xl font-mono text-xs leading-relaxed text-muted-foreground sm:text-sm">
          Internal doctrinal analysis. Five operative themes recur across all
          case files. This document is for analyst eyes only and may not be
          cross-referenced with field operatives.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-24">
        <div className="grid gap-4 md:grid-cols-2">
          {themes.map((t) => (
            <article
              key={t.code}
              className="group relative overflow-hidden border border-border bg-card p-6 transition-all hover:border-blood sm:p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blood/0 transition-all duration-500 group-hover:to-blood/15" />
              <div className="relative">
                <div className="mb-4 flex items-start justify-between">
                  <t.icon className="h-7 w-7 text-blood" />
                  <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                    {t.code}
                  </span>
                </div>
                <h2
                  className="glitch font-display text-2xl tracking-[0.1em] text-foreground"
                  data-text={t.title}
                >
                  {t.title}
                </h2>
                <p className="mt-1 font-mono text-[11px] italic text-muted-foreground">
                  {t.subtitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-foreground">
                  {t.body}
                </p>
                <blockquote className="mt-6 border-l-2 border-blood pl-4 font-mono text-xs italic text-blood">
                  {t.quote}
                </blockquote>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 border border-border bg-card p-6 text-center sm:p-8">
          <div className="classified-stamp text-[10px]">EYES ONLY</div>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            Distribution restricted to clearance Ω. Unauthorized reproduction
            grounds for <span className="redacted">PERMANENT REASSIGNMENT</span>
            .
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
