import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionHeading } from "@/components/site/SectionHeading";
import { services } from "@/lib/services-data";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  Smile,
  Star,
  CheckCircle2,
  Sparkles,
  Calendar,
} from "lucide-react";
import heroClinic from "@/assets/hero-clinic.jpg";
import heroSmile from "@/assets/hero-smile.jpg";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import heroCoupleClinic from "@/assets/hero-couple-clinic.jpg";
import equipmentImg from "@/assets/equipment.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hanif's Dental — Premium Dental Clinic in Dinajpur" },
      {
        name: "description",
        content:
          "World-class cosmetic & advanced dental care in Dinajpur led by Dr. মো. আবু হানিফ. Implants, root canals, smile design and more.",
      },
    ],
  }),
  component: HomePage,
});

const heroSlides = [
  {
    image: heroClinic,
    eyebrow: "Premium Dental Care",
    title: ["Creating Confident", "& Healthy Smiles"],
    subtitle: "Advanced dental care with compassion and precision in the heart of Dinajpur.",
    cta1: { label: "Book Appointment", to: "/booking" as const },
    cta2: { label: "Explore Treatments", to: "/services" as const },
  },
  {
    image: doctorPortrait,
    eyebrow: "Doctor Expertise",
    title: ["Expert Dental Care", "by Dr. Abu Hanif"],
    subtitle: "Trusted by patients across Dinajpur — BDS (RU), PGT (OMS), PGT (Endodontics).",
    cta1: { label: "Meet the Doctor", to: "/about" as const },
    cta2: { label: "Book Consultation", to: "/booking" as const },
  },
  {
    image: heroSmile,
    eyebrow: "Smile Transformation",
    title: ["Transforming Smiles,", "Changing Lives"],
    subtitle: "From cosmetic veneers to complete smile makeovers — designed around you.",
    cta1: { label: "View Smile Gallery", to: "/gallery" as const },
    cta2: { label: "Learn More", to: "/services" as const },
  },
];

const homepageHeroSlides = [
  heroSlides[0],
  heroSlides[1],
  {
    ...heroSlides[2],
    image: heroCoupleClinic,
    eyebrow: "Trusted Experience",
    title: ["Welcoming Care", "For Every Patient"] as [string, string],
    subtitle:
      "A warm, modern dental experience for individuals and families who value comfort, trust, and real results.",
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <DoctorSection />
      <ExperienceTimeline />
      <GalleryPreview />
      <TestimonialsPreview />
      <FinalCTA />
    </>
  );
}

