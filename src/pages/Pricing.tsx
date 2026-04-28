import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/PageHero";
import { plans } from "@/data/site";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const faq = [
  { q: "Is there a contract or sign-up fee?", a: "No contracts and no sign-up fees. All memberships are month-to-month — cancel any time with 30 days' notice." },
  { q: "Can I freeze my membership?", a: "Yes — you can freeze for up to 3 months per year (medical, travel, or any reason) at no charge." },
  { q: "Do you offer student or family discounts?", a: "Students get 20% off any plan with a valid ID. Couple memberships save 15% per person. Talk to us at the front desk." },
  { q: "What's included in the free trial?", a: "Your free week includes full gym access, all group classes, one PT session, and a body composition scan." },
  { q: "What payment methods do you accept?", a: "All major cards, ACH bank transfer, Apple Pay and Google Pay. Annual plans get 2 months free." },
];

const Pricing = () => (
  <>
    <PageHero
      eyebrow="Membership"
      title={<>Simple pricing. <span className="text-gradient">Real results.</span></>}
      description="No hidden fees. No long contracts. Just world-class training at a fair price."
    />

    <section className="section-padding">
      <div className="container grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
      <p className="text-center text-muted-foreground text-sm mt-8">
        All plans include free WiFi, parking, towel service, and access to our member app.
      </p>
    </section>

    <section className="section-padding bg-card/30 border-y border-border/40">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">FAQ</p>
          <h2 className="font-display text-5xl tracking-wide">Got <span className="text-gradient">questions?</span></h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faq.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border/60">
              <AccordionTrigger className="text-left font-semibold hover:text-primary">{item.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </>
);

export default Pricing;
