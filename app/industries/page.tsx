import Link from "next/link";
import { ArrowRight, Factory, Layers3 } from "lucide-react";
import { DealValueChart } from "@/components/DealValueChart";
import { deals, formatBillions, getSectorTotals } from "@/lib/deals";

export const metadata = {
  title: "Industries | DealRoom",
  description: "Explore M&A activity by industry on DealRoom.",
};

export default function IndustriesPage() {
  const sectorTotals = Object.entries(getSectorTotals()).sort(
    (a, b) => b[1] - a[1],
  );

  return (
    <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
      <section className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-slate-950/30 backdrop-blur lg:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Industry lens
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            See where strategic buyers are deploying capital.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Industry analysis helps students connect deal rationale to market
            structure, competitive positioning, regulation, and capital cycles.
          </p>
        </div>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {sectorTotals.map(([sector, value]) => {
          const sectorDeals = deals.filter((deal) => deal.sector === sector);

          return (
            <article
              key={sector}
              className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-slate-950/20"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                  <Factory size={20} />
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-sm font-semibold text-slate-200">
                  {sectorDeals.length} deal{sectorDeals.length === 1 ? "" : "s"}
                </span>
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-white">
                {sector}
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-cyan-100">
                {formatBillions(value)}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Total tracked transaction value in this sector.
              </p>

              <div className="mt-6 space-y-3">
                {sectorDeals.map((deal) => (
                  <Link
                    key={deal.slug}
                    href={`/deals/${deal.slug}`}
                    className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:bg-white/10"
                  >
                    <span>
                      {deal.acquirer} / {deal.target}
                    </span>
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                ))}
              </div>
            </article>
          );
        })}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
          <div className="flex items-start gap-4">
            <span className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
              <Layers3 size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                How to analyze sectors
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                Ask what creates buyer urgency.
              </h2>
            </div>
          </div>
          <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-300">
            <li className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
              Technology deals often center on product ecosystems, customer
              retention, and recurring revenue quality.
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
              Energy deals depend heavily on asset quality, commodity prices,
              production costs, and reserve life.
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
              Financial services deals require careful attention to regulation,
              credit cycles, capital ratios, and customer overlap.
            </li>
          </ul>
        </div>

        <DealValueChart />
      </section>
    </div>
  );
}
