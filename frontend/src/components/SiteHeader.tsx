import { Link } from "@tanstack/react-router";
import { Search, Lock, Menu, X } from "lucide-react";
import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const items = [
    { label: "Archive", to: "/" as const },
    { label: "Arcs", to: "/arcs" as const },
    { label: "Timeline", to: "/timeline" as const },
    { label: "Themes", to: "/themes" as const },
  ];
  const title = "CHAINSAW ·· ARCHIVE";
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center border border-blood bg-blood/20 sm:h-8 sm:w-8">
            <span className="font-display text-base leading-none text-blood sm:text-lg">
              C
            </span>
          </div>
          <div className="min-w-0 leading-tight">
            <div
              className="truncate font-display text-base tracking-widest text-foreground glitch sm:text-xl"
              data-text={title}
            >
              {title}
            </div>
            <div className="hidden font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground sm:block">
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

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            aria-label="Search"
            className="text-muted-foreground hover:text-blood transition-colors"
          >
            <Search className="h-4 w-4" />
          </button>
          <button className="group hidden items-center gap-2 border border-blood bg-blood/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-blood transition-all hover:bg-blood hover:text-primary-foreground sm:flex">
            <Lock className="h-3 w-3" />
            <span className="hidden sm:inline">Classified Access</span>
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 items-center justify-center border border-border text-muted-foreground hover:border-blood hover:text-blood md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background/95 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {items.map((it) => (
              <Link
                key={it.label}
                to={it.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-blood" }}
                className="border-b border-border/40 py-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-blood"
              >
                {it.label}
              </Link>
            ))}
            <button className="mt-3 mb-2 flex items-center justify-center gap-2 border border-blood bg-blood/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-blood">
              <Lock className="h-3 w-3" />
              Classified Access
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
