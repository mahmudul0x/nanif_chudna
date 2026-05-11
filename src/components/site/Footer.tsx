import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-navy text-navy-foreground mt-20">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
              <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-primary-foreground">
                <path d="M12 2c-2 0-3.5 1-5 1S4 2 3 4s0 5 1 8 2 9 4 9 2-3 4-3 2 3 4 3 3-6 4-9 2-6 1-8-2.5-1-4-1-3-1-5-1z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="font-display text-2xl font-bold">Hanif's Dental</div>
              <div className="text-xs uppercase tracking-[0.25em] text-primary-glow">Premium Dental Care</div>
            </div>
          </div>
          <p className="text-navy-foreground/70 max-w-md leading-relaxed">
            Advanced, compassionate dental care led by Dr. মো. আবু হানিফ — bringing world-class
            dentistry to Dinajpur with precision, comfort, and a confident smile.
          </p>
          <div className="flex gap-3">
            <a href="https://instagram.com/dr.abuhanif" target="_blank" rel="noreferrer" className="p-2 rounded-full glass-dark hover:bg-primary/30 transition">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://wa.me/8801783215958" target="_blank" rel="noreferrer" className="p-2 rounded-full glass-dark hover:bg-primary/30 transition">
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-primary-glow">Explore</h4>
          <ul className="space-y-2 text-sm text-navy-foreground/80">
            <li><Link to="/about" className="hover:text-primary-glow">About Doctor</Link></li>
            <li><Link to="/services" className="hover:text-primary-glow">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-primary-glow">Smile Gallery</Link></li>
            <li><Link to="/reviews" className="hover:text-primary-glow">Reviews</Link></li>
            <li><Link to="/blog" className="hover:text-primary-glow">Blog</Link></li>
            <li><Link to="/booking" className="hover:text-primary-glow">Book Appointment</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-primary-glow">Contact</h4>
          <ul className="space-y-3 text-sm text-navy-foreground/80">
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary-glow"/><a href="tel:01783215958">01783-215958</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary-glow"/><a href="mailto:abuhanifdnj@gmail.com">abuhanifdnj@gmail.com</a></li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary-glow"/>Law College Mor Mosque, Dinajpur, Bangladesh</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-navy-foreground/60 flex flex-wrap justify-between gap-2">
          <p>© {new Date().getFullYear()} Hanif's Dental. All rights reserved.</p>
          <p>Crafted with care for confident smiles.</p>
        </div>
      </div>
    </footer>
  );
}
