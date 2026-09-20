import { Mail, Phone, MessageCircle } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 md:py-24 px-5 md:px-12 bg-[#0d1014]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="heading-medium mb-4">A Little About Me</h2>
          <p className="text-xl text-[var(--color-text-secondary)]">Personal, professional, and always moving forward.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[var(--color-text-primary)] md:sticky md:top-32">
              Life, people, and meaningful connections.
            </h3>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div className="prose prose-invert max-w-none">
              <p className="text-xl leading-relaxed text-[var(--color-text-secondary)] mb-6">
                I'm Dananjaya Kulathunga, someone who values hard work, creativity, and building practical solutions in everyday life. This website is a simple space to introduce myself, share a bit about what I do, and make it easy for people to connect with me.
              </p>
              <p className="text-xl leading-relaxed text-[var(--color-text-secondary)]">
                I also manage SmartixZone, my business platform where I share updates, creative content, and connect with my community.
              </p>
            </div>

            {/* Personal Information Card */}
            <div className="glass-card p-6 sm:p-8 mt-2 sm:mt-4 hover:-translate-y-1 transition-transform duration-300">
              <h4 className="text-lg font-medium text-white mb-5 sm:mb-6 border-b border-[var(--color-border)] pb-3 sm:pb-4">Personal Details</h4>
              
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
