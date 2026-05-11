import {
  Sparkles,
  Stethoscope,
  Smile,
  Activity,
  Baby,
  Shield,
  Scissors,
  Wand2,
  Crown,
  HeartPulse,
  Syringe,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  benefits: string[];
  process: string[];
  icon: typeof Sparkles;
};

export const services: Service[] = [
  {
    slug: "root-canal",
    name: "Root Canal Treatment",
    short: "Pain-free endodontic care that saves your natural tooth.",
    description:
      "Modern, microscope-assisted root canal therapy to relieve pain and preserve your natural tooth structure with the highest precision.",
    benefits: [
      "Eliminates tooth pain",
      "Saves natural tooth",
      "Single-visit options",
      "Long-lasting results",
    ],
    process: [
      "Diagnosis & X-ray",
      "Local anesthesia",
      "Cleaning & shaping",
      "Filling & sealing",
      "Crown protection",
    ],
    icon: HeartPulse,
  },
  {
    slug: "dental-filling",
    name: "Dental Filling",
    short: "Tooth-colored restorations that look completely natural.",
    description:
      "Premium composite and ceramic fillings that restore decayed teeth invisibly and durably.",
    benefits: ["Natural appearance", "Strong & durable", "Mercury-free", "Same-day procedure"],
    process: ["Cavity assessment", "Gentle removal", "Bonding & shaping", "Polish & finish"],
    icon: Sparkles,
  },
  {
    slug: "extraction",
    name: "Tooth Extraction",
    short: "Gentle, comfortable removal when extraction is necessary.",
    description:
      "Atraumatic extraction techniques to ensure minimal discomfort and faster healing.",
    benefits: ["Painless procedure", "Quick recovery", "Bone preservation", "Sedation options"],
    process: ["Consultation", "Anesthesia", "Gentle removal", "Aftercare guidance"],
    icon: Scissors,
  },
  {
    slug: "implants",
    name: "Dental Implants",
    short: "Permanent tooth replacement that looks and feels natural.",
    description: "Titanium implants restore missing teeth with unmatched stability and aesthetics.",
    benefits: ["Lifetime solution", "Natural feel", "Preserves jawbone", "No diet restrictions"],
    process: ["3D scan & planning", "Implant placement", "Healing period", "Crown attachment"],
    icon: Crown,
  },
  {
    slug: "whitening",
    name: "Teeth Whitening",
    short: "Professional whitening for a luminous, confident smile.",
    description: "Safe, effective in-clinic whitening that brightens your smile by several shades.",
    benefits: ["Up to 8 shades whiter", "Safe & enamel-friendly", "Long-lasting", "Quick session"],
    process: ["Shade assessment", "Gum protection", "Whitening application", "Final polish"],
    icon: Wand2,
  },
  {
    slug: "orthodontics",
    name: "Orthodontics",
    short: "Braces and aligners for perfectly aligned teeth.",
    description:
      "Modern braces and clear aligners that straighten teeth discreetly and comfortably.",
    benefits: ["Better alignment", "Improved bite", "Easier cleaning", "Boosted confidence"],
    process: ["Smile analysis", "Custom treatment plan", "Regular adjustments", "Retention phase"],
    icon: Activity,
  },
  {
    slug: "cosmetic",
    name: "Cosmetic Dentistry",
    short: "Veneers, bonding & smile makeovers crafted to perfection.",
    description:
      "Transform your smile with premium veneers and cosmetic procedures designed for natural beauty.",
    benefits: ["Hollywood smile", "Custom-crafted", "Stain resistant", "Confidence boost"],
    process: ["Smile design", "Tooth preparation", "Veneer crafting", "Final placement"],
    icon: Smile,
  },
  {
    slug: "pediatric",
    name: "Pediatric Dentistry",
    short: "Gentle dental care designed especially for children.",
    description: "Child-friendly dental experiences in a calm, welcoming environment.",
    benefits: ["Kid-friendly", "Preventive focus", "Education-based", "Painless techniques"],
    process: ["Friendly intro", "Gentle examination", "Preventive care", "Parent guidance"],
    icon: Baby,
  },
  {
    slug: "gum-treatment",
    name: "Gum Treatment",
    short: "Healthy gums are the foundation of a beautiful smile.",
    description: "Comprehensive periodontal therapy to treat and prevent gum disease.",
    benefits: ["Stops gum disease", "Fresh breath", "Saves teeth", "Reduces inflammation"],
    process: ["Periodontal exam", "Deep cleaning", "Targeted therapy", "Maintenance plan"],
    icon: Shield,
  },
  {
    slug: "oral-surgery",
    name: "Oral Surgery",
    short: "Advanced surgical procedures with precision and comfort.",
    description:
      "Specialist-led oral and maxillofacial surgery from wisdom teeth to complex cases.",
    benefits: ["Expert specialist", "Sterile environment", "Sedation options", "Faster healing"],
    process: ["Consultation", "Pre-op planning", "Surgical procedure", "Recovery support"],
    icon: Syringe,
  },
  {
    slug: "smile-design",
    name: "Smile Design",
    short: "Bespoke smile makeovers tailored to your facial harmony.",
    description: "Digitally designed smiles combining science, art, and personal aesthetics.",
    benefits: ["Personalized design", "Digital preview", "Natural results", "Boosts confidence"],
    process: ["Digital smile preview", "Treatment planning", "Smile crafting", "Final reveal"],
    icon: Stethoscope,
  },
];
