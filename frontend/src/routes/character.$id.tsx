import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, RotateCw, ShieldAlert, Bookmark } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  characters,
  getCharacter,
  arcs as allArcs,
  type Character,
} from "@/data/characters";

// Form labels adapted to each classification — not every character literally has a "devil form".
function getFormLabels(c: Character) {
  switch (c.classification) {
    case "HYBRID":
      // Human host ↔ devil hybrid transformation (Denji, Reze, Katana Man)
      return {
        a: "HUMAN FORM",
        b: "HYBRID FORM",
        switchTo: (showingB: boolean) =>
          showingB ? "VIEW HUMAN" : "VIEW HYBRID",
      };
    case "FIEND":
      // Devil possessing a human corpse (Power) — calm vs. unleashed
      return {
        a: "HOST FORM",
        b: "DEVIL UNLEASHED",
        switchTo: (showingB: boolean) =>
          showingB ? "VIEW HOST" : "VIEW DEVIL",
      };
    case "CONTRACTOR":
      // Pure human who summons devil powers via contract (Aki, Himeno, Arai, Akane)
      return {
        a: "HUMAN FORM",
        b: "CONTRACT INVOKED",
        switchTo: (showingB: boolean) =>
          showingB ? "VIEW HUMAN" : "INVOKE CONTRACT",
      };
    case "PUBLIC SAFETY":
      // Pure humans, no contract (Kobeni, Kishibe) — show idle vs. combat stance
      return {
        a: "FILE PORTRAIT",
        b: "FIELD STANCE",
        switchTo: (showingB: boolean) =>
          showingB ? "VIEW PORTRAIT" : "VIEW FIELD",
      };
    case "DEVIL":
    default:
      // True devils — manifest form vs. true / unleashed form
      return {
        a: "MANIFEST FORM",
        b: "TRUE FORM",
        switchTo: (showingB: boolean) =>
          showingB ? "VIEW MANIFEST" : "VIEW TRUE FORM",
      };
  }
}

export const Route = createFileRoute("/character/$id")({
  head: ({ params }) => {
    const c = getCharacter(params.id);
    const title = c
      ? `${c.name} — Classified File // Chainsaw Archive`
      : "Classified File";
    const desc = c?.summary.slice(0, 150) ?? "Classified devil hunter dossier.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:image", content: c?.image },
      ],
    };
  },
  component: CharacterPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <p className="font-mono text-blood">FILE NOT FOUND</p>
        <Link
          to="/"
          className="mt-4 inline-block border border-blood px-4 py-2 font-mono text-xs uppercase tracking-widest text-blood hover:bg-blood hover:text-primary-foreground"
        >
          Return to Archive
        </Link>
      </div>
    </div>
  ),
});

