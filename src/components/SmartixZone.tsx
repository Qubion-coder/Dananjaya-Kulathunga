import { ExternalLink, MessageCircle } from 'lucide-react';

export function SmartixZone() {
  return (
    <section id="smartixzone" className="py-20 md:py-24 px-5 md:px-12 bg-[#0d1014]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[var(--color-accent)] font-semibold tracking-wider text-sm uppercase mb-4 block">
            MY BUSINESS & SOCIAL PRESENCE
          </span>
          <h2 className="heading-medium mb-4">SmartixZone</h2>
          <p className="text-xl text-[var(--color-text-secondary)]">
            SmartixZone is my primary business venture, where I share updates, creative content, and connect with my community through social platforms.
          </p>
        </div>

        <div className="glass-card p-6 sm:p-8 md:p-12 relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)]/10 rounded-full blur-[80px]"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12">
            
            <div className="flex-1 flex flex-col md:flex-row gap-6 sm:gap-8 w-full">
              {/* Facebook Card */}
              <div className="flex-1 bg-[var(--color-primary)] border border-[var(--color-border)] rounded-2xl p-6 flex items-center justify-between group hover:border-[#1877F2]/50 transition-colors duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1877F2]/10 flex items-center justify-center text-[#1877F2]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">SmartixZone</h4>
                    <p className="text-[var(--color-text-secondary)] text-sm">Facebook</p>
                  </div>
                </div>
                <a 
                  href="https://www.facebook.com/share/1EfkabhZdf/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[var(--color-secondary)] border border-[var(--color-border)] flex items-center justify-center text-white group-hover:bg-[#1877F2] group-hover:border-[#1877F2] transition-colors duration-300"
                  aria-label="Visit Facebook"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* TikTok Card */}
              <div className="flex-1 bg-[var(--color-primary)] border border-[var(--color-border)] rounded-2xl p-6 flex items-center justify-between group hover:border-white/50 transition-colors duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">SmartixZone</h4>
                    <p className="text-[var(--color-text-secondary)] text-sm">@smartixzone</p>
                  </div>
                </div>
                <a 
                  href="https://www.tiktok.com/@smartixzone" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[var(--color-secondary)] border border-[var(--color-border)] flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-colors duration-300"
                  aria-label="Visit TikTok"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            <div className="w-full lg:w-auto flex flex-col items-center lg:items-start lg:pl-8 lg:border-l border-[var(--color-border)]">
              <p className="text-sm text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">
                Business WhatsApp
              </p>
              <a 
                href="https://wa.me/94762807910" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-2xl font-bold text-white hover:text-[#25D366] transition-colors duration-300 group"
              >
                <MessageCircle className="w-6 h-6 text-[#25D366] group-hover:scale-110 transition-transform" />
                076 280 7910
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
