import { useState } from 'react';
import { BarChart3 } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  aspectClassName?: string;
}

export function ResilientImage({
  src,
  alt,
  caption,
  className = '',
  aspectClassName = 'aspect-video',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900 via-[#0F172A] to-slate-950 flex flex-col items-center justify-center p-8 text-center ${aspectClassName} ${className}`}
        role="img"
        aria-label={alt}
      >
        <BarChart3 className="w-10 h-10 text-emerald-500/70 mb-3" aria-hidden="true" />
        <p className="text-sm font-medium text-slate-300 max-w-sm">{alt}</p>
        {caption && <p className="text-xs text-slate-500 mt-1">{caption}</p>}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900 ${aspectClassName} ${className}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className="w-full h-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090D16]/70 via-transparent to-transparent" />
      {caption && (
        <div className="absolute bottom-3 left-4 right-4 text-xs text-slate-200/90 font-medium">
          {caption}
        </div>
      )}
    </div>
  );
}
