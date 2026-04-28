import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldAlert, Skull, Users, FileLock2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CharacterCard } from "@/components/CharacterCard";
import { characters } from "@/data/characters";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CHAINSAW ARCHIVE — Public Safety Devil Database" },
      {
        name: "description",
        content:
          "Classified Public Safety records of Devils, Hybrids, and Contractors. Restricted access archive.",
      },
      { property: "og:title", content: "CHAINSAW ARCHIVE — Classified Devil Database" },
      { property: "og:description", content: "Access classified records of Devils, Hybrids, and Contractors." },
      { property: "og:image", content: heroBg },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background scanlines noise">
      <div className="scan-line" />
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt=""
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_0%,var(--background)_85%)]" />
          <div className="absolute inset-0 grid-bg opacity-20 mix-blend-overlay" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,transparent_70%,color-mix(in_oklab,var(--blood)_30%,transparent)_100%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-blood" />
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-blood">
              FILE 0451 // ACCESS RESTRICTED
            </span>
          </div>

          <h1
            className="glitch font-display text-5xl leading-[0.9] tracking-tight text-foreground md:text-8xl lg:text-[8.5rem]"
            data-text="PUBLIC SAFETY DEVIL DATABASE"
          >
            PUBLIC SAFETY<br />
            <span className="text-blood">DEVIL</span> DATABASE
          </h1>

          <p className="mt-8 max-w-xl font-mono text-sm leading-relaxed text-muted-foreground md:text-base">
            Access classified records of <span className="text-foreground">Devils</span>,{" "}
            <span className="text-foreground">Hybrids</span>, and{" "}
            <span className="text-foreground">Contractors</span>. All entries monitored. Unauthorized
            cross-reference is a federal offense.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/character/$id"
              params={{ id: "ch-001" }}
              className="group flex items-center gap-3 border-2 border-blood bg-blood px-7 py-4 font-display tracking-[0.2em] text-primary-foreground transition-all hover:bg-blood-glow"
              style={{ boxShadow: "0 0 30px -5px var(--blood)" }}
            >
              ENTER ARCHIVE
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/timeline"
              className="flex items-center gap-3 border-2 border-border bg-background/40 px-7 py-4 font-display tracking-[0.2em] text-foreground transition-all hover:border-blood hover:text-blood"
            >
              VIEW TIMELINE
            </Link>
          </div>

          <div className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-6">
            <Stat label="DEVILS LOGGED" value="1,247" />
            <Stat label="HYBRIDS ACTIVE" value="03" />
            <Stat label="THREATS PENDING" value="∞" pulse />
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader code="C.01" subtitle="CLASSIFICATION TIERS">
          ARCHIVE CATEGORIES
        </SectionHeader>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <CategoryCard icon={ShieldAlert} title="Public Safety" code="PSD" count="142" desc="Government devil hunters and field operatives." />
          <CategoryCard icon={Skull} title="Devils" code="DVL" count="1,247" desc="Catalogued manifestations of human fear." />
          <CategoryCard icon={Users} title="Hybrids" code="HYB" count="03" desc="Human hosts fused with devil consciousness." />
          <CategoryCard icon={FileLock2} title="Contractors" code="CTR" count="089" desc="Subjects bound by devil pact agreements." />
        </div>
      </section>

      {/* CHARACTERS */}
      <section id="characters" className="mx-auto max-w-7xl px-6 pb-24">
        <SectionHeader code="F.02" subtitle="HIGH-PRIORITY DOSSIERS">
          FEATURED CHARACTERS
        </SectionHeader>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {characters.map((c) => (
            <CharacterCard key={c.id} c={c} />
          ))}
        </div>
      </section>

      {/* LORE / CLASSIFIED PANEL */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <SectionHeader code="L.03" subtitle="DECLASSIFIED EXCERPT">
          THE FEAR SYSTEM
        </SectionHeader>
        <div className="relative border border-border bg-card p-8 md:p-12">
          <div className="absolute right-8 top-8 classified-stamp text-[11px]">DECLASSIFIED</div>
          <div className="absolute left-8 top-8 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
            DOC: 0451-OMEGA // CLEARANCE β
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="space-y-4 font-mono text-sm leading-relaxed text-foreground">
              <p>
                Devils are the manifestation of <span className="text-blood">human fear</span>. Their
                strength is proportional to how widely their concept is feared. The{" "}
                <span className="redacted">GUN DEVIL</span> remains the most lethal recorded entity, capable
                of <span className="redacted">millions of casualties</span> in mere seconds.
              </p>
              <p>
                Upon death in the human world, devils reincarnate in <span className="redacted">HELL</span>.
                Upon death in hell, they return to Earth. This cycle is{" "}
                <span className="redacted">unbreakable</span>, with one known exception.
              </p>
            </div>
            <div className="space-y-4 font-mono text-sm leading-relaxed text-muted-foreground">
              <p>
                Contractors trade fragments of their humanity — years of life, organs, sensation — for
                temporary devil power. Hybrids represent a different category entirely:{" "}
                <span className="text-blood">cohabitation</span> rather than payment.
              </p>
              <p>
                The <span className="text-foreground">CHAINSAW DEVIL</span> is theorized to possess the rare
                ability to <span className="text-blood">erase devils from existence by consumption</span>,
                eliminating their concept from human memory.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
              END EXCERPT // PAGE 1 OF [REDACTED]
            </div>
            <Link
              to="/themes"
              className="group flex items-center gap-2 border border-blood px-5 py-3 font-display tracking-[0.2em] text-blood transition-all hover:bg-blood hover:text-primary-foreground"
            >
              VIEW FULL CLASSIFICATION SYSTEM
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* DIRECTORY LINKS */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <SectionHeader code="D.04" subtitle="DEEPER ACCESS">
          ARCHIVE DIRECTORIES
        </SectionHeader>
        <div className="grid gap-4 md:grid-cols-3">
          <DirectoryLink to="/timeline" code="T.00" title="INCIDENT TIMELINE" desc="Chronological log of all six Division 4 arcs." />
          <DirectoryLink to="/arcs" code="A.00" title="CASE FILES" desc="Detailed mission briefs per arc, redacted operatives." />
          <DirectoryLink to="/themes" code="Θ.00" title="DOCTRINE" desc="Behavioral analysis of fear, control, and identity." />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Stat({ label, value, pulse }: { label: string; value: string; pulse?: boolean }) {
  return (
    <div>
      <div className={`font-display text-3xl tracking-wider ${pulse ? "text-blood flicker" : "text-foreground"}`}>
        {value}
      </div>
      <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">{label}</div>
    </div>
  );
}

function SectionHeader({ children, code, subtitle }: { children: React.ReactNode; code: string; subtitle: string }) {
  return (
    <div className="mb-10 flex items-end justify-between border-b border-border pb-4">
      <div>
        <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.4em] text-blood">{subtitle}</div>
        <h2 className="font-display text-4xl tracking-[0.1em] text-foreground md:text-5xl">{children}</h2>
      </div>
      <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">SECTION {code}</span>
    </div>
  );
}

