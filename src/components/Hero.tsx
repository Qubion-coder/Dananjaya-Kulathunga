import { ArrowRight, Mail, Phone } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div className="flex flex-col gap-8 animate-fade-in-up">
          <div>
            <span className="text-[var(--color-accent)] font-semibold tracking-wider text-sm uppercase mb-4 block">
              Personal Profile
            </span>
            <h1 className="heading-large mb-4">
              <span className="block">Dananjaya</span>
              <span className="block">Kulathunga</span>
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] font-medium">
              Technology Enthusiast • Entrepreneur • Digital Professional
            </p>
          </div>

          <p className="text-sub max-w-lg">
            Welcome to my personal space on the web. I'm Dananjaya Kulathunga, passionate about technology, digital solutions, and building meaningful connections through modern platforms.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#contact" className="btn-primary group">
              Get in Touch
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#about" className="btn-secondary">
              Explore My Profile
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-8 mt-4 border-t border-[var(--color-border)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--color-secondary)] flex items-center justify-center border border-[var(--color-border)] text-[var(--color-text-secondary)]">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">WhatsApp</p>
                <p className="text-sm font-medium text-[var(--color-text-primary)]">071 183 8834</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--color-secondary)] flex items-center justify-center border border-[var(--color-border)] text-[var(--color-text-secondary)]">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">Email</p>
                <a href="mailto:dananjayakulathunga413@gmail.com" className="text-sm font-medium text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors">
                  dananjayakulathunga413@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Premium Profile Visual */}
        <div className="flex justify-center relative perspective-1000 order-first lg:order-last mb-8 lg:mb-0">
          <div className="relative w-full max-w-sm lg:w-96 h-[400px] lg:h-[500px] glass-card overflow-hidden group">
            {/* Abstract Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[var(--color-secondary)] to-[#0a0c0f] z-0"></div>
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-[var(--color-accent)]/20 rounded-full blur-[80px] group-hover:bg-[var(--color-accent)]/30 transition-colors duration-700"></div>
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[var(--color-accent)]/10 rounded-full blur-[60px]"></div>
            
            {/* Grid Lines */}
            <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
              <div className="w-56 h-56 mb-8 rounded-2xl border border-[var(--color-border)] shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500 bg-[var(--color-secondary)]">
                <img 
                  src="/WhatsApp Image 2026-09-20 at 18.20.10.jpeg" 
                  alt="Dananjaya Kulathunga" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Minimal Digital Lines */}
              <div className="w-full flex justify-center gap-2 mb-8 opacity-40">
                <div className="h-1 w-12 bg-gradient-to-r from-transparent to-[var(--color-accent)] rounded-full"></div>
                <div className="h-1 w-24 bg-[var(--color-accent)] rounded-full"></div>
                <div className="h-1 w-8 bg-gradient-to-l from-transparent to-[var(--color-accent)] rounded-full"></div>
              </div>

              {/* Floating Card */}
              <div className="glass-card px-6 py-4 border border-[var(--color-border)]/50 bg-[#0B0D10]/80 mt-8 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-2xl">
                <p className="text-white font-medium mb-1 text-center">Dananjaya Kulathunga</p>
                <div className="flex justify-between items-center gap-8 text-xs text-[var(--color-text-secondary)]">
                  <span>Personal Profile</span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Sri Lanka
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
