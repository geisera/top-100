"use client";

import { useState } from "react";
import Link from "next/link";
import spaceMarineData from "../top-100-space-marine.json";
import milSciFiData from "../top-100-mil-sci-fi.json";
import spaceFleetData from "../top-100-space-fleet.json";
import BookCard from "./components/BookCard";
import Footer from "./components/Footer";

interface Book {
  title?: string;
  name?: string;
  url: string;
  asin: string;
  price?: {
    value: number;
    currency: string;
  } | null;
  author?: string;
  stars?: number;
  thumbnailImage?: string;
  highResolutionImages?: string[];
  bookDescription?: string;
  bestsellerPageData?: {
    categoryName: string;
    position: number;
  };
  position?: number;
}

type TabType = "space-marine" | "military-scifi" | "space-fleet";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("space-marine");

  const getBooksForTab = (tab: TabType): Book[] => {
    let rawData;
    if (tab === "space-marine") {
      rawData = spaceMarineData;
    } else if (tab === "military-scifi") {
      rawData = milSciFiData;
    } else {
      rawData = spaceFleetData;
    }
    return [...rawData].sort((a, b) => {
      const posA = (a as any).bestsellerPageData?.position ?? (a as any).position ?? 999;
      const posB = (b as any).bestsellerPageData?.position ?? (b as any).position ?? 999;
      return posA - posB;
    }) as Book[];
  };

  const books = getBooksForTab(activeTab);
  const categoryTitle = activeTab === "space-marine" ? "Space Marine" : activeTab === "military-scifi" ? "Military Sci-Fi" : "Space Fleet";

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-8 flex justify-end">
          <Link
            href="/about"
            className="font-mono text-sm text-cyan-400 transition-colors hover:text-cyan-300"
          >
            About
          </Link>
        </div>

        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
            Top 100 {categoryTitle} Sci-Fi Books
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Explore the best {categoryTitle.toLowerCase()} science fiction titles
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex justify-center gap-2">
          <button
            onClick={() => setActiveTab("space-marine")}
            className={`relative overflow-hidden rounded-lg border-2 px-8 py-3 text-lg font-bold tracking-wide transition-all ${
              activeTab === "space-marine"
                ? "border-cyan-400 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 shadow-lg shadow-cyan-500/30"
                : "border-cyan-500/30 bg-slate-900/50 text-cyan-400/60 hover:border-cyan-400/50 hover:text-cyan-300"
            }`}
          >
            <span className="relative z-10">Space Marine</span>
            {activeTab === "space-marine" && (
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("military-scifi")}
            className={`relative overflow-hidden rounded-lg border-2 px-8 py-3 text-lg font-bold tracking-wide transition-all ${
              activeTab === "military-scifi"
                ? "border-cyan-400 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 shadow-lg shadow-cyan-500/30"
                : "border-cyan-500/30 bg-slate-900/50 text-cyan-400/60 hover:border-cyan-400/50 hover:text-cyan-300"
            }`}
          >
            <span className="relative z-10">Military Sci-Fi</span>
            {activeTab === "military-scifi" && (
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("space-fleet")}
            className={`relative overflow-hidden rounded-lg border-2 px-8 py-3 text-lg font-bold tracking-wide transition-all ${
              activeTab === "space-fleet"
                ? "border-cyan-400 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 shadow-lg shadow-cyan-500/30"
                : "border-cyan-500/30 bg-slate-900/50 text-cyan-400/60 hover:border-cyan-400/50 hover:text-cyan-300"
            }`}
          >
            <span className="relative z-10">Space Fleet</span>
            {activeTab === "space-fleet" && (
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse" />
            )}
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {books.map((book, index) => {
            const bookData = {
              title: (book.title || book.name) ?? "",
              url: book.url,
              asin: book.asin,
              author: book.author ?? "Unknown",
              stars: book.stars,
              thumbnailImage: book.thumbnailImage ?? "",
              highResolutionImages: book.highResolutionImages,
              bookDescription: book.bookDescription,
              bestsellerPageData: book.bestsellerPageData ?? {
                categoryName: "",
                position: book.position ?? index + 1
              }
            };
            return <BookCard key={book.asin} book={bookData} index={index} />;
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
