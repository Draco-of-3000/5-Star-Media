import { ImageWithFallback } from './figma/ImageWithFallback';

export default function AboutSection() {
  return (
    <section id="about" className="bg-neutral-50 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1636293875439-b3125c0f1fc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwNjM0NDYzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Photographer at work"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="font-['Ballet:Regular',_sans-serif] text-6xl md:text-8xl text-black">
              About Me
            </h2>
            <div className="space-y-4 text-neutral-700">
              <p>
                With over a decade of experience capturing moments that matter, I specialize in creating
                visual narratives that resonate deeply with audiences. My work spans fashion, editorial,
                architecture, and fine art photography.
              </p>
              <p>
                Based between New York and Los Angeles, I collaborate with brands, publications, and
                individuals who seek imagery that transcends the ordinary. Every project is an opportunity
                to craft something truly exceptional.
              </p>
              <p>
                My approach combines technical precision with artistic vision, ensuring each photograph
                tells its own unique story while maintaining the highest standards of quality and
                craftsmanship.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-300">
              <div>
                <div className="text-4xl md:text-5xl mb-2">10+</div>
                <div className="text-sm text-neutral-600">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl mb-2">500+</div>
                <div className="text-sm text-neutral-600">Projects</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl mb-2">50+</div>
                <div className="text-sm text-neutral-600">Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
