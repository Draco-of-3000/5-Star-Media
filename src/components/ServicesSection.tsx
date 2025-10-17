import { Camera, Users, Palette, Building2 } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Editorial Photography',
    description: 'High-end editorial work for magazines, lookbooks, and fashion campaigns that capture attention and tell compelling stories.',
  },
  {
    icon: Users,
    title: 'Portrait Sessions',
    description: 'Personalized portrait experiences for individuals, families, and professionals seeking timeless, artistic imagery.',
  },
  {
    icon: Palette,
    title: 'Fine Art',
    description: 'Conceptual and artistic photography for collectors, galleries, and exhibitions with a focus on unique vision.',
  },
  {
    icon: Building2,
    title: 'Commercial Work',
    description: 'Brand campaigns, product photography, and commercial projects that elevate your business and engage audiences.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-black text-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-['Ballet:Regular',_sans-serif] text-6xl md:text-8xl lg:text-9xl mb-6">
            Services
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Comprehensive photography services tailored to bring your vision to life with excellence and artistry
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group border border-white/20 p-8 md:p-10 hover:bg-white/5 transition-all duration-300"
              >
                <Icon className="w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl md:text-3xl mb-4">{service.title}</h3>
                <p className="text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 md:mt-24">
          <p className="text-neutral-400 mb-6">
            Ready to start your next project?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="border border-white px-8 py-3 hover:bg-white hover:text-black transition-all"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
