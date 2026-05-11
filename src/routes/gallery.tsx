import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/SectionHeading";
import { X } from "lucide-react";
import heroSmile from "@/assets/hero-smile.jpg";
import heroClinic from "@/assets/hero-clinic.jpg";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import equipmentImg from "@/assets/equipment.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Smile Gallery | Hanif's Dental" },
      { name: "description", content: "Real smile transformations and a glimpse inside our modern dental clinic." },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { src: heroSmile, title: "Complete Smile Makeover", category: "Cosmetic" },
  { src: heroClinic, title: "Modern Treatment Room", category: "Clinic" },
  { src: equipmentImg, title: "Premium Equipment", category: "Clinic" },
  { src: doctorPortrait, title: "Patient Consultation", category: "Care" },
  { src: heroSmile, title: "Veneers Transformation", category: "Cosmetic" },
  { src: heroClinic, title: "Sterile Environment", category: "Clinic" },
  { src: heroSmile, title: "Whitening Result", category: "Cosmetic" },
  { src: equipmentImg, title: "Advanced Tools", category: "Clinic" },
  { src: doctorPortrait, title: "Expert Care", category: "Care" },
];

function GalleryPage() {
  const [filter, setFilter] = useState<string>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const cats = ["All", "Cosmetic", "Clinic", "Care"];
  const filtered = filter === "All" ? items : items.filter((i) => i.category === filter);

  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint text-mint-foreground text-xs font-semibold uppercase tracking-wider mb-4">Smile Gallery</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-navy">Beautiful Smiles, <span className="text-gradient-primary">Real Results</span></h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">Explore our smile transformations and the modern environment behind every patient's experience.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${filter === c ? "bg-gradient-primary text-primary-foreground shadow-glow" : "bg-card border border-border hover:border-primary/40"}`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filtered.map((item, i) => (
              <button
                key={i}
                onClick={() => setLightbox(item.src)}
                className={`group relative overflow-hidden rounded-2xl shadow-soft ${i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"}`}
              >
                <img src={item.src} alt={item.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-5 text-left">
                  <div className="text-navy-foreground">
                    <div className="text-xs uppercase tracking-widest text-primary-glow">{item.category}</div>
                    <div className="font-display text-lg">{item.title}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="fixed inset-0 z-[60] bg-navy/95 flex items-center justify-center p-6 animate-fade-up" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white p-2 rounded-full glass-dark" aria-label="Close"><X /></button>
          <img src={lightbox} alt="" className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-elegant" />
        </div>
      )}

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeading
            eyebrow="Your Turn"
            title={<>Ready for Your <span className="text-gradient-primary">Dream Smile?</span></>}
          />
          <Button asChild variant="hero" size="xl"><Link to="/booking">Start Your Transformation</Link></Button>
        </div>
      </section>
    </>
  );
}
