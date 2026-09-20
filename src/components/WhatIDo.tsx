import { Briefcase, Lightbulb, Users, TrendingUp } from 'lucide-react';

export function WhatIDo() {
  const cards = [
    {
      icon: <Briefcase className="w-8 h-8 text-[var(--color-accent)]" />,
      title: "Business & Enterprise",
      description: "Running and growing my own business ventures with a focus on practical value."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-[var(--color-accent)]" />,
      title: "Creative Thinking",
      description: "Always looking for new ideas, better ways to do things, and creative approaches to everyday challenges."
    },
    {
      icon: <Users className="w-8 h-8 text-[var(--color-accent)]" />,
      title: "Connecting with People",
      description: "Building meaningful relationships and fostering a strong community around my work."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[var(--color-accent)]" />,
      title: "Personal Growth",
      description: "Constantly learning, improving, and seeking new experiences to grow both personally and professionally."
    }
  ];

  return (
    <section id="whatido" className="py-20 md:py-24 px-5 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="heading-medium mb-4">What I Do</h2>
          <p className="text-xl text-[var(--color-text-secondary)]">
            Areas that represent my professional interests and activities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="glass-card p-8 sm:p-10 group hover:-translate-y-2 hover:border-[var(--color-accent)]/50 transition-all duration-300"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-[var(--color-border)]">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
