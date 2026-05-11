import equipmentImg from "@/assets/equipment.jpg";
import heroSmile from "@/assets/hero-smile.jpg";
import heroClinic from "@/assets/hero-clinic.jpg";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  read: string;
  img: string;
  featured?: boolean;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "dental-hygiene-tips-healthier-smile",
    title: "5 Essential Dental Hygiene Tips for a Healthier Smile",
    excerpt: "Simple daily habits that can dramatically improve your oral health.",
    category: "Hygiene",
    date: "May 5, 2026",
    read: "5 min",
    img: heroSmile,
    featured: true,
    content: [
      "Healthy smiles begin with simple daily consistency. Brushing twice a day with fluoride toothpaste helps remove plaque and keeps enamel stronger over time.",
      "Flossing is just as important because it reaches the spaces a toothbrush misses. If regular floss is difficult, interdental brushes or water flossers can make the habit easier.",
      "Sugary snacks and drinks increase the risk of decay, especially when consumed frequently throughout the day. Drinking more water and rinsing after snacks can help protect your teeth.",
      "Regular professional cleanings and checkups allow your dentist to spot early issues before they become larger and more expensive problems.",
    ],
  },
  {
    slug: "root-canal-myths-truth",
    title: "Root Canal Myths - What You Should Really Know",
    excerpt: "Modern root canal therapy is nothing like its reputation. Here's the truth.",
    category: "Treatments",
    date: "Apr 28, 2026",
    read: "6 min",
    img: equipmentImg,
    content: [
      "Many patients still think root canal treatment is extremely painful, but modern techniques and anesthesia have changed that experience dramatically.",
      "A root canal is done to remove infection from inside the tooth and save the natural structure whenever possible. In most cases, it is the discomfort from the infection, not the treatment itself, that causes the pain.",
      "Delaying treatment can allow the infection to spread and may lead to swelling, tooth loss, or more complicated procedures later on.",
      "If your dentist recommends a root canal, it is usually because saving your tooth is the healthiest and most conservative long-term option.",
    ],
  },
  {
    slug: "how-to-care-for-your-braces",
    title: "How to Care for Your Braces",
    excerpt: "A practical guide for keeping braces clean and your treatment on track.",
    category: "Orthodontics",
    date: "Apr 20, 2026",
    read: "4 min",
    img: heroClinic,
    content: [
      "Braces need extra attention because food and plaque can get trapped around brackets and wires very easily. Brushing after meals makes a big difference.",
      "Using an orthodontic brush or interdental brush helps clean tight corners more effectively. A fluoride mouthwash can also support enamel protection during treatment.",
      "Hard candy, chewing ice, and sticky snacks can damage brackets or wires and delay your progress. Avoiding these foods helps treatment stay on schedule.",
      "Routine adjustment visits are essential. They allow your orthodontist to monitor movement and make precise changes as your smile improves.",
    ],
  },
  {
    slug: "childrens-dental-care-when-to-start",
    title: "Children's Dental Care: When to Start",
    excerpt: "Establishing healthy dental habits from the very first tooth.",
    category: "Pediatric",
    date: "Apr 12, 2026",
    read: "5 min",
    img: doctorPortrait,
    content: [
      "Dental care should begin as soon as the first tooth appears. Cleaning baby teeth gently helps children develop good habits from the very beginning.",
      "A child's first dental visit is usually recommended by age one or within six months of the first tooth erupting. These early visits help parents get guidance and help children feel comfortable in the clinic.",
      "Daily brushing, limiting sugary snacks, and avoiding sleeping with milk or juice in a bottle all help reduce the risk of early childhood decay.",
      "Positive dental experiences early in life can build confidence and reduce fear, making future visits much easier.",
    ],
  },
  {
    slug: "teeth-whitening-safe-vs-risky-methods",
    title: "Teeth Whitening: Safe vs. Risky Methods",
    excerpt: "Why professional whitening always wins over DIY home kits.",
    category: "Cosmetic",
    date: "Apr 5, 2026",
    read: "4 min",
    img: heroSmile,
    content: [
      "Teeth whitening can brighten a smile noticeably, but not every method is equally safe. Some DIY trends can damage enamel or irritate the gums.",
      "Professional whitening is more controlled. Your dentist can assess the cause of staining, choose a safer approach, and protect sensitive areas during the process.",
      "Overusing random home products may lead to uneven color and increased sensitivity. This is one reason professional guidance matters so much.",
      "When whitening is done properly, it can refresh your smile while still protecting your long-term oral health.",
    ],
  },
  {
    slug: "understanding-dental-implants",
    title: "Understanding Dental Implants",
    excerpt: "How modern implants restore both function and confidence.",
    category: "Implants",
    date: "Mar 28, 2026",
    read: "7 min",
    img: equipmentImg,
    content: [
      "Dental implants are one of the most stable and natural-feeling options for replacing missing teeth. They are designed to restore both appearance and chewing ability.",
      "Unlike removable solutions, implants are anchored more securely and help preserve jawbone structure over time. This makes them a strong long-term investment for many patients.",
      "The process usually includes planning, implant placement, healing, and crown attachment. While it takes time, the final result often feels close to a natural tooth.",
      "For many people, implants improve comfort, confidence, speech, and overall quality of life.",
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
