import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Github, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/PageHero";
import { toast } from "sonner";
import { z } from "zod";

// Web3Forms — free email-forwarding service.
// 1) Sign up at https://web3forms.com (30 seconds, no account needed beyond your email)
// 2) Generate an access key for anisgamer226@gmail.com
// 3) Replace the value below. Submissions will be emailed straight to your inbox.
const WEB3FORMS_KEY = "REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Invalid email").max(160),
  phone: z.string().trim().min(6, "Phone too short").max(30),
  message: z.string().trim().min(10, "Tell us a bit more").max(1500),
});

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      message: String(fd.get("message") || ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }

    if (WEB3FORMS_KEY.startsWith("REPLACE_")) {
      toast.error("Add your Web3Forms key in src/pages/Contact.tsx to enable email delivery.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Titan Fitness enquiry from ${parsed.data.name}`,
          from_name: "Titan Fitness Website",
          ...parsed.data,
        }),
      });
      const json = await res.json();
      if (json.success) {
        toast.success("Message sent! We'll be in touch within 24 hours.");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error(json.message || "Something went wrong. Try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={<>Let's <span className="text-gradient">talk training</span></>}
        description="Questions about membership, classes, or coaching? Drop us a message — we usually reply within a few hours."
      />

      <section className="section-padding">
        <div className="container grid lg:grid-cols-3 gap-8">
          {/* CONTACT INFO */}
          <div className="space-y-4">
            {[
              { icon: MapPin, label: "Visit us", value: "1247 Iron Strength Avenue\nDowntown District" },
              { icon: Phone, label: "Call us", value: "+1 (555) 248-7264" },
              { icon: Mail, label: "Email", value: "hello@titanfit.com" },
              { icon: Clock, label: "Hours", value: "Mon–Fri: 5am – 11pm\nSat: 6am – 10pm · Sun: 7am – 8pm\nMembers: 24/7" },
            ].map((c) => (
              <Card key={c.label} className="bg-gradient-card border-border/60 p-5 flex gap-4 hover-lift">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">{c.label}</p>
                  <p className="whitespace-pre-line text-sm leading-relaxed">{c.value}</p>
                </div>
              </Card>
            ))}

            <Button asChild variant="outlineGlow" size="lg" className="w-full mt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <Github /> Download Source (GitHub)
              </a>
            </Button>
            <p className="text-xs text-muted-foreground">
              Connect this project to GitHub from the Lovable editor (top right → GitHub) to enable a real download link.
            </p>
          </div>

          {/* FORM */}
          <Card className="bg-gradient-card border-border/60 p-8 lg:col-span-2">
            <h2 className="font-display text-3xl tracking-wide mb-2">Send us a message</h2>
            <p className="text-muted-foreground text-sm mb-6">All fields are required.</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your full name" required maxLength={80} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="you@email.com" required maxLength={160} className="mt-1.5" />
                </div>
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" required maxLength={30} className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={6} placeholder="How can we help?" required maxLength={1500} className="mt-1.5" />
              </div>
              <Button type="submit" variant="hero" size="lg" disabled={loading} className="w-full sm:w-auto">
                {loading ? (<><Loader2 className="animate-spin" /> Sending…</>) : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* MAP */}
      <section className="section-padding pt-0">
        <div className="container">
          <div className="rounded-2xl overflow-hidden border border-border/60 shadow-card">
            <iframe
              title="Titan Fitness location"
              src="https://www.google.com/maps?q=Times+Square+New+York&output=embed"
              className="w-full h-[420px] grayscale-[40%] contrast-110"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
