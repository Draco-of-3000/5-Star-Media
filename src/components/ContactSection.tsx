import { useState } from 'react';
import { Mail, Instagram, MapPin } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', project: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="bg-neutral-50 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-['Ballet:Regular',_sans-serif] text-6xl md:text-8xl lg:text-9xl text-black mb-6">
            Let&apos;s Connect
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it and explore how we can create something exceptional together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-neutral-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 bg-white focus:outline-none focus:border-black transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-neutral-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 bg-white focus:outline-none focus:border-black transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="project" className="block mb-2 text-neutral-700">Project Type</label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 bg-white focus:outline-none focus:border-black transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="editorial">Editorial Photography</option>
                  <option value="portrait">Portrait Session</option>
                  <option value="fineart">Fine Art</option>
                  <option value="commercial">Commercial Work</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-neutral-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-neutral-300 bg-white focus:outline-none focus:border-black transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white px-8 py-4 hover:bg-neutral-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 mt-1 text-neutral-600" />
                  <div>
                    <p className="mb-1">Email</p>
                    <a href="mailto:hello@5starconcepts.com" className="text-neutral-600 hover:text-black transition-colors">
                      hello@5starconcepts.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Instagram className="w-6 h-6 mt-1 text-neutral-600" />
                  <div>
                    <p className="mb-1">Instagram</p>
                    <a href="https://instagram.com/5starconcepts" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-black transition-colors">
                      @5starconcepts
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 mt-1 text-neutral-600" />
                  <div>
                    <p className="mb-1">Based In</p>
                    <p className="text-neutral-600">New York & Los Angeles</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="border-l-4 border-black pl-6 py-4 mt-12">
              <p className="text-neutral-600 italic mb-2">
                &quot;Photography is the story I fail to put into words.&quot;
              </p>
              <p className="text-sm text-neutral-500">— Destin Sparks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
