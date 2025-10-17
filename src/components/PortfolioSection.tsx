import { useState } from 'react';
import Masonry from "react-responsive-masonry";
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { PortfolioItem } from '../App';

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1718964312267-0397c0d57dd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA1OTc5NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Editorial Series',
  },
  {
    id: 2,
    category: 'Fine Art',
    image: 'https://images.unsplash.com/photo-1693039382183-26ce087592e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMGJsYWNrJTIwd2hpdGUlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjA2MzQ0NjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Monochrome Dreams',
  },
  {
    id: 3,
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1647694079696-36fb2f5e337a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBwaG90b2dyYXBoeSUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzYwNjM0NDYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Minimal Structures',
  },
  {
    id: 4,
    category: 'Landscape',
    image: 'https://images.unsplash.com/photo-1654738344031-441757e8818d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBsYW5kc2NhcGUlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjA2MzQ0NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Natural Wonders',
  },
  {
    id: 5,
    category: 'Street',
    image: 'https://images.unsplash.com/photo-1708004228425-85703b49692e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBwaG90b2dyYXBoeSUyMHVyYmFufGVufDF8fHx8MTc2MDYzNDQ2MXww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Urban Stories',
  },
  {
    id: 6,
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1659095012540-8269e6fef69f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjA1NTQzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Modern Vision',
  },
];

const categories = ['All', 'Fashion', 'Fine Art', 'Architecture', 'Landscape', 'Street', 'Editorial'];

interface PortfolioSectionProps {
  onOpenViewer: (items: PortfolioItem[], index: number) => void;
}

export default function PortfolioSection({ onOpenViewer }: PortfolioSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-['Ballet:Regular',_sans-serif] text-6xl md:text-8xl lg:text-9xl text-black mb-20">
            Portfolio
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            A curated selection of work spanning fashion, fine art, architecture, and editorial photography
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 md:px-6 py-2 border rounded-[8px] transition-all ${
                selectedCategory === category
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-black hover:bg-neutral-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <Masonry columnsCount={3} gutter="24px">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onOpenViewer(filteredItems, index)}
              className="group relative overflow-hidden bg-neutral-100 cursor-pointer rounded-2xl"
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-end p-6">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <p className="text-sm text-white/80 mb-1">{item.category}</p>
                  <h3 className="text-white text-2xl">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
}
