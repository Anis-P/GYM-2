import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { trainers } from "@/data/site";

const Trainers = () => (
  <>
    <PageHero
      eyebrow="The team"
      title={<>Coached by <span className="text-gradient">champions</span></>}
      description="Our coaches don't just train — they live this. Decades of combined experience, ready to push you to your peak."
    />

    <section className="section-padding">
      <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trainers.map((t) => (
          <article key={t.name} className="group relative overflow-hidden rounded-2xl bg-card border border-border/60 hover-lift">
            <div className="aspect-[3/4] overflow-hidden">
              <img src={t.image} alt={t.name} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" width={768} height={960} />
            </div>
            <div className="p-5">
              <p className="text-xs text-primary tracking-widest uppercase mb-1">{t.specialty}</p>
              <h3 className="font-display text-2xl tracking-wide">{t.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{t.role}</p>
              <p className="text-sm leading-relaxed mb-4">{t.bio}</p>
              <a href="#" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-secondary hover:bg-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-16">
        <h2 className="font-display text-4xl md:text-5xl tracking-wide mb-4">Want to <span className="text-gradient">work with us?</span></h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">Book a free consultation and we'll match you with the perfect coach for your goals.</p>
        <Button asChild variant="hero" size="xl"><Link to="/booking">Book a Consultation</Link></Button>
      </div>
    </section>
  </>
);

export default Trainers;
