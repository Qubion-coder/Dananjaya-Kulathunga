import { Mail, Phone, MessageCircle } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#0d1014]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="heading-medium mb-4">A Little About Me</h2>
          <p className="text-xl text-[var(--color-text-secondary)]">Personal, professional, and always moving forward.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <h3 className="text-4xl md:text-5xl font-bold leading-tight text-[var(--color-text-primary)] sticky top-32">
              Technology, people, and ideas.
            </h3>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div className="prose prose-invert max-w-none">
              <p className="text-xl leading-relaxed text-[var(--color-text-secondary)] mb-6">
                I'm Dananjaya Kulathunga, a technology-focused individual with an interest in digital platforms, modern technology, and building practical solutions. This website is a simple space to introduce myself, share my professional presence, and make it easy for people to connect with me.
              </p>
              <p className="text-xl leading-relaxed text-[var(--color-text-secondary)]">
                I also have a professional presence through SmartixZone, where I share and work around technology and digital content.
              </p>
            </div>

            {/* Personal Information Card */}
            <div className="glass-card p-8 mt-4 hover:-translate-y-1 transition-transform duration-300">
              <h4 className="text-lg font-medium text-white mb-6 border-b border-[var(--color-border)] pb-4">Personal Details</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-[var(--color-text-secondary)] uppercase tracking-wider mb-1">Name</p>
                  <p className="text-white font-medium">Dananjaya Kulathunga</p>
                </div>
                
                <div>
                  <p className="text-sm text-[var(--color-text-secondary)] uppercase tracking-wider mb-1 flex items-center gap-2">
                    <Mail size={14} /> Email
                  </p>
                  <a href="mailto:dananjayakulathunga413@gmail.com" className="text-white font-medium hover:text-[var(--color-accent)] transition-colors block truncate">
                    dananjayakulathunga413@gmail.com
                  </a>
                </div>
                
                <div>
                  <p className="text-sm text-[var(--color-text-secondary)] uppercase tracking-wider mb-1 flex items-center gap-2">
                    <MessageCircle size={14} /> Personal WhatsApp
                  </p>
                  <a href="https://wa.me/94711838834" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[var(--color-accent)] transition-colors">
                    071 183 8834
                  </a>
                </div>
                
                <div>
                  <p className="text-sm text-[var(--color-text-secondary)] uppercase tracking-wider mb-1 flex items-center gap-2">
                    <Phone size={14} /> Personal Phone
                  </p>
                  <a href="tel:+94761920405" className="text-white font-medium hover:text-[var(--color-accent)] transition-colors">
                    076 192 0405
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
