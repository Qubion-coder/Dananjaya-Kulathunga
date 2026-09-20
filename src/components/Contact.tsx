import { Phone, Mail, MessageCircle } from 'lucide-react';

export function Contact() {
  const contactMethods = [
    {
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      title: "Personal WhatsApp",
      value: "071 183 8834",
      buttonText: "WhatsApp Me",
      link: "https://wa.me/94711838834",
      bgClass: "bg-[#25D366]/20",
      iconBg: "bg-[#25D366]",
      hoverBorder: "hover:border-[#25D366]/50"
    },
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      title: "Personal Phone",
      value: "076 192 0405",
      buttonText: "Call Me",
      link: "tel:+94761920405",
      bgClass: "bg-[var(--color-accent)]/20",
      iconBg: "bg-[var(--color-accent)]",
      hoverBorder: "hover:border-[var(--color-accent)]/50"
    },
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: "Email",
      value: "dananjayakulathunga413@gmail.com",
      buttonText: "Send Email",
      link: "mailto:dananjayakulathunga413@gmail.com",
      bgClass: "bg-blue-500/20",
      iconBg: "bg-blue-500",
      hoverBorder: "hover:border-blue-500/50"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      title: "Business WhatsApp",
      value: "076 280 7910",
      buttonText: "Business WhatsApp",
      link: "https://wa.me/94762807910",
      bgClass: "bg-[#25D366]/20",
      iconBg: "bg-[#25D366]",
      hoverBorder: "hover:border-[#25D366]/50"
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-24 px-5 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="heading-medium mb-4">Let's Connect</h2>
          <p className="text-xl text-[var(--color-text-secondary)]">
            Whether you want to get in touch personally or connect through SmartixZone, you can reach me through the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              className={`glass-card p-6 flex flex-col items-center text-center group ${method.hoverBorder} transition-colors duration-300`}
            >
              <div className={`w-14 h-14 rounded-full ${method.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {method.icon}
              </div>
              <h3 className="text-[var(--color-text-secondary)] text-sm uppercase tracking-wider mb-2">{method.title}</h3>
              <p className="text-white font-bold text-lg mb-6 truncate w-full">{method.value}</p>
              <a 
                href={method.link}
                target={method.link.startsWith('http') ? "_blank" : undefined}
                rel={method.link.startsWith('http') ? "noopener noreferrer" : undefined}
                className="w-full py-3 rounded-xl bg-[var(--color-primary)] border border-[var(--color-border)] text-white font-medium hover:bg-white hover:text-black transition-colors duration-300 block"
              >
                {method.buttonText}
              </a>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="glass-card p-8 sm:p-12 text-center max-w-4xl mx-auto relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's stay connected.</h2>
          <p className="text-xl text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto">
            Feel free to reach out through WhatsApp, phone, email, or SmartixZone.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <a href="https://wa.me/94711838834" target="_blank" rel="noopener noreferrer" className="btn-primary">
              WhatsApp
            </a>
            <a href="mailto:dananjayakulathunga413@gmail.com" className="btn-secondary">
              Email
            </a>
            <a href="#smartixzone" className="btn-secondary">
              SmartixZone
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
