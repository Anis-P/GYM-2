import { Link } from "react-router-dom";
import { Award, Target, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/PageHero";
import aboutImg from "@/assets/about-cta.jpg";
import g1 from "@/assets/gallery-1.jpg";
import { stats } from "@/data/site";

const values = [
  { icon: Target, title: "Discipline", desc: "Show up. Do the work. Repeat. There are no shortcuts to anything worth having." },
  { icon: Heart, title: "Community", desc: "We rise together. Every member is family — we celebrate every PR and pick each other up." },
  { icon: Award, title: "Excellence", desc: "World-class equipment, certified coaches, immaculate facility. We refuse to cut corners." },
  { icon: Zap, title: "Intensity", desc: "Comfort is the enemy of growth. We train with purpose and walk out stronger." },
];

const About = () => (
  <>
    <PageHero
      eyebrow="Our Story"
      title={<>Built by lifters, <span className="text-gradient">for lifters</span></>}
      description="Titan Fitness opened its doors in 2009 with a simple mission: build the gym we always wished existed."
    />

    <section className="section-padding">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <img src={aboutImg} alt="Athlete training" className="rounded-2xl shadow-card w-full h-[500px] object-cover" loading="lazy" width={1280} height={960} />
        <div>
          <h2 className="font-display text-5xl tracking-wide mb-5">From a 2,000 sq ft <span className="text-gradient">garage</span> to a movement</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Coach Marcus opened the original Titan space with three squat racks, a deadlift platform,
            and a single rule: leave it better than you found it. Members started bringing their
            friends. Friends became coaches. Coaches became champions.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Today we operate the city's premier strength and conditioning facility — 35,000 sq ft of
            premium equipment, 15+ certified coaches, and a community of 12,000+ members who refuse
            to settle for average.
          </p>
          <Button asChild variant="hero" size="lg"><Link to="/booking">Join the Movement</Link></Button>
        </div>
      </div>
    </section>

    <section className="section-padding bg-card/30 border-y border-border/40">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">What we stand for</p>
          <h2 className="font-display text-5xl tracking-wide">Our <span className="text-gradient">core values</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <Card key={v.title} className="bg-gradient-card border-border/60 p-7 hover-lift text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                <v.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl tracking-wide mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="font-display text-5xl tracking-wide mb-5">Numbers we're <span className="text-gradient">proud of</span></h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Real members. Real results. We measure what matters: the people who walk through our doors
            stronger than the day they joined.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-gradient-card border border-border/60 rounded-2xl p-6">
                <p className="font-display text-5xl text-gradient">{s.value}</p>
                <p className="text-xs text-muted-foreground tracking-widest uppercase mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <img src={g1} alt="Premium dumbbell rack" className="order-1 lg:order-2 rounded-2xl shadow-card w-full h-[500px] object-cover" loading="lazy" width={1024} height={768} />
      </div>
    </section>
  </>
);

export default About;
