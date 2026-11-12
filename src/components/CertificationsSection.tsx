import { ArrowUpRight } from "lucide-react";
import { CERTIFICATIONS } from "../data/portfolio";

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-6xl border-t border-slate-200 px-5 py-16 sm:px-8 sm:py-24 dark:border-slate-800"
    >
      <div className="mb-10">
        <p className="font-mono text-sm font-medium text-blue-600 dark:text-blue-400">
          Verified Credentials
        </p>
        <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Certifications
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {CERTIFICATIONS.map((cert) => (
          <a
            key={cert.title}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-surface group flex items-center justify-between gap-4 rounded-xl px-5 py-4 transition-colors hover:border-blue-500/50 dark:hover:border-blue-400/50"
          >
            <div>
              <p className="text-base font-bold text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                {cert.title}
              </p>
              <p className="mt-1 font-mono text-sm text-slate-500 dark:text-slate-400">
                {cert.issuer} · {cert.domain}
              </p>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
          </a>
        ))}
      </div>
    </section>
  );
}