function CategoryCard({
  icon: Icon, title, code, count, desc,
}: { icon: typeof ShieldAlert; title: string; code: string; count: string; desc: string }) {
  return (
    <div className="group relative cursor-pointer overflow-hidden border border-border bg-card p-6 transition-all hover:border-blood">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blood/0 transition-all duration-500 group-hover:to-blood/20" />
      <div className="relative">
        <div className="mb-6 flex items-start justify-between">
          <Icon className="h-8 w-8 text-blood transition-transform duration-500 group-hover:scale-110" />
          <span className="font-mono text-[9px] tracking-[0.3em] text-muted-foreground">{code}</span>
        </div>
        <h3
          className="glitch font-display text-2xl tracking-[0.1em] text-foreground"
          data-text={title}
        >
          {title}
        </h3>
        <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">{desc}</p>
        <div className="mt-6 flex items-center justify-between border-t border-border pt-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">RECORDS</span>
          <span className="font-display text-xl tracking-wider text-blood">{count}</span>
        </div>
      </div>
    </div>
  );
}

function DirectoryLink({
  to, code, title, desc,
}: { to: "/timeline" | "/arcs" | "/themes"; code: string; title: string; desc: string }) {
  return (
    <Link
      to={to}
      className="group relative block overflow-hidden border border-border bg-card p-6 transition-all hover:border-blood"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blood/0 transition-all duration-500 group-hover:to-blood/20" />
      <div className="relative">
        <div className="mb-6 flex items-start justify-between">
          <ArrowRight className="h-6 w-6 text-blood transition-transform group-hover:translate-x-1" />
          <span className="font-mono text-[9px] tracking-[0.3em] text-muted-foreground">{code}</span>
        </div>
        <h3 className="glitch font-display text-2xl tracking-[0.1em] text-foreground" data-text={title}>
          {title}
        </h3>
        <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">{desc}</p>
      </div>
    </Link>
  );
}
