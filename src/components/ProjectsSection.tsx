import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, type ProjectCategory } from "../data/portfolio";

const CATEGORIES: ProjectCategory[] = ["All", "AI & RAG", "Systems & Web"];

export function ProjectsSection() {
  const [category, setCategory] = useState<ProjectCategory>("All");

  const filtered = useMemo(() => {
    if (category === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === category);
  }, [category]);

  const featured = filtered.filter((p) => p.featured);
  const archive = filtered.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl border-t border-slate-200 px-5 py-16 sm:px-8 sm:py-24 dark:border-slate-800"
    >
      <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono text-sm font-medium text-blue-600 dark:text-blue-400">
            Selected Work
          </p>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Projects &amp; Systems
          </h2>
        </div>

        <div className="inline-flex self-start rounded-xl border border-slate-200 bg-slate-100 p-1 dark:border-slate-800 dark:bg-slate-900">
          {CATEGORIES.map((tab) => {
            const active = category === tab;
            const count =
              tab === "All"
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category === tab).length;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setCategory(tab)}
                className={`rounded-lg px-4 py-1.5 text-sm font-semibold transition-all ${
                  active
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {tab} <span className="font-mono text-xs opacity-80">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Case Study Cards */}
      {featured.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <article
              key={project.id}
              className="card-surface flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-colors hover:border-blue-500/40 dark:hover:border-blue-400/40"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    {project.category}
                  </span>

                  <div className="flex items-center gap-2.5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-lg bg-blue-500/10 px-3 py-1.5 font-mono text-xs font-semibold text-blue-700 transition-colors hover:bg-blue-500/20 dark:text-blue-300"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 font-mono text-xs font-medium text-slate-700 transition-colors hover:border-blue-500/50 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-400/50 dark:hover:text-blue-400"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                  {project.tagline}
                </p>

                <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-200 pt-4 dark:border-slate-800">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-slate-100 px-2.5 py-1 font-mono text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Additional Repositories Table */}
      {archive.length > 0 && (
        <div className="mt-10">
          <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
            More AI &amp; RAG Repositories
          </h3>
          <div className="card-surface divide-y divide-slate-200 rounded-2xl px-6 dark:divide-slate-800">
            {archive.map((project) => (
              <article
                key={project.id}
                className="grid gap-4 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6"
              >
                <div className="sm:col-span-4">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {project.name}
                  </h4>
                  <p className="mt-0.5 text-sm text-slate-500 dark:text-stone-400">
                    {project.tagline}
                  </p>
                </div>

                <div className="sm:col-span-6">
                  <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                    {project.description}
                  </p>
                  <p className="mt-2 font-mono text-xs font-medium text-slate-500 dark:text-slate-400">
                    {project.stack.join(" · ")}
                  </p>
                </div>

                <div className="flex items-center gap-3 font-mono text-sm sm:col-span-2 sm:justify-end">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-blue-600 hover:underline dark:text-blue-400"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
