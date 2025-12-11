export default function Footer() {
  return (
    <footer className="mt-16 border-t border-cyan-500/20 bg-gradient-to-b from-slate-900/50 to-black py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-lg border border-cyan-500/30 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-6 shadow-lg shadow-cyan-500/10">
          {/* Corner accents */}
          <div className="pointer-events-none absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-cyan-400/50" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-cyan-400/50" />
          
          {/* Disclosure text */}
          <div className="relative z-10 text-center">
            <p className="text-sm leading-relaxed text-slate-400">
              <span className="font-mono text-cyan-400">⚠ DISCLOSURE:</span> This site contains affiliate links. 
              When you click on links to Amazon products and make a purchase, we may earn a small commission at no additional cost to you. 
              This helps support our work in bringing you the best sci-fi book recommendations.
            </p>
          </div>

          {/* Subtle scan line effect */}
          <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center">
          <p className="font-mono text-xs text-slate-500">
            © {new Date().getFullYear()} Top 100 Sci-Fi Books. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
