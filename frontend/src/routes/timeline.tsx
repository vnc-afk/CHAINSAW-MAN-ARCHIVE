import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { arcs, characters } from "@/data/characters";
import timelineBg from "@/assets/timeline-bg.jpg";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "TIMELINE — Chainsaw Archive // Public Safety" },
      {
        name: "description",
        content:
          "Chronological archive of all Public Safety Division 4 incidents. From recruitment to the Control Devil reveal.",
      },
      {
        property: "og:title",
        content: "TIMELINE — Public Safety Incident Log",
      },
      {
        property: "og:description",
        content:
          "Arc-by-arc classified incident log of Chainsaw Man and Division 4.",
      },
      { property: "og:image", content: timelineBg },
    ],
  }),
  component: TimelinePage,
});

function TimelinePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background scanlines noise">
      <div className="scan-line" />
      <SiteHeader />

      {/* HERO */}
      <section className="relative border-b border-border">
        <div className="absolute inset-0">
          <img
            src={timelineBg}
            alt=""
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
          <div className="absolute inset-0 grid-bg opacity-20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:py-28">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-blood" />
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-blood sm:text-[10px] sm:tracking-[0.4em]">
              FILE T.00 // CHRONOLOGICAL LOG
            </span>
          </div>
          <h1
            className="glitch font-display text-4xl leading-[0.95] tracking-tight text-foreground sm:text-5xl md:text-7xl"
            data-text="INCIDENT TIMELINE"
          >
            INCIDENT <span className="text-blood">TIMELINE</span>
          </h1>
          <p className="mt-6 max-w-2xl font-mono text-xs leading-relaxed text-muted-foreground sm:text-sm">
            Sequential reconstruction of Division 4 events. Six arcs. Two ranks
            lost. One devil consumed. The
            <span className="text-blood"> Control Devil cycle </span>
            documented in full.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="relative">
          {/* spine */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2" />
          <div className="space-y-16">
            {arcs.map((arc, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={arc.id}
                  className="relative md:grid md:grid-cols-2 md:gap-12"
                >
                  {/* node */}
                  <div className="absolute left-6 top-2 -translate-x-1/2 md:left-1/2">
                    <div className="relative h-4 w-4 border-2 border-blood bg-background pulse-blood" />
                  </div>

                  <div
                    className={`pl-16 md:pl-0 ${
                      left
                        ? "md:col-start-1 md:pr-12 md:text-right"
                        : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <div className="mb-2 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                      ARC {arc.number} // {arc.era}
                    </div>
                    <h2
                      className="glitch font-display text-2xl tracking-[0.1em] text-foreground md:text-3xl"
                      data-text={arc.title}
                    >
                      {arc.title}
                    </h2>
                    <div
                      className={`mt-2 flex items-center gap-2 ${left ? "md:justify-end" : ""}`}
                    >
                      <span className="border border-blood bg-blood/10 px-2 py-1 font-mono text-[9px] tracking-[0.25em] text-blood">
                        THREAT {arc.threat}
                      </span>
                      <span className="border border-border bg-card px-2 py-1 font-mono text-[9px] tracking-[0.25em] text-muted-foreground">
                        {arc.status}
                      </span>
                    </div>
                    <p className="mt-4 font-mono text-xs italic leading-relaxed text-muted-foreground">
                      {arc.tone}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground">
                      {arc.summary}
                    </p>

                    <div
                      className={`mt-4 flex flex-wrap gap-2 ${left ? "md:justify-end" : ""}`}
                    >
                      {arc.characters.map((cid) => {
                        const c = characters.find((x) => x.id === cid);
                        if (!c) return null;
                        return (
                          <Link
                            key={cid}
                            to="/character/$id"
                            params={{ id: cid }}
                            className="border border-border bg-card px-2 py-1 font-mono text-[9px] tracking-[0.2em] text-muted-foreground hover:border-blood hover:text-blood"
                          >
                            {c.codename}
                          </Link>
                        );
                      })}
                    </div>

                    <Link
                      to="/arcs"
                      className={`mt-4 inline-block font-mono text-[10px] uppercase tracking-[0.3em] text-blood hover:underline`}
                    >
                      → Open Case File
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 border border-border bg-card p-6 text-center">
          <div className="classified-stamp text-[10px]">
            END OF KNOWN RECORD
          </div>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            Subsequent incidents pending. Subject CSM-01 status:{" "}
            <span className="text-blood">ACTIVE</span>.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
