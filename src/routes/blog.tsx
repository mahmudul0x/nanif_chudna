import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import equipmentImg from "@/assets/equipment.jpg";
import heroSmile from "@/assets/hero-smile.jpg";
import heroClinic from "@/assets/hero-clinic.jpg";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Dental Blog & Education | Hanif's Dental" },
      {
        name: "description",
        content:
          "Expert dental health tips, treatment guides and oral care education from Hanif's Dental.",
      },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    id: 1,
    title: "5 Essential Dental Hygiene Tips for a Healthier Smile",
    excerpt: "Simple daily habits that can dramatically improve your oral health.",
    category: "Hygiene",
    date: "May 5, 2026",
    read: "5 min",
    img: heroSmile,
    featured: true,
  },
  {
    id: 2,
    title: "Root Canal Myths — What You Should Really Know",
    excerpt: "Modern root canal therapy is nothing like its reputation. Here's the truth.",
    category: "Treatments",
    date: "Apr 28, 2026",
    read: "6 min",
    img: equipmentImg,
  },
  {
    id: 3,
    title: "How to Care for Your Braces",
    excerpt: "A practical guide for keeping braces clean and your treatment on track.",
    category: "Orthodontics",
    date: "Apr 20, 2026",
    read: "4 min",
    img: heroClinic,
  },
  {
    id: 4,
    title: "Children's Dental Care: When to Start",
    excerpt: "Establishing healthy dental habits from the very first tooth.",
    category: "Pediatric",
    date: "Apr 12, 2026",
    read: "5 min",
    img: doctorPortrait,
  },
  {
    id: 5,
    title: "Teeth Whitening: Safe vs. Risky Methods",
    excerpt: "Why professional whitening always wins over DIY home kits.",
    category: "Cosmetic",
    date: "Apr 5, 2026",
    read: "4 min",
    img: heroSmile,
  },
  {
    id: 6,
    title: "Understanding Dental Implants",
    excerpt: "How modern implants restore both function and confidence.",
    category: "Implants",
    date: "Mar 28, 2026",
    read: "7 min",
    img: equipmentImg,
  },
];

function BlogPage() {
  const featured = posts.find((p) => p.featured)!;
  const rest = posts.filter((p) => !p.featured);
  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint text-mint-foreground text-xs font-semibold uppercase tracking-wider mb-4">
            Blog & Education
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-navy">Dental Wisdom</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert insights and practical tips to help you care for your smile.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <article className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-card rounded-3xl shadow-elegant border border-border/50 overflow-hidden mb-16">
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
              <img
                src={featured.img}
                alt={featured.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Featured ·{" "}
                {featured.category}
              </div>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-navy leading-tight">
                {featured.title}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{featured.excerpt}</p>
              <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" /> {featured.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" /> {featured.read}
                </span>
              </div>
              <Button variant="hero" className="mt-8">
                Read Article <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </article>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <article
                key={p.id}
                className="group bg-card rounded-3xl shadow-soft border border-border/50 overflow-hidden hover:shadow-elegant transition-all hover:-translate-y-1"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-primary font-semibold">
                    {p.category}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-semibold text-navy leading-snug group-hover:text-primary transition">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{p.date}</span>
                    <span>{p.read}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
