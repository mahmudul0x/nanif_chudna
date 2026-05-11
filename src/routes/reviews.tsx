import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Patient Reviews | Hanif's Dental" },
      {
        name: "description",
        content:
          "Read honest testimonials from patients who experienced premium dental care at Hanif's Dental in Dinajpur.",
      },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  {
    name: "Farhana Akter",
    role: "Verified Patient",
    text: "Dr. Hanif is incredibly gentle and professional. My root canal was completely painless. The clinic feels like a luxury spa.",
    rating: 5,
  },
  {
    name: "Rashed Mahmud",
    role: "Verified Patient",
    text: "Best dental clinic in Dinajpur. Modern equipment, sterile environment and a doctor who truly cares about patients.",
    rating: 5,
  },
  {
    name: "Sumaiya Islam",
    role: "Verified Patient",
    text: "I got my smile makeover here and I can't stop smiling! Beautiful work, beautiful clinic, beautiful experience.",
    rating: 5,
  },
  {
    name: "Mohammad Tanvir",
    role: "Verified Patient",
    text: "Got dental implants done. The whole process was explained clearly and recovery was smooth. Highly recommend.",
    rating: 5,
  },
  {
    name: "Nasrin Sultana",
    role: "Verified Patient",
    text: "Took my child for her first dental visit. The staff was so kind. She actually wants to go back!",
    rating: 5,
  },
  {
    name: "Ariful Hasan",
    role: "Verified Patient",
    text: "Professional whitening gave me a Hollywood smile. Worth every taka. Friendly staff and zero waiting time.",
    rating: 5,
  },
  {
    name: "Tahmina Begum",
    role: "Verified Patient",
    text: "After years of dental anxiety, Dr. Hanif made me feel safe. My braces journey has been wonderful so far.",
    rating: 5,
  },
  {
    name: "Sabbir Ahmed",
    role: "Verified Patient",
    text: "Wisdom tooth extraction was done so smoothly. Almost no pain and excellent aftercare instructions.",
    rating: 5,
  },
  {
    name: "Rumana Khatun",
    role: "Verified Patient",
    text: "Honestly the most premium dental experience I've had in Bangladesh. World-class standards in Dinajpur!",
    rating: 5,
  },
];

function ReviewsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint text-mint-foreground text-xs font-semibold uppercase tracking-wider mb-4">
            Patient Reviews
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-navy">
            Stories of <span className="text-gradient-primary">Confident Smiles</span>
          </h1>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-gold text-gold" />
              ))}
            </div>
            <div className="font-display text-2xl font-bold text-navy">4.9</div>
            <div className="text-muted-foreground">/ 800+ reviews</div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="relative p-8 rounded-3xl bg-card shadow-soft border border-border/50 hover:shadow-elegant transition-all hover:-translate-y-1"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/15" />
              <div className="flex gap-1 mb-4">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed italic">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-navy">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
            Become Our Next Success Story
          </h2>
          <p className="mt-4 text-muted-foreground">Experience the care our patients rave about.</p>
          <Button asChild variant="hero" size="xl" className="mt-8">
            <Link to="/booking">Book Your Appointment</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
