import { Link } from "react-router-dom";
import { ArrowRight, Check, Star, Dumbbell, HeartPulse, Users, Hand, Flower2, Apple, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImg from "@/assets/hero-gym.jpg";
import aboutImg from "@/assets/about-cta.jpg";
import { services, trainers, plans, testimonials, stats } from "@/data/site";

const iconMap: Record<string, any> = { Dumbbell, HeartPulse, Users, Hand, Flower2, Apple };

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Athlete training with barbell"
            className="h-full w-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container relative py-24 md:py-36 lg:py-44">
          <div className="max-w-2xl space-y-6 animate-fade-up">
            <p className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase">
              ★ #1 Strength Club in the City
            </p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-wide leading-[0.9]">
              UNLEASH THE
              <br />
              <span className="text-gradient">TITAN</span> WITHIN
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Premium 24/7 gym with elite coaches, world-class equipment, and a community
              that refuses to settle. Your transformation starts today.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/booking">Start Free Trial <ArrowRight className="ml-1" /></Link>
              </Button>
              <Button asChild variant="outlineGlow" size="xl">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-6">
              <div className="flex -space-x-3">
                {trainers.slice(0, 4).map((t) => (
                  <img
                    key={t.name}
                    src={t.image}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover border-2 border-background"
                    loading="lazy"
                    width={40}
                    height={40}
                  />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 text-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">12,000+ members training strong</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/40 bg-card/40">
        <div className="container py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-5xl md:text-6xl text-gradient">{s.value}</p>
              <p className="text-sm text-muted-foreground tracking-widest uppercase mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">What we offer</p>
            <h2 className="font-display text-5xl md:text-6xl tracking-wide mb-4">Built for every <span className="text-gradient">goal</span></h2>
            <p className="text-muted-foreground">From your first rep to your next personal record — we have the equipment, classes, and coaches to get you there.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <Card key={s.title} className="bg-gradient-card border-border/60 p-8 hover-lift group">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-2xl tracking-wide mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT CTA */}
      <section className="section-padding bg-card/30 border-y border-border/40">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={aboutImg} alt="Athlete deadlifting" className="rounded-2xl shadow-card w-full h-[500px] object-cover" loading="lazy" width={1280} height={960} />
            <div className="absolute -bottom-6 -right-6 bg-gradient-primary p-6 rounded-2xl glow-ring hidden md:block">
              <p className="font-display text-4xl text-primary-foreground">15+</p>
              <p className="text-xs text-primary-foreground/90 tracking-widest uppercase">Years Experience</p>
            </div>
          </div>
          <div>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">About Titan Fitness</p>
            <h2 className="font-display text-5xl md:text-6xl tracking-wide mb-5 leading-none">
              More than a gym.<br />A <span className="text-gradient">brotherhood</span>.
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Since 2009, Titan Fitness has been the home of serious lifters, weekend warriors,
              and anyone who shows up to do the work. We built this place around one belief:
              the right environment changes everything.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "World-class equipment from Eleiko, Rogue & Hammer Strength",
                "Coaches with national-level credentials",
                "Spotless 24/7 facility with sauna & recovery zone",
                "A community that pushes you to be better",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="hero" size="lg">
              <Link to="/about">Read Our Story <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TRAINERS PREVIEW */}
      <section className="section-padding">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Meet the team</p>
              <h2 className="font-display text-5xl md:text-6xl tracking-wide">Coached by the <span className="text-gradient">best</span></h2>
            </div>
            <Button asChild variant="outlineGlow">
              <Link to="/trainers">All Trainers <ArrowRight /></Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((t) => (
              <div key={t.name} className="group relative overflow-hidden rounded-2xl bg-card border border-border/60 hover-lift">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={t.image} alt={t.name} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" width={768} height={960} />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/90 to-transparent p-5 pt-16">
                  <p className="text-xs text-primary tracking-widest uppercase mb-1">{t.specialty}</p>
                  <h3 className="font-display text-2xl tracking-wide">{t.name}</h3>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="section-padding bg-card/30 border-y border-border/40">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Membership</p>
            <h2 className="font-display text-5xl md:text-6xl tracking-wide mb-4">Choose your <span className="text-gradient">plan</span></h2>
            <p className="text-muted-foreground">No long contracts. Cancel anytime. Just results.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((p) => (
              <Card
                key={p.name}
                className={`p-8 relative ${p.highlight ? "bg-gradient-primary text-primary-foreground border-0 lg:scale-105 glow-ring" : "bg-gradient-card border-border/60"}`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background text-primary text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase border border-primary/40">
                    {p.tagline}
                  </span>
                )}
                <h3 className="font-display text-3xl tracking-wide mb-1">{p.name}</h3>
                <p className={`text-sm mb-5 ${p.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {!p.highlight && p.tagline}
                  {p.highlight && "Best value · Save 20%"}
                </p>
                <div className="mb-6">
                  <span className="font-display text-6xl">${p.price}</span>
                  <span className={p.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}>/month</span>
                </div>
                <ul className="space-y-3 mb-8 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant={p.highlight ? "secondary" : "hero"} size="lg" className="w-full">
                  <Link to="/booking">Get Started</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Real members</p>
            <h2 className="font-display text-5xl md:text-6xl tracking-wide">Results speak <span className="text-gradient">loudest</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="bg-gradient-card border-border/60 p-8 hover-lift">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-foreground/90 leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex gap-0.5 text-primary mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 md:p-16 text-center glow-ring">
            <div className="absolute inset-0 bg-radial-glow opacity-30" />
            <div className="relative">
              <h2 className="font-display text-5xl md:text-7xl tracking-wide text-primary-foreground mb-5 leading-none">
                READY TO BECOME UNSTOPPABLE?
              </h2>
              <p className="text-primary-foreground/90 text-lg max-w-xl mx-auto mb-8">
                Your first week is on us. Walk in, train hard, see why thousands choose Titan.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="xl" variant="secondary">
                  <Link to="/booking">Claim Free Week <ArrowRight /></Link>
                </Button>
                <Button asChild size="xl" variant="outlineGlow" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/contact">Talk to a Coach</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
