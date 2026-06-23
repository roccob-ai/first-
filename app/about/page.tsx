import Link from "next/link";
import { ArrowRight, BookOpenCheck, GraduationCap, Target } from "lucide-react";

export const metadata = {
  title: "About | DealRoom",
  description:
    "Learn how DealRoom helps students understand M&A deals and investment banking logic.",
};

const learningSteps = [
  {
    title: "Start with the headline",
    description:
      "Look at the buyer, seller, deal value, industry, and announcement date to understand the basic fact pattern.",
  },
  {
    title: "Explain the rationale",
    description:
      "Ask why the asset matters to the acquirer and what strategic problem the transaction is trying to solve.",
  },
  {
    title: "Think like a banker",
    description:
      "Connect financing, synergies, valuation, and risks into a clear discussion you could use in an interview.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
      <section className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-slate-950/30 backdrop-blur lg:grid-cols-[1fr_0.8fr] lg:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            About DealRoom
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            A cleaner way to study real M&A deals.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            DealRoom is a mock finance dashboard designed for students pursuing
            investment banking internships. It translates major M&A headlines
            into the business logic interviewers expect you to understand.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white"
          >
            Explore the dashboard
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
          <span className="inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
            <GraduationCap size={24} />
          </span>
          <h2 className="mt-5 text-2xl font-semibold text-white">
            Built for recruiting conversations
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Use each deal page to practice explaining strategic rationale,
            financing choices, synergy assumptions, regulatory risks, and
            valuation logic in a concise, banker-friendly way.
          </p>
        </div>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-3">
        {learningSteps.map((step, index) => (
          <article
            key={step.title}
            className="rounded-3xl border border-white/10 bg-slate-950/70 p-6"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-lg font-semibold text-cyan-100">
              {index + 1}
            </span>
            <h2 className="mt-5 text-xl font-semibold text-white">
              {step.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              {step.description}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
          <div className="flex items-start gap-4">
            <span className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
              <BookOpenCheck size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                Beginner-friendly code
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                Organized for learning and extension
              </h2>
            </div>
          </div>
          <p className="mt-6 text-base leading-8 text-slate-300">
            The app uses typed mock data, reusable cards, reusable chart
            components, and plain-language sections so future updates can add
            more deals or replace mock data with an API.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
          <div className="flex items-start gap-4">
            <span className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
              <Target size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                What comes next
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                From mock data to a real product
              </h2>
            </div>
          </div>
          <p className="mt-6 text-base leading-8 text-slate-300">
            A production version could add authenticated user notes, saved
            interview questions, richer valuation charts, live market data, and
            a CMS-backed deal database.
          </p>
        </div>
      </section>
    </div>
  );
}
