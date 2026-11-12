import { ArrowUpRight, Code2, FileText, Github, GraduationCap, Linkedin, Mail, MapPin } from "lucide-react";
import { PROFILE } from "../data/portfolio";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pt-12 pb-16 sm:px-8 sm:pt-20 sm:pb-24">
      <div className="flex flex-col-reverse items-start gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
        {/* Left: Intro & Actions */}
        <div className="flex-1">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-700 dark:text-blue-300">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            <span>Software Engineering Intern @ WSO2</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            {PROFILE.name}
          </h1>

          <p className="mt-3 text-xl font-semibold text-blue-600 sm:text-2xl dark:text-blue-400">
            Software Engineer &amp; AI/ML Engineer
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">
            Final-year Computer Science undergraduate at the{" "}
            <strong className="font-semibold text-slate-900 dark:text-white">
              University of Jaffna ({PROFILE.gpa} GPA)
            </strong>{" "}
            and Software Engineering Intern at{" "}
            <strong className="font-semibold text-slate-900 dark:text-white">WSO2</strong>. I build
            scalable Java and FastAPI backends, TypeScript and React web applications, and practical
            AI systems using Retrieval-Augmented Generation (RAG) and Natural Language Processing.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-slate-600 sm:text-base dark:text-slate-400">
            <span className="inline-flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              BSc (Hons) CS · {PROFILE.gpa} / 4.00 GPA
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              {PROFILE.location}
            </span>
          </div>

          {/* Primary Resume Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href={PROFILE.cvPaths.aiml}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-500"
            >
              <FileText className="h-4 w-4" />
              <span>AI / ML CV</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href={PROFILE.cvPaths.swe}
              target="_blank"
              rel="noopener noreferrer"
              className="card-surface inline-flex items-center gap-2 rounded-xl px-5 py-3 text-base font-semibold text-slate-900 transition-colors hover:border-blue-500/50 hover:text-blue-600 dark:text-white dark:hover:border-blue-400/50 dark:hover:text-blue-400"
            >
              <FileText className="h-4 w-4 text-slate-500 dark:text-slate-400" />
              <span>Software Eng CV</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex flex-wrap items-center gap-5 text-[15px] font-medium text-slate-600 dark:text-slate-300">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={PROFILE.freecodecamp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Code2 className="h-4 w-4" />
              <span>freeCodeCamp</span>
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Right: Clean, Prominent Profile Photo */}
        <div className="shrink-0">
          <div className="relative">
            <img
              src={PROFILE.avatarPath}
              alt={PROFILE.name}
              className="h-44 w-44 rounded-3xl object-cover shadow-lg ring-2 ring-slate-200 sm:h-60 sm:w-60 lg:h-72 lg:w-72 dark:ring-slate-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
