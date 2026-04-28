import { Link } from "react-router-dom";
import { Dumbbell, HeartPulse, Users, Hand, Flower2, Apple, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/PageHero";
import { services } from "@/data/site";

const iconMap: Record<string, any> = { Dumbbell, HeartPulse, Users, Hand, Flower2, Apple };

const extraServices = [
  { title: "Recovery & Sauna", desc: "Infrared sauna, cold plunge, and percussive therapy guns to accelerate recovery between sessions." },
  { title: "Body Composition Scan", desc: "InBody 770 scans every quarter to track body fat, muscle mass, and progress with precision." },
  { title: "Sports Performance Lab", desc: "Force plates, velocity tracking, and movement screens for athletes who train with data." },
  { title: "Online Coaching", desc: "Custom programming and weekly check-ins from our coaches — train anywhere with our app." },
];

const Services = () => (
  <>
    <PageHero
      eyebrow="What we offer"
      title={<>Everything you need to <span className="text-gradient">level up</span></>}
      description="From beginner foundations to elite performance — explore the full Titan experience."
    />

    <section className="section-padding">
      <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </section>

    <section className="section-padding bg-card/30 border-y border-border/40">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Beyond the basics</p>
          <h2 className="font-display text-5xl tracking-wide">Premium <span className="text-gradient">extras</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {extraServices.map((s) => (
            <Card key={s.title} className="bg-gradient-card border-border/60 p-7 hover-lift">
              <h3 className="font-display text-2xl tracking-wide mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="hero" size="xl"><Link to="/booking">Try Any Service Free <ArrowRight /></Link></Button>
        </div>
      </div>
    </section>
  </>
);

export default Services;
