import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { education, experience, profile, projects, skills, socials } from "@/lib/content";
import { ProjectThumb } from "@/components/project-thumb";
import { SocialIcon } from "@/components/social-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h2 className={cn("mb-5 font-mono text-sm text-muted-foreground", className)}>{children}</h2>;
}

// Blue-tinted pill for skills and project tools; gray variant for experience.
function Tag({ children, muted = false }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <Badge
      variant="secondary"
      className={
        muted
          ? "rounded-full px-3 py-1 text-sm font-normal text-muted-foreground"
          : "rounded-full bg-accent px-3 py-1 text-sm font-normal text-primary"
      }
    >
      {children}
    </Badge>
  );
}

export default function Home() {
  return (
    <main className="mx-auto grid w-full max-w-[1440px] gap-10 lg:grid-cols-[380px_1fr] lg:gap-14 lg:pr-10">
      {/* Profile sidebar */}
      <aside className="bg-muted px-6 py-10 sm:px-10 lg:sticky lg:top-0 lg:h-svh lg:overflow-y-auto lg:py-8">
        {profile.photo ? (
          <Image
            src={profile.photo}
            alt={profile.name}
            width={80}
            height={80}
            className="size-20 rounded-full object-cover"
            priority
          />
        ) : (
          <div className="grid size-20 place-items-center rounded-full bg-primary text-2xl font-semibold text-primary-foreground">
            {profile.initials}
          </div>
        )}

        <h1 className="mt-5 text-2xl font-semibold tracking-tight">{profile.name}</h1>
        <p className="mt-1">{profile.role}</p>
        <p className="mt-1 text-muted-foreground">{profile.location}</p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              title={s.label}
              className="text-foreground/80 transition-colors hover:text-primary"
            >
              <SocialIcon label={s.label} className="size-6" />
            </a>
          ))}
          <Button asChild variant="outline" size="sm" className="h-7 rounded-full bg-transparent px-3">
            <a href={`mailto:${profile.email}`}>email me</a>
          </Button>
          <Button asChild variant="outline" size="sm" className="h-7 rounded-full bg-transparent px-3">
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
              resume
            </a>
          </Button>
        </div>

        <section className="mt-8">
          <Label className="mb-3">About</Label>
          <p className="leading-relaxed">{profile.about}</p>
        </section>

        <section className="mt-8">
          <Label className="mb-3">Skills</Label>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
        </section>
      </aside>

      {/* Main column */}
      <div className="space-y-20 px-6 pb-20 sm:px-10 lg:px-0 lg:py-10">
        <section id="projects">
          <Label>Projects</Label>
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.title} className="group flex flex-col">
                <a href={p.href} target="_blank" rel="noreferrer" className="block">
                  {p.image ? (
                    <div className="relative aspect-[2/1] overflow-hidden rounded-xl border">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                  ) : (
                    <ProjectThumb
                      variant={p.thumb}
                      className="aspect-[2/1] rounded-xl transition-shadow group-hover:shadow-md"
                    />
                  )}
                </a>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{p.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">{p.summary}</p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex w-fit items-center gap-1 text-primary hover:underline"
                >
                  Read more <ArrowRight className="size-4" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="experience">
          <Label>Experience</Label>
          <div className="space-y-10">
            {experience.map((e) => (
              <div key={e.title}>
                <p className="text-sm">{e.period}</p>
                <h3 className="mt-1 text-lg font-semibold">{e.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{e.detail}</p>
                {e.tools.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {e.tools.map((t) => (
                      <Tag key={t} muted>
                        {t}
                      </Tag>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="education">
          <Label>Education</Label>
          <div className="space-y-10">
            {education.map((ed) => (
              <div key={ed.title}>
                <p className="text-sm">{ed.year}</p>
                <h3 className="mt-1 text-lg font-semibold">{ed.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{ed.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="border-t pt-6 text-sm text-muted-foreground">© 2026 {profile.name}</footer>
      </div>
    </main>
  );
}
