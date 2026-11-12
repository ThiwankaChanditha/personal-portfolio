import { ArrowUpRight } from "lucide-react";
import { RESEARCH } from "../data/portfolio";

export function ResearchSection() {
  return (
    <section
      id="research"
      className="mx-auto max-w-6xl border-t border-slate-200 px-5 py-16 sm:px-8 sm:py-24 dark:border-slate-800"
    >
      <div className="mb-10">
        <p className="font-mono text-sm font-medium text-blue-600 dark:text-blue-400">
          Undergraduate Research
        </p>
        <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Low-Resource Sinhala NLP
        </h2>
      </div>

      <div className="card-surface rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-2 font-mono text-sm text-blue-600 dark:text-blue-400">
              <span>{RESEARCH.status}</span>
              <span>·</span>
              <span>{RESEARCH.institution}</span>
            </div>
            <h3 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
              {RESEARCH.title}
            </h3>
          </div>

          <a
            href={RESEARCH.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-slate-300 px-4 py-2 font-mono text-sm font-medium text-slate-800 transition-colors hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-400"
          >
            <span>View Repository</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-5 max-w-4xl text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">
          {RESEARCH.summary}
        </p>

        {/* 5-Stage Architecture Visual */}
        <div className="mt-7 grid gap-3 sm:grid-cols-5">
          {RESEARCH.pipelineSteps.map((stage) => (
            <div
              key={stage.step}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/70"
            >
              <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
                {stage.step}
              </span>
              <p className="mt-1.5 text-sm font-bold text-slate-900 dark:text-white">
                {stage.label}
              </p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                {stage.sub}
              </p>
            </div>
          ))}
        </div>

        <ul className="mt-7 space-y-2.5 text-base leading-relaxed text-slate-700 dark:text-slate-300">
          {RESEARCH.highlights.map((item, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-200 pt-5 dark:border-slate-800">
          {RESEARCH.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg bg-slate-100 px-3 py-1 font-mono text-xs font-medium text-slate-700 sm:text-sm dark:bg-slate-800 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
