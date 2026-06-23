import {
  ArrowDownRight,
  Building2,
  ChartNoAxesCombined,
  CircleDollarSign,
  Trophy,
} from "lucide-react";
import { DealExplorer } from "@/components/DealExplorer";
import { DealValueChart } from "@/components/DealValueChart";
import { StatCard } from "@/components/StatCard";
import {
  biggestDeal,
  deals,
  formatBillions,
  getMostActiveSector,
  industries,
  totalDealValue,
} from "@/lib/deals";

export default function Home() {
  const stats = [
    {
      label: "Total deals tracked",
      value: deals.length.toString(),
      detail: "Curated landmark transactions with banker-style context.",
      icon: Building2,
    },
    {
      label: "Total deal value",
      value: formatBillions(totalDealValue),
      detail: "Aggregate announced transaction value across the database.",
      icon: CircleDollarSign,
    },
    {
      label: "Biggest deal",
      value: biggestDeal.valueLabel,
      detail: `${biggestDeal.acquirer} acquiring ${biggestDeal.target}.`,
      icon: Trophy,
    },
    {
      label: "Most active industry",
      value: getMostActiveSector(),
      detail: "Based on the number of tracked transactions by sector.",
      icon: ChartNoAxesCombined,
    },
  ];

  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-8 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-14 lg:pt-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
            <ArrowDownRight size={16} />
            M&A deal logic for finance students
          </div>
          <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Understand the Deals Moving Wall Street
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            A student-friendly M&A tracker built for future investment bankers.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#deals"
              className="rounded-full bg-cyan-300 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-white"
            >
              Browse deals
            </a>
            <a
              href="/about"
              className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/10"
            >
              How to use DealRoom
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-slate-950/30 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Banker view
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            Learn the story behind the headline number.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Every deal breakdown explains strategic rationale, financing,
            synergies, risks, valuation angles, and interview questions so you
            can discuss major transactions with confidence.
          </p>
          <div className="mt-8 grid gap-3">
            {[
              "Why does the acquirer want this asset?",
              "How is the transaction financed?",
              "What could prevent the thesis from working?",
            ].map((question) => (
              <div
                key={question}
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-200"
              >
                {question}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <DealExplorer deals={deals} industries={industries} />

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <DealValueChart />
      </section>
    </>
  );
}
