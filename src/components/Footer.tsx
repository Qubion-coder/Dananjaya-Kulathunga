import { Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] border-t border-[var(--color-border)] py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <p className="text-xl font-bold text-white mb-1">Dananjaya Kulathunga</p>
          <p className="text-[var(--color-text-secondary)] text-sm">Personal Website</p>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="https://www.facebook.com/share/1EfkabhZdf/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[var(--color-text-secondary)] hover:text-white transition-colors duration-300"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a 
            href="https://www.tiktok.com/@smartixzone" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[var(--color-text-secondary)] hover:text-white transition-colors duration-300"
            aria-label="TikTok"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
          </a>
          <a 
            href="https://wa.me/94711838834" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[var(--color-text-secondary)] hover:text-white transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </a>
          <a 
            href="mailto:dananjayakulathunga413@gmail.com" 
            className="text-[var(--color-text-secondary)] hover:text-white transition-colors duration-300"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-[var(--color-border)]/50 text-center text-sm text-[var(--color-text-secondary)]">
        &copy; 2026 Dananjaya Kulathunga. All rights reserved.
      </div>
    </footer>
  );
}
