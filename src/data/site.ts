import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";
import trainer4 from "@/assets/trainer-4.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const services = [
  { icon: "Dumbbell", title: "Strength Training", desc: "Free weights, racks, and Olympic platforms with a coach on the floor every session." },
  { icon: "HeartPulse", title: "Cardio Zone", desc: "60+ machines including treadmills, rowers, assault bikes and StairMasters." },
  { icon: "Users", title: "Group Classes", desc: "HIIT, spin, bootcamp and mobility — 80+ classes per week to keep you moving." },
  { icon: "Hand", title: "Boxing & MMA", desc: "Full ring, heavy bags, and certified striking coaches for all skill levels." },
  { icon: "Flower2", title: "Yoga & Mobility", desc: "Heated studio, restorative flows and recovery sessions to keep you supple." },
  { icon: "Apple", title: "Nutrition Coaching", desc: "1-on-1 macros and meal planning to fuel your performance and physique." },
];

export const trainers = [
  { name: "Sarah Mitchell", role: "Head Strength Coach", image: trainer1, specialty: "Powerlifting · Hypertrophy", bio: "12 years coaching national-level lifters. NSCA-CSCS certified." },
  { name: "Marcus Reed", role: "Performance Coach", image: trainer2, specialty: "Athletic Conditioning", bio: "Former D1 athlete. Builds explosive, durable performers." },
  { name: "Elena Park", role: "Yoga & Mobility Lead", image: trainer3, specialty: "Vinyasa · Recovery", bio: "RYT-500. Brings decade of holistic movement experience." },
  { name: "Diego Alvarez", role: "Boxing Head Coach", image: trainer4, specialty: "Boxing · Conditioning", bio: "Pro boxing record 18-2. Trains champions and beginners alike." },
];

export const plans = [
  {
    name: "Starter",
    price: 29,
    tagline: "Get moving",
    features: ["Full gym floor access", "Locker & shower facility", "Basic mobile app", "Open hours (5am–11pm)", "1 free PT consult"],
    highlight: false,
  },
  {
    name: "Performance",
    price: 59,
    tagline: "Most popular",
    features: ["Everything in Starter", "Unlimited group classes", "24/7 facility access", "Sauna & recovery zone", "Quarterly body scan", "Guest passes (2/mo)"],
    highlight: true,
  },
  {
    name: "Elite",
    price: 119,
    tagline: "Train like a pro",
    features: ["Everything in Performance", "4 PT sessions / month", "Personalised program", "Nutrition coaching", "Priority class booking", "Unlimited guest passes"],
    highlight: false,
  },
];

export const testimonials = [
  { name: "James L.", role: "Member · 2 years", text: "Lost 38 lbs and finally hit a 405 deadlift. The coaches actually care — this place changed my life." },
  { name: "Priya R.", role: "Member · 1 year", text: "The group classes are addictive. Best community I've ever been part of, and the facility is spotless." },
  { name: "Kevin O.", role: "Member · 3 years", text: "Open 24/7, world-class equipment, and trainers who push you. There's no excuse not to show up." },
];

export const gallery = [
  { src: g1, alt: "Premium dumbbell rack with purple LED lighting" },
  { src: g6, alt: "Row of treadmills in modern gym" },
  { src: g2, alt: "High-energy spin class" },
  { src: g3, alt: "Functional training zone with kettlebells" },
  { src: g4, alt: "Boxing ring and heavy bags" },
  { src: g5, alt: "Yoga studio with mood lighting" },
];

export const stats = [
  { value: "12K+", label: "Active Members" },
  { value: "80+", label: "Weekly Classes" },
  { value: "24/7", label: "Member Access" },
  { value: "15+", label: "Expert Trainers" },
];
