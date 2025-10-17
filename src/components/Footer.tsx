import { Instagram, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-['Ballet:Regular',_sans-serif] text-5xl mb-4">5 Star Concepts</h3>
            <p className="text-neutral-400">
              Capturing moments that transcend the ordinary.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => {
                  const element = document.getElementById('portfolio');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-neutral-400 hover:text-white transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('about');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-neutral-400 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-neutral-400 hover:text-white transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-neutral-400 hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://instagram.com/5starconcepts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:hello@5starconcepts.com"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
            >
              Back to top
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} 5 Star Concepts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
