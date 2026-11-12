import { ArrowRight, ArrowUpRight } from "lucide-react";
import { EXPERIENCE, LEADERSHIP, PROFILE } from "../data/portfolio";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl border-t border-slate-200 px-5 py-16 sm:px-8 sm:py-24 dark:border-slate-800"
    >
      <div className="mb-10">
        <p className="font-mono text-sm font-medium text-blue-600 dark:text-blue-400">
          Experience &amp; Education
        </p>
        <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Industry Work &amp; Academics
        </h2>
      </div>

      {/* WSO2 Card */}
      <div className="card-surface rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-start dark:border-slate-800">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {EXPERIENCE.role}
              </h3>
              <span className="rounded-lg bg-blue-500/10 px-3 py-1 font-mono text-sm font-semibold text-blue-700 dark:text-blue-300">
                {EXPERIENCE.company}
              </span>
            </div>
            <p className="mt-1.5 text-base font-medium text-slate-600 dark:text-slate-300">
              {EXPERIENCE.team}
            </p>
          </div>

          <div className="flex flex-col items-start gap-1.5 sm:items-end">
            <span className="font-mono text-sm font-medium text-slate-600 dark:text-slate-400">
              {EXPERIENCE.period}
            </span>
            <a
              href={EXPERIENCE.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              <span>{EXPERIENCE.repoLabel}</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">
          {EXPERIENCE.summary}
        </p>

        {/* Architectural flow strip */}
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5 dark:border-slate-800 dark:bg-slate-900/60">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Architected Pipeline · Event Notification Framework
          </p>
          <div className="flex flex-wrap items-center gap-2.5">
            {EXPERIENCE.architectureFlow.map((step, i) => (
              <div key={step} className="flex items-center gap-2.5">
                <span className="rounded-lg border border-slate-200 bg-white px-3.5 py-2 font-mono text-xs font-medium text-slate-800 sm:text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  {step}
                </span>
                {i < EXPERIENCE.architectureFlow.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {EXPERIENCE.contributions.map((item) => (
            <div
              key={item.area}
              className="rounded-xl border border-slate-200/90 p-5 dark:border-slate-800"
            >
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                {item.area}
              </h4>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-200 pt-5 dark:border-slate-800">
          {EXPERIENCE.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-slate-100 px-3 py-1 font-mono text-xs font-medium text-slate-700 sm:text-sm dark:bg-slate-800 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Education & Leadership row */}
      <div className="mt-6 grid gap-6 md:grid-cols-12">
        <div className="card-surface flex flex-col justify-between rounded-2xl p-6 sm:p-7 md:col-span-5">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Education · {PROFILE.period}
            </p>
            <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
              {PROFILE.degree}
            </h3>
            <p className="mt-1 text-base text-slate-600 dark:text-slate-300">
              {PROFILE.university}, Sri Lanka
            </p>
          </div>

          <div className="mt-6 flex items-baseline justify-between border-t border-slate-200 pt-4 dark:border-slate-800">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Current GPA
            </span>
            <span className="font-mono text-2xl font-bold text-blue-600 dark:text-blue-400">
              {PROFILE.gpa} / 4.00
            </span>
          </div>
        </div>

        <div className="card-surface rounded-2xl p-6 sm:p-7 md:col-span-7">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Leadership &amp; Volunteering
          </p>
          <div className="mt-4 divide-y divide-slate-200 dark:divide-slate-800">
            {LEADERSHIP.map((item) => (
              <div
                key={`${item.role}-${item.org}`}
                className="flex flex-col justify-between gap-1 py-3.5 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline"
              >
                <div>
                  <p className="text-base font-semibold text-slate-900 dark:text-white">
                    {item.role}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.org}</p>
                </div>
                <span className="shrink-0 font-mono text-sm text-slate-500 dark:text-slate-400">
                  {item.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
