import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { PROFILE } from "../data/portfolio";

export function ContactFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <footer
      id="contact"
      className="mx-auto max-w-6xl border-t border-slate-200 px-5 py-16 sm:px-8 sm:py-24 dark:border-slate-800"
    >
      <div className="card-surface rounded-2xl p-6 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="font-mono text-sm font-medium text-blue-600 dark:text-blue-400">
              Contact
            </p>
            <h2 className="mt-1.5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Get in Touch
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">
              Available for Software Engineering and AI/ML Engineering opportunities. Academic and
              industry references (University of Jaffna &amp; WSO2) are included in both CVs.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-blue-500"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span>{copied ? "Copied to clipboard" : PROFILE.email}</span>
              </button>

              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-base font-semibold text-slate-900 transition-colors hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-white dark:hover:border-blue-400 dark:hover:text-blue-400"
              >
                <span>Open Mail</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="space-y-6 border-t border-slate-200 pt-6 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 dark:border-slate-800">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Download Resumes (PDF)
              </p>
              <div className="mt-2.5 flex flex-wrap gap-5 text-base font-semibold">
                <a
                  href={PROFILE.cvPaths.aiml}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 hover:underline dark:text-blue-400"
                >
                  <span>AI &amp; ML CV</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={PROFILE.cvPaths.swe}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 hover:underline dark:text-blue-400"
                >
                  <span>Software Eng CV</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Phone &amp; Profiles
              </p>
              <p className="mt-2 font-mono text-sm font-medium text-slate-700 dark:text-slate-300">
                {PROFILE.phones[0]} · {PROFILE.phones[1]}
              </p>
              <div className="mt-3 flex flex-wrap gap-5 text-sm font-medium text-slate-600 dark:text-slate-300">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={PROFILE.freecodecamp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <span>freeCodeCamp</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-start justify-between gap-2 text-sm text-slate-500 sm:flex-row sm:items-center dark:text-slate-400">
        <p>© {new Date().getFullYear()} {PROFILE.name}</p>
        <p className="font-mono">{PROFILE.location}</p>
      </div>
    </footer>
  );
}
