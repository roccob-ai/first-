import type { LucideIcon } from "lucide-react";

type StatCardProps = {
  label: string;
  value: string;
  detail: string;
  icon: LucideIcon;
};

export function StatCard({ label, value, detail, icon: Icon }: StatCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-slate-950/20 backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-300">{label}</p>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-white">
            {value}
          </p>
        </div>
        <span className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
          <Icon size={20} />
        </span>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-400">{detail}</p>
    </article>
  );
}
