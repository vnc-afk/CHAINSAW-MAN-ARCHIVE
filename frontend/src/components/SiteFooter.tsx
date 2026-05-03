import { useState } from "react";
import { FileWarning, X } from "lucide-react";

export function SiteFooter() {
  const [open, setOpen] = useState(false);

  return (
    <footer className="border-t border-border/60 bg-background">
      {/* Disclaimer block */}
      <div className="border-b border-border/60 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
          <div className="flex items-start gap-3 border border-border bg-background/60 p-4 sm:p-5">
            <FileWarning className="mt-0.5 h-4 w-4 shrink-0 text-blood" />
            <div className="min-w-0 flex-1">
              <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-blood sm:text-[10px]">
                  DOC 0000 // FAN-MADE NOTICE
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground sm:text-[10px]">
                  CC BY-SA // NON-COMMERCIAL
                </span>
              </div>
              <p className="font-mono text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                This website is a{" "}
                <span className="text-foreground">fan-made project</span>{" "}
                inspired by{" "}
                <span className="text-foreground">Chainsaw Man</span>, created
                for educational and entertainment purposes only. All characters,
                images, trademarks, and related content belong to their
                respective owners.{" "}
                <button
                  onClick={() => setOpen(true)}
                  className="text-blood underline-offset-2 hover:underline"
                >
                  Read full disclaimer →
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom strip */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:px-6 md:flex-row md:text-left">
        <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground sm:text-[10px]">
          SYSTEM v4.13.7 // BUILD 0451-A // SECURE TUNNEL ACTIVE
        </div>
        <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground sm:text-[10px]">
          © PUBLIC SAFETY DEVIL HUNTERS — UNAUTHORIZED ACCESS PROSECUTED
        </div>
      </div>
      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto border border-blood bg-card p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center border border-border text-muted-foreground hover:border-blood hover:text-blood"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.4em] text-blood">
              DOC 0000 // FULL DISCLAIMER
            </div>
            <h3
              className="glitch font-display text-2xl tracking-[0.1em] text-foreground sm:text-3xl"
              data-text="FAN-MADE NOTICE"
            >
              FAN-MADE NOTICE
            </h3>
            <div className="mt-6 space-y-4 border-t border-border pt-6 font-mono text-xs leading-relaxed text-muted-foreground sm:text-sm">
              <p>
                This website is a{" "}
                <span className="text-foreground">fan-made project</span>{" "}
                inspired by{" "}
                <span className="text-foreground">Chainsaw Man</span>. It is
                created for{" "}
                <span className="text-blood">
                  educational and entertainment purposes only
                </span>
                .
              </p>
              <p>
                All characters, images, trademarks, and related content belong
                to their respective owners, including the original creator and
                official publishers. This website is{" "}
                <span className="text-foreground">
                  not affiliated with, endorsed by, or sponsored
                </span>{" "}
                by any official entity.
              </p>
              <p>
                Some information on this site is sourced from the{" "}
                <span className="text-foreground">
                  Chainsaw Man Wiki on Fandom
                </span>{" "}
                and is used in accordance with the{" "}
                <span className="text-blood">
                  Creative Commons Attribution-ShareAlike (CC BY-SA)
                </span>{" "}
                license.
              </p>
              <p>
                No copyright infringement is intended. If you are a rights
                holder and believe that any content on this site should be
                removed or credited differently, please contact us and we will
                take appropriate action.
              </p>
            </div>
            <div className="mt-6 border-t border-border pt-4 font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground sm:text-[10px]">
              END DOCUMENT // ARCHIVE 0000-Ω
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
