import { useState } from "react";
import { Calendar, Clock, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/PageHero";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { z } from "zod";
import { plans } from "@/data/site";

// Same Web3Forms key — submissions go to anisgamer226@gmail.com
const WEB3FORMS_KEY = "REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(6).max(30),
  email: z.string().trim().email().max(160),
  plan: z.string().min(1, "Please select a plan"),
  timing: z.string().min(1, "Pick a preferred time"),
  startDate: z.string().min(1, "Select a start date"),
  goals: z.string().trim().max(500).optional(),
});

const Booking = () => {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      plan: String(fd.get("plan") || ""),
      timing: String(fd.get("timing") || ""),
      startDate: String(fd.get("startDate") || ""),
      goals: String(fd.get("goals") || ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }

    if (WEB3FORMS_KEY.startsWith("REPLACE_")) {
      toast.error("Add your Web3Forms key in src/pages/Booking.tsx to receive bookings.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New gym booking — ${parsed.data.name} (${parsed.data.plan})`,
          from_name: "Titan Fitness Booking",
          ...parsed.data,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setDone(true);
        toast.success("Booking received! Check your email for confirmation.");
      } else {
        toast.error(json.message || "Something went wrong.");
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
        eyebrow="Join the club"
        title={<>Start your <span className="text-gradient">free week</span></>}
        description="Book your first session in under 60 seconds. No payment required to start."
      />

      <section className="section-padding">
        <div className="container max-w-3xl">
          <Card className="bg-gradient-card border-border/60 p-8 md:p-10">
            {done ? (
              <div className="text-center py-10">
                <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-5" />
                <h2 className="font-display text-4xl tracking-wide mb-3">You're <span className="text-gradient">in!</span></h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  We've received your booking and a coach will contact you shortly to confirm
                  your first session. Get ready to train.
                </p>
                <Button onClick={() => setDone(false)} variant="outlineGlow" size="lg" className="mt-6">
                  Book Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" name="name" required maxLength={80} className="mt-1.5" placeholder="Alex Johnson" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" required maxLength={30} className="mt-1.5" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required maxLength={160} className="mt-1.5" placeholder="you@email.com" />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="plan">Membership plan</Label>
                    <Select name="plan" required>
                      <SelectTrigger className="mt-1.5"><SelectValue placeholder="Choose a plan" /></SelectTrigger>
                      <SelectContent>
                        {plans.map((p) => (
                          <SelectItem key={p.name} value={p.name}>{p.name} — ${p.price}/mo</SelectItem>
                        ))}
                        <SelectItem value="Free Trial">Free Trial Week</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="timing">Preferred timing</Label>
                    <Select name="timing" required>
                      <SelectTrigger className="mt-1.5"><SelectValue placeholder="Pick a window" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Early morning (5–8am)">Early morning (5–8am)</SelectItem>
                        <SelectItem value="Morning (8–11am)">Morning (8–11am)</SelectItem>
                        <SelectItem value="Midday (11am–2pm)">Midday (11am–2pm)</SelectItem>
                        <SelectItem value="Afternoon (2–5pm)">Afternoon (2–5pm)</SelectItem>
                        <SelectItem value="Evening (5–8pm)">Evening (5–8pm)</SelectItem>
                        <SelectItem value="Late (8–11pm)">Late (8–11pm)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="startDate" className="flex items-center gap-2"><Calendar className="h-4 w-4" /> Preferred start date</Label>
                  <Input id="startDate" name="startDate" type="date" required min={new Date().toISOString().split("T")[0]} className="mt-1.5" />
                </div>

                <div>
                  <Label htmlFor="goals">Your goals (optional)</Label>
                  <Input id="goals" name="goals" maxLength={500} className="mt-1.5" placeholder="e.g. lose 10 lbs, get my first pull-up, train for a marathon" />
                </div>

                <Button type="submit" variant="hero" size="xl" className="w-full" disabled={loading}>
                  {loading ? (<><Loader2 className="animate-spin" /> Submitting…</>) : (<><Clock /> Confirm Booking</>)}
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  By submitting you agree to our terms. No payment is taken at this step.
                </p>
              </form>
            )}
          </Card>
        </div>
      </section>
    </>
  );
};

export default Booking;