function CharacterPage() {
  const { id } = Route.useParams();
  const router = useRouter();
  const c = getCharacter(id);
  const [devilForm, setDevilForm] = useState(false);
  const formLabels = c ? getFormLabels(c) : null;

  if (!c) return null;

  return (
    <div className="relative min-h-screen bg-background scanlines noise">
      <div className="scan-line" />
      <SiteHeader />

      <div className="mx-auto max-w-7xl px-6 py-6">
        <button
          onClick={() => router.history.back()}
          className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-blood"
        >
          <ArrowLeft className="h-3 w-3" /> Back to Archive
        </button>
      </div>

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-6 pb-12">
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
          <div className="relative corner-frame">
            <div className="relative aspect-[3/4] overflow-hidden border border-border bg-gradient-to-b from-secondary/40 to-background">
              <img
                src={devilForm ? c.devilImage : c.image}
                alt={c.name}
                width={768}
                height={1024}
                className="h-full w-full object-contain p-4 transition-all duration-700 animate-fade-in"
                style={{
                  filter: devilForm
                    ? "contrast(1.15) saturate(1.3) drop-shadow(0 0 20px var(--blood-glow))"
                    : "grayscale(0.2)",
                }}
                key={String(devilForm)}
              />
              <div className="pointer-events-none absolute inset-0 scanlines opacity-30" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/40" />
              <div className="absolute left-4 top-4 font-mono text-[10px] tracking-[0.3em] text-blood">
                {c.codename} // {devilForm ? formLabels!.b : formLabels!.a}
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                <span>SCAN: {Math.floor(Math.random() * 9999)}.A</span>
                <span className="text-blood flicker">● REC</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="classified-stamp text-[10px]">CLASSIFIED</span>
                <span className="border border-border bg-card px-2 py-1 font-mono text-[9px] tracking-[0.25em] text-muted-foreground">
                  {c.classification}
                </span>
                <span className="border border-blood bg-blood/10 px-2 py-1 font-mono text-[9px] tracking-[0.25em] text-blood">
                  RANK-{c.rank}
                </span>
              </div>
              <h1
                className="glitch font-display text-6xl leading-none tracking-wider text-foreground md:text-8xl"
                data-text={c.name}
              >
                {c.name}
              </h1>
              <p className="mt-2 font-mono text-[11px] tracking-[0.3em] text-muted-foreground">
                STATUS: <span className="text-blood">{c.status}</span>
              </p>

              <div className="mt-8">
                <div className="mb-2 flex justify-between font-mono text-[10px] uppercase tracking-[0.3em]">
                  <span className="text-muted-foreground">Danger Meter</span>
                  <span className="text-blood">{c.danger} / 100</span>
                </div>
                <div className="h-2 w-full border border-border bg-secondary">
                  <div
                    className="h-full bg-blood pulse-blood"
                    style={{ width: `${c.danger}%` }}
                  />
                </div>
              </div>

              <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {c.summary}
              </p>
            </div>

            <button
              onClick={() => setDevilForm((v) => !v)}
              className="mt-8 group flex w-fit items-center gap-3 border-2 border-blood bg-blood/10 px-6 py-3 font-display tracking-[0.2em] text-blood transition-all hover:bg-blood hover:text-primary-foreground"
            >
              <RotateCw className="h-4 w-4 transition-transform group-hover:rotate-180" />
              SWITCH FORM // {formLabels!.switchTo(devilForm)}
            </button>
          </div>
        </div>
      </section>

      {/* INFO GRID */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-4 md:grid-cols-3">
          <InfoPanel label="ABILITIES" code="A.01">
            <ul className="space-y-2">
              {c.abilities.map((a) => (
                <li
                  key={a}
                  className="flex gap-2 font-mono text-xs text-foreground"
                >
                  <span className="text-blood">▸</span> {a}
                </li>
              ))}
            </ul>
          </InfoPanel>
          <InfoPanel label="CONTRACT / ORIGIN" code="C.02">
            <p className="font-mono text-xs leading-relaxed text-foreground">
              {c.contract}
            </p>
            <p className="mt-3 font-mono text-[11px] leading-relaxed text-muted-foreground">
              <span className="text-blood">FEAR ORIGIN: </span>
              {c.fearOrigin}
            </p>
          </InfoPanel>
          <InfoPanel label="DANGER CLASSIFICATION" code="D.03">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-7xl leading-none text-blood">
                {c.rank}
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                CLASS
              </span>
            </div>
            <p className="mt-3 font-mono text-xs text-foreground">
              {c.devilForm}
            </p>
          </InfoPanel>
        </div>
      </section>

      {/* KEY MOMENTS */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <SectionTitle code="K.04">KEY OPERATIONAL MOMENTS</SectionTitle>
        <ol className="grid gap-3 md:grid-cols-2">
          {c.keyMoments.map((m, i) => (
            <li key={i} className="flex gap-4 border border-border bg-card p-4">
              <span className="font-display text-3xl leading-none text-blood">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-xs leading-relaxed text-foreground">
                {m}
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* ARC INVOLVEMENT */}
      {c.arcs.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <SectionTitle code="A.05">ARC INVOLVEMENT</SectionTitle>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {c.arcs
              .map((id) => allArcs.find((a) => a.id === id))
              .filter(Boolean)
              .map((a) => (
                <Link
                  key={a!.id}
                  to="/arcs"
                  className="group block border border-border bg-card p-4 hover:border-blood"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                      ARC {a!.number}
                    </span>
                    <Bookmark className="h-3 w-3 text-blood" />
                  </div>
                  <div className="mt-2 font-display text-lg tracking-[0.1em] text-foreground group-hover:text-blood">
                    {a!.title}
                  </div>
                  <p className="mt-1 font-mono text-[10px] italic text-muted-foreground">
                    {a!.tone}
                  </p>
                </Link>
              ))}
          </div>
        </section>
      )}

      {/* RELATIONS */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <SectionTitle code="R.06">RELATIONSHIP NETWORK</SectionTitle>
        <RelationGraph centerId={c.id} />
      </section>

      {/* CASE LOG */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <SectionTitle code="L.07">CASE FILE LOG</SectionTitle>
        <div className="relative border border-border bg-card p-8">
          <div className="absolute right-6 top-6 classified-stamp text-[10px]">
            TOP SECRET
          </div>
          <div className="absolute left-6 top-6 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
            FILE {c.codename} // ENTRY 0451
          </div>

          <div className="mt-12 space-y-4 font-mono text-sm leading-relaxed text-foreground">
            <p>{c.caseLog}</p>
            <p>
              Operative interrogation transcripts redacted on order of{" "}
              <span className="redacted">DIRECTOR MAKIMA</span>.
              Cross-divisional cooperation with{" "}
              <span className="redacted">FOREIGN AGENCY</span> remains under
              review. Subject's psychological volatility index measured at{" "}
              <span className="redacted">9.4</span> on the standard PSDH scale.
            </p>
            <p>
              <span className="redacted">FIELD AGENT TESTIMONY</span>: "I have
              never seen anything move like that. The screams—" [TRANSCRIPT
              TERMINATED]
            </p>
          </div>

          <div className="mt-8 flex items-center gap-3 border-t border-border pt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <ShieldAlert className="h-3 w-3 text-blood" />
            HANDLING NOTICE: VIEWING THIS FILE WITHOUT CLEARANCE IS A FEDERAL
            OFFENSE.
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function SectionTitle({
  children,
  code,
}: {
  children: React.ReactNode;
  code: string;
}) {
  return (
    <div className="mb-6 flex items-end justify-between border-b border-border pb-3">
      <h2 className="font-display text-3xl tracking-[0.15em] text-foreground">
        {children}
      </h2>
      <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
        SECTION {code}
      </span>
    </div>
  );
}

function InfoPanel({
  label,
  code,
  children,
}: {
  label: string;
  code: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative border border-border bg-card p-6 transition-colors hover:border-blood">
      <div className="mb-4 flex items-center justify-between border-b border-border pb-2">
        <span className="font-display text-sm tracking-[0.25em] text-blood">
          {label}
        </span>
        <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground">
          {code}
        </span>
      </div>
      {children}
    </div>
  );
}

function RelationGraph({ centerId }: { centerId: string }) {
  const center = getCharacter(centerId)!;
  const others = characters.filter((c) => c.id !== centerId);
  const radius = 180;
  const colorMap: Record<string, string> = {
    ALLY: "oklch(0.7 0.15 150)",
    ENEMY: "var(--blood)",
    CONTRACT: "oklch(0.78 0.18 80)",
    MANIPULATION: "oklch(0.6 0.2 300)",
  };

  return (
    <div className="relative mx-auto h-[480px] w-full max-w-3xl border border-border bg-card grid-bg">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 480">
        {others.map((o, i) => {
          const angle = (i / others.length) * Math.PI * 2 - Math.PI / 2;
          const x = 300 + Math.cos(angle) * radius;
          const y = 240 + Math.sin(angle) * radius;
          const rel = center.relations.find((r) => r.id === o.id);
          const color = rel ? colorMap[rel.type] : "var(--border)";
          return (
            <line
              key={o.id}
              x1={300}
              y1={240}
              x2={x}
              y2={y}
              stroke={color}
              strokeWidth={1}
              strokeDasharray="3 3"
              opacity={0.7}
            />
          );
        })}
      </svg>

      {/* center node */}
      <Node x="50%" y="50%" name={center.name} code={center.codename} active />
      {others.map((o, i) => {
        const angle = (i / others.length) * Math.PI * 2 - Math.PI / 2;
        const x = 50 + (Math.cos(angle) * radius * 100) / 600;
        const y = 50 + (Math.sin(angle) * radius * 100) / 480;
        const rel = center.relations.find((r) => r.id === o.id);
        return (
          <Node
            key={o.id}
            x={`${x}%`}
            y={`${y}%`}
            name={o.name}
            code={o.codename}
            type={rel?.type}
            toId={o.id}
          />
        );
      })}
    </div>
  );
}

function Node({
  x,
  y,
  name,
  code,
  type,
  active,
  toId,
}: {
  x: string;
  y: string;
  name: string;
  code: string;
  type?: string;
  active?: boolean;
  toId?: string;
}) {
  const inner = (
    <div
      className={`group relative -translate-x-1/2 -translate-y-1/2 ${active ? "" : "cursor-pointer"}`}
      style={{ position: "absolute", left: x, top: y }}
    >
      <div
        className={`flex h-16 w-16 items-center justify-center border-2 ${
          active
            ? "border-blood bg-blood/30 pulse-blood"
            : "border-border bg-card hover:border-blood"
        } transition-all`}
      >
        <span className="font-display text-xs tracking-widest text-foreground">
          {code.split("-")[1]}
        </span>
      </div>
      <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-center">
        <div className="font-display text-xs tracking-widest text-foreground">
          {name}
        </div>
        {type && (
          <div className="font-mono text-[9px] tracking-[0.2em] text-blood opacity-0 transition-opacity group-hover:opacity-100">
            {type}
          </div>
        )}
      </div>
    </div>
  );
  if (toId)
    return (
      <Link to="/character/$id" params={{ id: toId }}>
        {inner}
      </Link>
    );
  return inner;
}
