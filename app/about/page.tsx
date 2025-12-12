"use client";

import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-sm text-cyan-400 transition-colors hover:text-cyan-300"
          >
            <span>←</span> Back to Rankings
          </Link>
        </div>

        {/* Title */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
            About Top 100 Sci-Fi
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-8 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          <div className="rounded-lg border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-slate-950/50 p-8 shadow-lg">
            <h2 className="mb-4 font-mono text-2xl font-bold text-cyan-400">Mission</h2>
            <p>
              We track and curate the top 100 military science fiction books across three distinct categories:
              Space Marine, Military Sci-Fi, and Space Fleet. Our rankings are updated daily from Amazon's
              bestseller lists to help you discover the most popular sci-fi books in the genre.
            </p>
          </div>
          
          <div className="rounded-lg border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-slate-950/50 p-8 shadow-lg">
            <h2 className="mb-4 font-mono text-2xl font-bold text-cyan-400">Affiliate Disclosure</h2>
            <p>
              This site contains affiliate links to Amazon. When you purchase books through our links,
              we may earn a small commission at no additional cost to you. This helps support the
              maintenance and development of this resource.
            </p>
          </div>

          <div className="rounded-lg border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-slate-950/50 p-8 shadow-lg">
            <h2 className="mb-4 font-mono text-2xl font-bold text-cyan-400">Categories</h2>
            <div className="space-y-3">
              <div>
                <span className="font-bold text-cyan-300">Space Marine:</span> Stories featuring elite
                soldiers in powered armor fighting across the galaxy.
              </div>
              <div>
                <span className="font-bold text-cyan-300">Military Sci-Fi:</span> Broader military
                science fiction including ground combat, tactics, and warfare.
              </div>
              <div>
                <span className="font-bold text-cyan-300">Space Fleet:</span> Naval warfare in space,
                fleet battles, and ship-to-ship combat.
              </div>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block rounded-lg border-2 border-cyan-500/30 bg-slate-900/50 px-8 py-3 font-mono text-lg font-bold text-cyan-400 transition-all hover:border-cyan-400 hover:bg-slate-900/80 hover:text-cyan-300"
          >
            Explore Rankings →
          </Link>
        </div>
      </main>
    </div>
  );
}