function Hero() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % homepageHeroSlides.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-navy">
      {homepageHeroSlides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === active ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={s.image}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover ${i === active ? "animate-hero-zoom" : ""}`}
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
        </div>
      ))}

      {/* floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-primary-glow/60 blur-sm animate-float"
            style={{
              top: `${10 + i * 13}%`,
              left: `${5 + i * 14}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + i}s`,
            }}
          />
        ))}
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-primary-glow/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 pt-20">
        <div className="max-w-2xl text-navy-foreground">
          {homepageHeroSlides.map((s, i) => (
            <div key={i} className={`${i === active ? "block animate-fade-up" : "hidden"}`}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow mb-6">
                <Sparkles className="h-3.5 w-3.5" /> {s.eyebrow}
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05]">
                {s.title[0]}
                <br />
                <span className="text-gradient-gold">{s.title[1]}</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-navy-foreground/80 max-w-xl leading-relaxed">
                {s.subtitle}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild variant="hero" size="xl">
                  <Link to={s.cta1.to}>
                    {s.cta1.label} <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="glass" size="xl">
                  <Link to={s.cta2.to}>{s.cta2.label}</Link>
                </Button>
              </div>
            </div>
          ))}

          <div className="mt-12 flex gap-2">
            {homepageHeroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === active ? "w-12 bg-primary-glow" : "w-6 bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const trustItems = [
  { icon: Users, value: "5,000+", label: "Happy Patients" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Smile, value: "1,200+", label: "Smile Makeovers" },
  { icon: ShieldCheck, value: "100%", label: "Sterile Standards" },
];

function TrustBar() {
  return (
    <section className="relative -mt-6 md:mt-2 z-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="glass rounded-3xl shadow-elegant p-6 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((t) => (
            <div key={t.label} className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                <t.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-navy">{t.value}</div>
                <div className="text-sm text-muted-foreground">{t.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  const featured = services.slice(0, 6);
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Our Treatments"
          title={
            <>
              Comprehensive Care, <span className="text-gradient-primary">Crafted For You</span>
            </>
          }
          description="From routine check-ups to advanced cosmetic procedures, we deliver world-class dentistry under one roof."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((s) => (
            <Link
              key={s.slug}
              to="/services"
              className="group relative overflow-hidden rounded-3xl bg-card shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1 border border-border/50"
            >
              <div className="relative h-56 overflow-hidden">
                {s.image ? (
                  <img
                    src={s.image}
                    alt={s.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />
                <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <s.icon className="h-7 w-7" />
                </div>
              </div>
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition" />
              <div className="relative p-8">
                <h3 className="font-display text-2xl font-semibold text-navy mb-2">{s.name}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{s.short}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/services">
              View All Services <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function DoctorSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-hero relative overflow-hidden">
      <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl rounded-[3rem]" />
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-elegant aspect-[4/5]">
            <img
              src={doctorPortrait}
              alt="Dr. মো. আবু হানিফ"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-elegant max-w-[220px]">
            <div className="flex gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <div className="text-2xl font-display font-bold text-navy">4.9/5</div>
            <div className="text-xs text-muted-foreground">From 800+ patient reviews</div>
          </div>
        </div>

        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint text-mint-foreground text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Meet Your Dentist
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy leading-tight">
            Dr. মো. আবু হানিফ
          </h2>
          <p className="mt-2 text-lg text-primary font-medium">Founder & Lead Dental Surgeon</p>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            With years of advanced training in oral & maxillofacial surgery and endodontics, Dr.
            Hanif combines clinical excellence with genuine compassion — ensuring every patient
            leaves with a healthier smile and a calmer heart.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {["BDS (RU)", "PGT (OMS)", "PGT (Endodontics)", "FCPS 1st Part (OMS)"].map((q) => (
              <li
                key={q}
                className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/60"
              >
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span className="font-medium text-navy">{q}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild variant="hero" size="lg">
              <Link to="/about">Read Full Profile</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/booking">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", title: "Consultation", desc: "Comprehensive discussion of your concerns and goals." },
  { n: "02", title: "Diagnosis", desc: "Advanced imaging and thorough oral examination." },
  {
    n: "03",
    title: "Treatment Plan",
    desc: "Personalized roadmap tailored to your needs and budget.",
  },
  { n: "04", title: "Procedure", desc: "Precision treatment in a calm, sterile environment." },
  { n: "05", title: "Recovery", desc: "Ongoing support and aftercare for lasting results." },
];

function ExperienceTimeline() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Patient Journey"
          title={
            <>
              Your Treatment <span className="text-gradient-primary">Experience</span>
            </>
          }
          description="A premium, calm and transparent journey — from your first call to your brightest smile."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative p-6 rounded-2xl bg-card border border-border/50 hover:shadow-soft transition-all hover:-translate-y-1"
            >
              <div className="font-display text-5xl font-bold text-gradient-primary mb-2">
                {s.n}
              </div>
              <h3 className="font-semibold text-navy text-lg">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryPreview() {
  return (
    <section className="py-24 md:py-32 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Smile Gallery"
          title={
            <>
              Real Smiles, <span className="text-gradient-primary">Real Transformations</span>
            </>
          }
          description="A glimpse into the lives we've changed and the confidence we've restored."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2 relative overflow-hidden rounded-3xl group shadow-soft aspect-square md:aspect-auto">
            <img
              src={heroSmile}
              alt="Smile transformation"
              className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-6">
              <div className="text-navy-foreground">
                <div className="text-xs uppercase tracking-widest text-primary-glow">Featured</div>
                <div className="font-display text-2xl">Complete Smile Makeover</div>
              </div>
            </div>
          </div>
          {[heroClinic, equipmentImg, doctorPortrait, heroClinic].map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl group shadow-soft aspect-square"
            >
              <img
                src={img}
                alt=""
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/gallery">
              Explore Full Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

const reviews = [
  {
    name: "Farhana Akter",
    text: "Dr. Hanif is incredibly gentle and professional. My root canal was completely painless. Highly recommended!",
    rating: 5,
  },
  {
    name: "Rashed Mahmud",
    text: "Best dental clinic in Dinajpur. Modern equipment, sterile environment and a doctor who truly cares.",
    rating: 4,
  },
  {
    name: "Sumaiya Islam",
    text: "I got my smile makeover here and I can't stop smiling! Beautiful work, beautiful clinic.",
    rating: 5,
  },
  {
    name: "Nusrat Jahan",
    text: "Clinic ta onek clean and staff ra khub helpful. Teeth whitening er result dekhte really bhalo lagse.",
    rating: 4,
  },
  {
    name: "Mehedi Hasan",
    text: "Appointment process easy chilo, treatment o smooth. Aro ektu wait kom hole perfect hoto.",
    rating: 3,
  },
  {
    name: "Sharmeen Rahman",
    text: "Alhamdulillah, amar braces journey ekhane khub bhalo jacche. Doctor explains everything in simple English and Bangla.",
    rating: 5,
  },
  {
    name: "Tanvir Ahmed",
    text: "Extraction niye onek voy chilo, but honestly experience ta expected er cheye much better chilo.",
    rating: 4,
  },
  {
    name: "Priyanka Saha",
    text: "Service bhalo, but amar slot ta ektu late start hoyechilo. Overall doctor was caring and treatment was good.",
    rating: 2,
  },
];

function TestimonialsPreview() {
  const autoplay = Autoplay({ delay: 3500, stopOnInteraction: true, stopOnMouseEnter: true });

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Patient Stories"
          title={
            <>
              Loved by <span className="text-gradient-primary">Our Patients</span>
            </>
          }
          description="Honest words from real people whose smiles we've cared for."
        />
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplay]}
          className="mx-auto max-w-6xl"
        >
          <CarouselContent className="-ml-6">
            {reviews.map((r) => (
              <CarouselItem key={r.name} className="pl-6 md:basis-1/2 xl:basis-1/3">
                <div className="h-full rounded-3xl bg-card p-8 shadow-soft border border-border/50 relative">
                  <div className="flex gap-1 mb-4">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-foreground/80 leading-relaxed italic">"{r.text}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-11 w-11 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-navy">{r.name}</div>
                      <div className="text-xs text-muted-foreground">Verified Patient</div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex items-center justify-center gap-3">
            <CarouselPrevious className="static translate-y-0 rounded-full border-border/60" />
            <CarouselNext className="static translate-y-0 rounded-full border-border/60" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-navy p-12 md:p-20 text-navy-foreground shadow-elegant">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-dark text-xs font-semibold uppercase tracking-wider mb-6 text-primary-glow">
              <Calendar className="h-3.5 w-3.5" /> Book Today
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              Your Brightest Smile <span className="text-gradient-gold">Starts Here</span>
            </h2>
            <p className="mt-6 text-lg text-navy-foreground/80 max-w-xl">
              Book your consultation with Dr. Abu Hanif today. Limited slots available each week.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="gold" size="xl">
                <Link to="/booking">Book Appointment</Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <a href="tel:01783215958">Call: 01783-215958</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
