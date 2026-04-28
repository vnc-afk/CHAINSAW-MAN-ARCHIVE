export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 md:flex-row">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          SYSTEM v4.13.7 // BUILD 0451-A // SECURE TUNNEL ACTIVE
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          © PUBLIC SAFETY DEVIL HUNTERS — UNAUTHORIZED ACCESS PROSECUTED
        </div>
      </div>
    </footer>
  );
}
