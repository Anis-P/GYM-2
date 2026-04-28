import { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
}

export const PageHero = ({ eyebrow, title, description }: Props) => (
  <section className="relative overflow-hidden border-b border-border/40">
    <div className="absolute inset-0 bg-radial-glow opacity-60" />
    <div className="container relative py-20 md:py-28 text-center max-w-3xl">
      {eyebrow && (
        <p className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-5">
          {eyebrow}
        </p>
      )}
      <h1 className="font-display text-5xl md:text-7xl tracking-wide leading-none mb-5">
        {title}
      </h1>
      {description && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  </section>
);
