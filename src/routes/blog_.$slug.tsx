import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBlogPostBySlug } from "@/lib/blog-data";

export const Route = createFileRoute("/blog_/$slug")({
  loader: ({ params }) => {
    const post = getBlogPostBySlug(params.slug);

    if (!post) {
      throw notFound();
    }

    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.post.title} | Hanif's Dental` },
      { name: "description", content: loaderData.post.excerpt },
    ],
  }),
  component: BlogDetailsPage,
});

function BlogDetailsPage() {
  const { post } = Route.useLoaderData();

  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-hero">
        <div className="mx-auto max-w-4xl px-6">
          <Button asChild variant="ghost" className="mb-6 px-0 text-primary hover:bg-transparent">
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
          </Button>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint text-mint-foreground text-xs font-semibold uppercase tracking-wider mb-4">
            {post.category}
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-navy leading-tight">
            {post.title}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {post.read}
            </span>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="overflow-hidden rounded-[2rem] shadow-elegant border border-border/50">
            <img
              src={post.img}
              alt={post.title}
              className="h-[280px] md:h-[420px] w-full object-cover"
              loading="lazy"
            />
          </div>

          <article className="mt-10 rounded-[2rem] bg-card border border-border/50 p-8 md:p-10 shadow-soft">
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-foreground/85">
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-muted/50 p-6 border border-border/50">
              <h2 className="font-display text-2xl text-navy">Need personalized advice?</h2>
              <p className="mt-2 text-muted-foreground">
                Every smile is different. Book a consultation with Hanif&apos;s Dental for care
                tailored to your needs.
              </p>
              <Button asChild variant="hero" className="mt-5">
                <Link to="/booking">Book Appointment</Link>
              </Button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
