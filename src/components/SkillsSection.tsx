import { SKILL_GROUPS } from "../data/portfolio";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl border-t border-slate-200 px-5 py-16 sm:px-8 sm:py-24 dark:border-slate-800"
    >
      <div className="mb-10">
        <p className="font-mono text-sm font-medium text-blue-600 dark:text-blue-400">
          Technical Stack
        </p>
        <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Skills &amp; Technologies
        </h2>
      </div>

      <div className="card-surface divide-y divide-slate-200 rounded-2xl px-6 dark:divide-slate-800">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.title}
            className="grid gap-3 py-5 sm:grid-cols-12 sm:items-center sm:gap-6"
          >
            <h3 className="text-base font-bold text-slate-900 sm:col-span-4 dark:text-white">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2 sm:col-span-8">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 font-mono text-sm font-medium text-slate-800 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
