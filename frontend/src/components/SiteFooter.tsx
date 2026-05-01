export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:px-6 md:flex-row md:text-left">
        <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground sm:text-[10px]">
          SYSTEM v4.13.7 // BUILD 0451-A // SECURE TUNNEL ACTIVE
        </div>
        <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground sm:text-[10px]">
          © PUBLIC SAFETY DEVIL HUNTERS — UNAUTHORIZED ACCESS PROSECUTED
        </div>
      </div>
    </footer>
  );
}
