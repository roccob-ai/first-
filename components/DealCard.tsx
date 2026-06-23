import Link from "next/link";
import { ArrowRight, CalendarDays, Landmark } from "lucide-react";
import type { Deal } from "@/lib/deals";

type DealCardProps = {
  deal: Deal;
};

export function DealCard({ deal }: DealCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-slate-950/30 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-slate-900/90">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
        <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1">
          {deal.industry}
        </span>
        <span className="rounded-full border border-white/10 px-3 py-1 text-slate-300">
          {deal.valueLabel}
        </span>
      </div>

      <div className="mt-6 flex items-start gap-4">
        <span className="mt-1 rounded-2xl border border-white/10 bg-white/10 p-3 text-slate-100">
          <Landmark size={20} />
        </span>
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-white">
            {deal.acquirer} acquires {deal.target}
          </h3>
          <p className="mt-2 flex items-center gap-2 text-sm text-slate-400">
            <CalendarDays size={16} />
            Announced {deal.announcementDate}
          </p>
        </div>
      </div>

      <p className="mt-5 flex-1 text-base leading-7 text-slate-300">
        {deal.whyItMatters}
      </p>

      <Link
        href={`/deals/${deal.slug}`}
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white"
      >
        View Deal Breakdown
        <ArrowRight size={16} className="transition group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
