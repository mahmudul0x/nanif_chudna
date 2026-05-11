import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, GraduationCap, Stethoscope, Heart } from "lucide-react";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Abu Hanif | Hanif's Dental" },
      {
        name: "description",
        content:
          "Meet Dr. মো. আবু হানিফ — BDS (RU), PGT (OMS), PGT (Endodontics), FCPS 1st Part (OMS). Premium dental care in Dinajpur.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint text-mint-foreground text-xs font-semibold uppercase tracking-wider mb-4">
            About the Doctor
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-navy">
            Meet Dr. Abu Hanif
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate dental surgeon dedicated to bringing world-class care, compassion, and
            confident smiles to Dinajpur.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl rounded-[3rem]" />
            <img
              src={doctorPortrait}
              alt="Dr. Abu Hanif"
              className="relative rounded-[2.5rem] shadow-elegant aspect-[4/5] object-cover w-full"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-display text-4xl font-bold text-navy mb-2">Dr. মো. আবু হানিফ</h2>
            <p className="text-primary font-medium text-lg">Founder & Lead Dental Surgeon</p>
            <div className="my-6 h-px bg-gradient-to-r from-primary/40 to-transparent" />
            <p className="text-muted-foreground leading-relaxed text-lg">
              Dr. Abu Hanif is the founder of Hanif's Dental, one of Dinajpur's most trusted modern
              dental practices. With advanced training in oral & maxillofacial surgery and
              endodontics, he brings the highest standards of international dentistry to every
              patient he serves.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mt-4">
              His philosophy is simple: every patient deserves to be heard, comforted, and treated
              with the same precision he would offer his own family.
            </p>

            <h3 className="mt-10 font-display text-2xl text-navy mb-4 flex items-center gap-2">
              <GraduationCap className="text-primary" /> Qualifications
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                { q: "BDS (RU)", d: "Bachelor of Dental Surgery — University of Rajshahi" },
                { q: "PGT (OMS)", d: "Post-Graduate Training — Oral & Maxillofacial Surgery" },
                { q: "PGT (Endodontics)", d: "Post-Graduate Training — Endodontics" },
                { q: "FCPS Part 1 (OMS)", d: "Fellowship — College of Physicians & Surgeons" },
              ].map((x) => (
                <li key={x.q} className="p-4 rounded-2xl bg-card border border-border/60">
                  <div className="flex items-center gap-2 font-semibold text-navy">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> {x.q}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{x.d}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "10+ Years",
                desc: "of clinical excellence in advanced dentistry.",
              },
              {
                icon: Stethoscope,
                title: "5,000+ Patients",
                desc: "treated with personalized, compassionate care.",
              },
              {
                icon: Heart,
                title: "Patient-First",
                desc: "approach with genuine empathy at every visit.",
              },
            ].map((x) => (
              <div
                key={x.title}
                className="p-8 rounded-3xl bg-card shadow-soft border border-border/50 text-center"
              >
                <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-glow mb-4">
                  <x.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl text-navy">{x.title}</h3>
                <p className="text-muted-foreground mt-2">{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-[2.5rem] bg-gradient-navy text-navy-foreground p-12 md:p-16 text-center shadow-elegant relative overflow-hidden">
            <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
            <div className="relative">
              <p className="text-2xl md:text-3xl font-display italic leading-relaxed">
                "Every smile we restore is a story of confidence regained. That's what makes this
                work meaningful."
              </p>
              <p className="mt-6 text-primary-glow font-semibold">— Dr. Abu Hanif</p>
              <Button asChild variant="gold" size="lg" className="mt-8">
                <Link to="/booking">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
