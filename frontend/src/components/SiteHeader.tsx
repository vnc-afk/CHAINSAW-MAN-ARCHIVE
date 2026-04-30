import { Link } from "@tanstack/react-router";
import { Search, Lock } from "lucide-react";

export function SiteHeader() {
  const items = [
    { label: "Archive", to: "/" as const },
    { label: "Arcs", to: "/arcs" as const },
    { label: "Timeline", to: "/timeline" as const },
    { label: "Themes", to: "/themes" as const },
  ];
  const title = "CHAINSAW ·· ARCHIVE";
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center border border-blood bg-blood/20">
            <span className="font-display text-lg leading-none text-blood">
              C
            </span>
          </div>
          <div className="leading-tight">
            <div
              className="font-display text-xl tracking-widest text-foreground glitch"
              data-text={title}
            >
              {title}
            </div>
            <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
              Public Safety // Div.04
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {items.map((it) => (
            <Link
              key={it.label}
              to={it.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-blood" }}
              className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-blood"
            >
              {it.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            className="text-muted-foreground hover:text-blood transition-colors"
          >
            <Search className="h-4 w-4" />
          </button>
          <button className="group flex items-center gap-2 border border-blood bg-blood/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-blood transition-all hover:bg-blood hover:text-primary-foreground">
            <Lock className="h-3 w-3" />
            <span className="hidden sm:inline">Classified Access</span>
          </button>
        </div>
      </div>
    </header>
  );
}
