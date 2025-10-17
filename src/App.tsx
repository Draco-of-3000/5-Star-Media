import { useState, useRef, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ImageViewer from './components/ImageViewer';

export interface PortfolioItem {
  id: number;
  category: string;
  image: string;
  title: string;
}

export interface ImageViewerState {
  items: PortfolioItem[];
  currentIndex: number;
}

export default function App() {
  const [viewerState, setViewerState] = useState<ImageViewerState | null>(null);
  const [shouldScrollToPortfolio, setShouldScrollToPortfolio] = useState(false);
  const portfolioRef = useRef<HTMLDivElement>(null);

  const handleOpenViewer = (items: PortfolioItem[], index: number) => {
    setViewerState({ items, currentIndex: index });
  };

  const handleCloseViewer = () => {
    setViewerState(null);
    setShouldScrollToPortfolio(true);
  };

  // Scroll to portfolio section when viewer closes
  useEffect(() => {
    if (shouldScrollToPortfolio && portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setShouldScrollToPortfolio(false);
    }
  }, [shouldScrollToPortfolio]);

  const handleNext = () => {
    if (!viewerState) return;
    setViewerState({
      ...viewerState,
      currentIndex: (viewerState.currentIndex + 1) % viewerState.items.length,
    });
  };

  const handlePrevious = () => {
    if (!viewerState) return;
    setViewerState({
      ...viewerState,
      currentIndex: (viewerState.currentIndex - 1 + viewerState.items.length) % viewerState.items.length,
    });
  };

  if (viewerState) {
    return (
      <ImageViewer
        items={viewerState.items}
        currentIndex={viewerState.currentIndex}
        onClose={handleCloseViewer}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    );
  }

  return (
    <div className="size-full">
      <Navigation />
      <HeroSection />
      <div ref={portfolioRef}>
        <PortfolioSection onOpenViewer={handleOpenViewer} />
      </div>
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
