import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { PortfolioItem } from '../App';

interface ImageViewerProps {
  items: PortfolioItem[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function ImageViewer({
  items,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
}: ImageViewerProps) {
  const currentItem = items[currentIndex];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrevious();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrevious]);

  return (
    <div className="fixed inset-0 z-50 bg-[#BBBBBB] flex flex-col overflow-hidden">
      {/* Header with close button */}
      <div className="flex-shrink-0 p-6 flex justify-end">
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
          aria-label="Close viewer"
        >
          <X size={24} />
        </button>
      </div>

      {/* Category and Title */}
      <div className="flex-shrink-0 text-center px-6 pb-8">
        <p className="text-black/70 text-lg mb-2">{currentItem.category}</p>
        <h2 className="text-black text-2xl">{currentItem.title}</h2>
      </div>

      {/* Main image area */}
      <div className="flex-1 flex items-center justify-center px-24 pb-20 min-h-0">
        <ImageWithFallback
          src={currentItem.image}
          alt={currentItem.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Navigation arrows */}
      <button
        onClick={onPrevious}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={onNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
        aria-label="Next image"
      >
        <ChevronRight size={32} />
      </button>

      {/* Image counter */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <p className="text-black/70">
          {currentIndex + 1} / {items.length}
        </p>
      </div>
    </div>
  );
}
