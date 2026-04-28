import { Link } from "@tanstack/react-router";
import type { Character } from "@/data/characters";

export function CharacterCard({ c }: { c: Character }) {
  return (
    <Link
      to="/character/$id"
      params={{ id: c.id }}
      className="group relative block w-full overflow-hidden border border-border bg-card transition-all hover:border-blood"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-b from-secondary/40 to-background">
        {/* Normal form */}
        <img
          src={c.image}
          alt={c.name}
          loading="lazy"
          width={768}
          height={1024}
          className="absolute inset-0 h-full w-full object-contain p-2 grayscale transition-all duration-500 group-hover:opacity-0 group-hover:scale-95"
        />
        {/* Devil/transformed form */}
        <img
          src={c.devilImage}
          alt=""
          loading="lazy"
          aria-hidden
          className="absolute inset-0 h-full w-full object-contain p-2 opacity-0 scale-105 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
        />
        {/* Glitch / red wash on hover */}
        <div className="pointer-events-none absolute inset-0 bg-blood/0 mix-blend-overlay transition-colors duration-500 group-hover:bg-blood/30" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="pointer-events-none absolute inset-0 scanlines opacity-40" />

        <div className="absolute left-3 top-3 z-10 flex items-center gap-2">
          <span className="border border-blood bg-background/80 px-1.5 py-0.5 font-mono text-[9px] tracking-[0.2em] text-blood">
            {c.classification}
          </span>
          <span className="border border-border bg-background/80 px-1.5 py-0.5 font-mono text-[9px] tracking-[0.2em] text-muted-foreground">
            RANK-{c.rank}
          </span>
        </div>
        <div className="absolute right-3 top-3 z-10 font-mono text-[9px] tracking-[0.2em] text-muted-foreground">
          {c.codename}
        </div>
      </div>

      <div className="space-y-2 p-4">
        <h3 className="font-display text-2xl tracking-wider text-foreground">{c.name}</h3>
        <div>
          <div className="mb-1 flex justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
            <span>Threat Level</span>
            <span className="text-blood">{c.danger}%</span>
          </div>
          <div className="h-1 w-full bg-secondary">
            <div
              className="h-full bg-blood transition-all"
              style={{ width: `${c.danger}%`, boxShadow: "0 0 10px var(--blood-glow)" }}
            />
          </div>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          STATUS: <span className="text-foreground">{c.status}</span>
        </div>
      </div>
    </Link>
  );
}
