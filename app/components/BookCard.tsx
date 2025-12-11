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
  const highResImage = book.highResolutionImages?.[0];
  const affiliateUrl = `${book.url}${book.url.includes('?') ? '&' : '?'}tag=tbsp02-20`;
  
  return (
    <a
      href={affiliateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-4 rounded-lg border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 shadow-lg shadow-cyan-500/10 transition-all hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/20 dark:border-cyan-400/30 dark:from-black dark:via-slate-950 dark:to-black"
    >
      {/* Animated corner accents */}
      <div className="pointer-events-none absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-cyan-500/50 transition-all group-hover:border-cyan-400" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-cyan-500/50 transition-all group-hover:border-cyan-400" />
      
      {/* Holographic glow effect */}
      <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      {book.thumbnailImage ? (
        <div className="relative z-10 h-32 w-24 flex-shrink-0 overflow-hidden rounded border border-cyan-500/30 bg-slate-950 shadow-inner shadow-cyan-500/20">
          <Image
            src={book.thumbnailImage}
            alt={book.title}
            fill
            className="object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
            sizes="96px"
          />
          {/* Image overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      ) : (
        <div className="relative z-10 h-32 w-24 flex-shrink-0 overflow-hidden rounded border border-cyan-500/30 bg-gradient-to-br from-slate-900 to-slate-950 shadow-inner shadow-cyan-500/20">
          <div className="flex h-full items-center justify-center text-4xl font-bold text-cyan-500/20">
            ?
          </div>
        </div>
      )}

      <div className="relative z-10 flex min-w-0 flex-1 items-center gap-4">
        <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center">
          {/* Hexagonal border effect */}
          <div className="absolute inset-0 rotate-0 rounded-lg border-2 border-cyan-500/40 transition-all group-hover:rotate-180 group-hover:border-cyan-400" />
          <div className="absolute inset-0 rotate-45 rounded-lg border-2 border-purple-500/30 transition-all group-hover:rotate-[225deg] group-hover:border-purple-400" />
          <span className="relative z-10 bg-gradient-to-br from-cyan-400 to-purple-400 bg-clip-text text-lg font-bold text-transparent">
            #{book.bestsellerPageData?.position ?? index + 1}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="mb-2 bg-gradient-to-r from-cyan-300 via-cyan-100 to-purple-300 bg-clip-text text-3xl font-bold tracking-wide text-transparent transition-all group-hover:from-cyan-200 group-hover:to-purple-200">
            {book.title}
          </h3>
          <p className="mb-3 text-lg font-medium tracking-wider text-cyan-400/70 transition-colors group-hover:text-cyan-300">
            {book.author}
          </p>
          {book.stars && (
            <div className="mb-3 flex items-center gap-2">
              <span className="text-2xl text-yellow-400 drop-shadow-[0_0_4px_rgba(250,204,21,0.5)]">★</span>
              <span className="text-lg font-mono font-semibold text-cyan-300">
                {book.stars.toFixed(1)}
              </span>
            </div>
          )}
          {book.bookDescription && (
            <p className="text-lg leading-relaxed text-slate-400 line-clamp-3 transition-colors group-hover:text-slate-300">
              {book.bookDescription}
            </p>
          )}
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
