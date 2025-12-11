"use client";

import { useState } from "react";
import Image from "next/image";

interface BookCardProps {
  book: {
    title: string;
    url: string;
    asin: string;
    author: string;
    stars?: number;
    thumbnailImage: string;
    highResolutionImages?: string[];
    bookDescription?: string;
    bestsellerPageData?: {
      categoryName: string;
      position: number;
    };
  };
  index: number;
}

export default function BookCard({ book, index }: BookCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const highResImage = book.highResolutionImages?.[0];
  const affiliateUrl = `${book.url}${book.url.includes("?") ? "&" : "?"}tag=tbsp02-20`;

  // Normalize + split description into paragraphs
  const paragraphs = book.bookDescription
    ? book.bookDescription
        // Handle HTML <br> tags from some sources
        .replace(/<br\s*\/?>/gi, "\n")
        // Handle literal "\n" sequences (backslash + n) from JSON / APIs
        .replace(/\\n/g, "\n")
        // Normalize Windows / old-style line endings
        .replace(/\r\n/g, "\n")
        .replace(/\r/g, "\n")
        // Split on one-or-more newlines (paragraph-ish breaks)
        .split(/\n+/)
        .map((para) => para.trim())
        .filter((para) => para.length > 0)
    : [];

  return (
    <a
      href={affiliateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col rounded-lg border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 shadow-lg shadow-cyan-500/10 transition-all hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/20 dark:border-cyan-400/30 dark:from-black dark:via-slate-950 dark:to-black"
    >
      {/* Animated corner accents */}
      <div className="pointer-events-none absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-cyan-500/50 transition-all group-hover:border-cyan-400" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-cyan-500/50 transition-all group-hover:border-cyan-400" />

      {/* Holographic glow effect */}
      <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      {/* Content Row: Position Badge, Thumbnail and Details */}
      <div className="relative z-10 flex items-start gap-4">
        {/* Position Badge - Cyberpunk Hacker Style */}
        <div className="relative flex h-20 w-20 flex-shrink-0 items-center justify-center">
          {/* Matrix-style grid background */}
          <div
            className="absolute inset-0 bg-black/90"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6, 182, 212, 0.03) 2px, rgba(6, 182, 212, 0.03) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(6, 182, 212, 0.03) 2px, rgba(6, 182, 212, 0.03) 4px)",
            }}
          />

          {/* Glitchy double border */}
          <div
            className="absolute inset-0 border-2 border-cyan-400/60 transition-all group-hover:border-cyan-300"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 95% 100%, 0 100%)" }}
          />
          <div
            className="absolute inset-[2px] border border-purple-500/40 transition-all group-hover:border-purple-400"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 95% 100%, 0 100%)" }}
          />

          {/* Hacker corner brackets */}
          <div className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-cyan-400 transition-all group-hover:h-4 group-hover:w-4 group-hover:border-cyan-300" />
          <div className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-cyan-400 transition-all group-hover:h-4 group-hover:w-4 group-hover:border-cyan-300" />
          <div className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-purple-500 transition-all group-hover:h-4 group-hover:w-4 group-hover:border-purple-400" />
          <div className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-purple-500 transition-all group-hover:h-4 group-hover:w-4 group-hover:border-purple-400" />

          {/* Scan line animation */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 animate-pulse"
              style={{ top: "30%", animation: "scan 3s ease-in-out infinite" }}
            />
          </div>

          {/* Glitch bars */}
          <div
            className="absolute left-0 right-0 h-[1px] bg-cyan-400/30 opacity-0 transition-opacity group-hover:opacity-100"
            style={{ top: "25%" }}
          />
          <div
            className="absolute left-0 right-0 h-[1px] bg-purple-500/30 opacity-0 transition-opacity group-hover:opacity-100"
            style={{ top: "75%" }}
          />

          {/* Position number with terminal style */}
          <span className="relative z-10 font-mono text-3xl font-black tracking-wider text-cyan-300 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] transition-all group-hover:text-cyan-200 group-hover:drop-shadow-[0_0_15px_rgba(6,182,212,1)]">
            #{book.bestsellerPageData?.position ?? index + 1}
          </span>

          {/* Data stream effect */}
          <div className="absolute inset-0 overflow-hidden opacity-0 transition-opacity group-hover:opacity-20">
            <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent animate-pulse" />
            <div
              className="absolute left-0 bottom-0 h-full w-px bg-gradient-to-t from-purple-500 via-cyan-400 to-transparent animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
        </div>

        {/* Thumbnail and Details Container */}
        <div className="flex items-start gap-4 flex-1 min-w-0">
          {/* Thumbnail */}
          {book.thumbnailImage ? (
            <div className="relative h-[300px] w-[200px] flex-shrink-0 overflow-hidden rounded border border-cyan-500/30 bg-slate-950 shadow-inner shadow-cyan-500/20 mx-6">
              <Image
                src={book.thumbnailImage}
                alt={book.title}
                fill
                className="object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                sizes="200px"
              />
              {/* Image overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ) : (
            <div className="relative h-[300px] w-[200px] flex-shrink-0 overflow-hidden rounded border border-cyan-500/30 bg-gradient-to-br from-slate-900 to-slate-950 shadow-inner shadow-cyan-500/20 mx-6">
              <div className="flex h-full items-center justify-center text-7xl font-bold text-cyan-500/20">
                ?
              </div>
            </div>
          )}

          {/* Book Details */}
          <div
            className={`flex min-w-0 flex-1 flex-col transition-all ${
              !isExpanded ? "max-h-[300px] overflow-hidden" : ""
            }`}
          >
            <h3 className="mb-2 bg-gradient-to-r from-cyan-300 via-cyan-100 to-purple-300 bg-clip-text text-3xl font-bold tracking-wide text-transparent transition-all group-hover:from-cyan-200 group-hover:to-purple-200">
              {book.title}
            </h3>
            <p className="mb-3 text-lg font-medium tracking-wider text-cyan-400/70 transition-colors group-hover:text-cyan-300">
              {book.author}
            </p>

            {book.stars && (
              <div className="mb-3 flex items-center gap-2">
                <span className="text-2xl text-yellow-400 drop-shadow-[0_0_4px_rgba(250,204,21,0.5)]">
                  ★
                </span>
                <span className="text-lg font-mono font-semibold text-cyan-300">
                  {book.stars.toFixed(1)}
                </span>
              </div>
            )}

            {paragraphs.length > 0 && (
              <div className="relative flex-1">
                {!isExpanded ? (
                  // Collapsed: show only the first paragraph
                  <div className="space-y-4 text-lg leading-relaxed text-slate-400 transition-colors group-hover:text-slate-300 line-clamp-6">
                    <p>{paragraphs[0]}</p>
                  </div>
                ) : (
                  // Expanded: show all paragraphs
                  <div className="space-y-4 text-lg leading-relaxed text-slate-400 transition-colors group-hover:text-slate-300">
                    {paragraphs.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                )}

                {book.bookDescription &&
                  book.bookDescription.length > 400 &&
                  !isExpanded && (
                    <div className="flex justify-center mt-2">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setIsExpanded(true);
                        }}
                        className="relative group/btn px-6 py-2 font-mono text-sm font-bold tracking-wider text-cyan-300 transition-all hover:text-cyan-200"
                      >
                        {/* Cyberpunk button borders */}
                        <div
                          className="absolute inset-0 border border-cyan-400/50 bg-slate-900/80 transition-all group-hover/btn:border-cyan-300 group-hover/btn:bg-slate-900/90"
                          style={{
                            clipPath:
                              "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                          }}
                        />
                        <div
                          className="absolute inset-[2px] border border-purple-500/30 transition-all group-hover/btn:border-purple-400/50"
                          style={{
                            clipPath:
                              "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                          }}
                        />
                        {/* Corner brackets */}
                        <div className="absolute left-0 top-0 h-2 w-2 border-l-2 border-t-2 border-cyan-400 transition-all group-hover/btn:h-3 group-hover/btn:w-3" />
                        <div className="absolute right-0 bottom-0 h-2 w-2 border-b-2 border-r-2 border-cyan-400 transition-all group-hover/btn:h-3 group-hover/btn:w-3" />
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-cyan-500/10 opacity-0 transition-opacity group-hover/btn:opacity-100" />
                        <span className="relative z-10 flex items-center gap-2 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]">
                          <span className="animate-pulse">▼</span>
                          <span>SEE_MORE</span>
                        </span>
                      </button>
                    </div>
                  )}

                {isExpanded && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsExpanded(false);
                    }}
                    className="relative mt-4 mx-auto block group/btn px-6 py-2 font-mono text-sm font-bold tracking-wider text-cyan-300 transition-all hover:text-cyan-200"
                  >
                    {/* Cyberpunk button borders */}
                    <div
                      className="absolute inset-0 border border-cyan-400/50 bg-slate-900/80 transition-all group-hover/btn:border-cyan-300 group-hover/btn:bg-slate-900/90"
                      style={{
                        clipPath:
                          "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                      }}
                    />
                    <div
                      className="absolute inset-[2px] border border-purple-500/30 transition-all group-hover/btn:border-purple-400/50"
                      style={{
                        clipPath:
                          "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                      }}
                    />
                    {/* Corner brackets */}
                    <div className="absolute left-0 top-0 h-2 w-2 border-l-2 border-t-2 border-cyan-400 transition-all group-hover/btn:h-3 group-hover/btn:w-3" />
                    <div className="absolute right-0 bottom-0 h-2 w-2 border-b-2 border-r-2 border-cyan-400 transition-all group-hover/btn:h-3 group-hover/btn:w-3" />
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-cyan-500/10 opacity-0 transition-opacity group-hover/btn:opacity-100" />
                    <span className="relative z-10 flex items-center gap-2 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]">
                      <span className="animate-pulse">▲</span>
                      <span>SEE_LESS</span>
                    </span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scan line effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg opacity-0 transition-opacity group-hover:opacity-30">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
      </div>

      {/* High-resolution preview on hover (large screens only) */}
      {highResImage && (
        <div className="pointer-events-none absolute right-full top-0 mr-4 hidden h-96 w-72 overflow-hidden rounded-lg border-2 border-cyan-400/50 bg-slate-950 opacity-0 shadow-2xl shadow-cyan-500/30 transition-opacity duration-300 group-hover:opacity-100 xl:block">
          <Image
            src={highResImage}
            alt={`${book.title} - High Resolution`}
            fill
            className="object-contain"
            sizes="288px"
          />
        </div>
      )}
    </a>
  );
}
