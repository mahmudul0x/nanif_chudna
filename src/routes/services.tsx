import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/SectionHeading";
import { services } from "@/lib/services-data";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Dental Services | Hanif's Dental Dinajpur" },
      { name: "description", content: "Full-spectrum dental care: implants, root canal, orthodontics, cosmetic dentistry, smile design and more." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint text-mint-foreground text-xs font-semibold uppercase tracking-wider mb-4">Our Services</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-navy">Complete Dental Care</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">From preventive care to advanced cosmetic dentistry — every treatment delivered with precision and compassion.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 space-y-20">
          {services.map((s, i) => (
            <div key={s.slug} id={s.slug} className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
              <div className="[direction:ltr]">
                <div className="aspect-[4/3] rounded-3xl bg-gradient-primary shadow-elegant relative overflow-hidden p-12 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                  <div className="relative h-40 w-40 rounded-full glass flex items-center justify-center text-primary animate-float">
                    <s.icon className="h-20 w-20" />
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass text-xs font-semibold text-navy">0{i + 1}</div>
                </div>
              </div>
              <div className="[direction:ltr]">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">{s.name}</h2>
                <p className="mt-3 text-primary font-medium">{s.short}</p>
                <p className="mt-6 text-muted-foreground leading-relaxed text-lg">{s.description}</p>

                <div className="mt-8 grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex gap-2 text-sm text-foreground/80"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {b}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Treatment Process</h4>
                    <ol className="space-y-2">
                      {s.process.map((p, idx) => (
                        <li key={p} className="flex gap-2 text-sm text-foreground/80">
                          <span className="font-bold text-primary">{idx + 1}.</span> {p}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <Button asChild variant="hero" size="lg" className="mt-8">
                  <Link to="/booking">Book {s.name} <ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
