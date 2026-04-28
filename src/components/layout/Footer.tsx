import { Link } from "react-router-dom";
import { Dumbbell, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border/40 bg-card/40 mt-20">
    <div className="container py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
      <div className="space-y-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
            <Dumbbell className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-2xl tracking-wider">
            TITAN<span className="text-primary">FIT</span>
          </span>
        </Link>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
          Premium 24/7 strength & conditioning club. Built for those who refuse to settle.
        </p>
        <div className="flex gap-3 pt-2">
          {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary hover:bg-primary transition-colors"
              aria-label="Social link"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-display text-lg tracking-wide mb-4">Explore</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {[
            ["About Us", "/about"],
            ["Services", "/services"],
            ["Pricing", "/pricing"],
            ["Trainers", "/trainers"],
            ["Gallery", "/gallery"],
          ].map(([label, to]) => (
            <li key={to}><Link to={to} className="hover:text-primary transition-colors">{label}</Link></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display text-lg tracking-wide mb-4">Hours</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex justify-between"><span>Mon – Fri</span><span className="text-foreground">5:00 – 23:00</span></li>
          <li className="flex justify-between"><span>Saturday</span><span className="text-foreground">6:00 – 22:00</span></li>
          <li className="flex justify-between"><span>Sunday</span><span className="text-foreground">7:00 – 20:00</span></li>
          <li className="flex justify-between pt-2 border-t border-border/40 mt-2"><span>Members</span><span className="text-primary font-semibold">24/7 Access</span></li>
        </ul>
      </div>

      <div>
        <h4 className="font-display text-lg tracking-wide mb-4">Contact</h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /> 1247 Iron Strength Avenue, Downtown District</li>
          <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary shrink-0" /> +1 (555) 248-7264</li>
          <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary shrink-0" /> hello@titanfit.com</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border/40">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} TITAN FITNESS. All rights reserved.</p>
        <p>Built for warriors. Train hard. Stay humble.</p>
      </div>
    </div>
  </footer>
);
