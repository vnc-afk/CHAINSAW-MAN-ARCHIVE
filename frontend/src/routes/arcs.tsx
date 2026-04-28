import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldAlert } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { arcs, characters } from "@/data/characters";

export const Route = createFileRoute("/arcs")({
  head: () => ({
    meta: [
      { title: "CASE FILES — Chainsaw Archive Story Arcs" },
      {
        name: "description",
        content:
          "Classified case files for every Division 4 story arc — Bat Devil through the Control Devil reveal.",
      },
      { property: "og:title", content: "CASE FILES — Story Arc Archive" },
      {
        property: "og:description",
        content: "Redacted mission briefs for each Public Safety Division 4 arc.",
      },
    ],
  }),
  component: ArcsPage,
});

function ArcsPage() {
  return (
    <div className="relative min-h-screen bg-background scanlines noise">
      <div className="scan-line" />
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-center gap-3">
          <span className="h-px w-10 bg-blood" />
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-blood">
            DIRECTORY A.00 // CASE FILES
          </span>
        </div>
        <h1
          className="glitch font-display text-5xl tracking-tight text-foreground md:text-7xl"
          data-text="STORY ARCS"
        >
          CASE <span className="text-blood">FILES</span>
        </h1>
        <p className="mt-6 max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground">
          Six classified mission briefs documenting Division 4 operations. Each entry contains operative
          rosters, key incident logs, and threat reassessments. Cross-reference at your own risk.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="space-y-6">
          {arcs.map((arc) => (
            <article
              key={arc.id}
              className="group relative border border-border bg-card p-6 transition-all hover:border-blood md:p-8"
            >
              <div className="absolute right-6 top-6 classified-stamp text-[9px]">
                {arc.status === "REDACTED" ? "REDACTED" : "DECLASSIFIED"}
              </div>

              <div className="grid gap-6 md:grid-cols-[160px_1fr]">
                <div className="border-r-0 md:border-r md:border-border md:pr-6">
                  <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">ARC</div>
                  <div className="font-display text-7xl leading-none text-blood">{arc.number}</div>
                  <div className="mt-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                    THREAT
                  </div>
                  <div className="mt-1 h-1 w-full bg-secondary">
                    <div
                      className="h-full bg-blood"
                      style={{ width: `${arc.threat}%`, boxShadow: "0 0 10px var(--blood-glow)" }}
                    />
                  </div>
                  <div className="mt-1 font-mono text-[10px] text-blood">{arc.threat}/100</div>
                </div>

                <div>
                  <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                    {arc.era}
                  </div>
                  <h2
                    className="mt-1 glitch font-display text-2xl tracking-[0.1em] text-foreground md:text-3xl"
                    data-text={arc.title}
                  >
                    {arc.title}
                  </h2>
                  <p className="mt-2 font-mono text-xs italic text-muted-foreground">{arc.tone}</p>
                  <p className="mt-4 text-sm leading-relaxed text-foreground">{arc.summary}</p>

                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div>
                      <div className="mb-2 font-mono text-[10px] tracking-[0.3em] text-blood">
                        KEY INCIDENTS
                      </div>
                      <ul className="space-y-2">
                        {arc.keyEvents.map((e, i) => (
                          <li key={i} className="flex gap-2 font-mono text-xs leading-relaxed text-foreground">
                            <span className="text-blood">▸</span> {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="mb-2 font-mono text-[10px] tracking-[0.3em] text-blood">
                        OPERATIVES INVOLVED
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {arc.characters.map((cid) => {
                          const c = characters.find((x) => x.id === cid);
                          if (!c) return null;
                          return (
                            <Link
                              key={cid}
                              to="/character/$id"
                              params={{ id: cid }}
                              className="border border-border bg-background px-2 py-1 font-mono text-[10px] tracking-[0.2em] text-foreground hover:border-blood hover:text-blood"
                            >
                              {c.codename} · {c.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-2 border-t border-border pt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    <ShieldAlert className="h-3 w-3 text-blood" />
                    File ID {arc.id.toUpperCase()} // Clearance β required
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
