"use client";

import { useMemo, useState } from "react";
import { Filter, Search } from "lucide-react";
import { DealCard } from "@/components/DealCard";
import type { Deal } from "@/lib/deals";

type DealExplorerProps = {
  deals: Deal[];
  industries: string[];
};

export function DealExplorer({ deals, industries }: DealExplorerProps) {
  const [query, setQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All industries");

  const filteredDeals = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return deals.filter((deal) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        deal.acquirer.toLowerCase().includes(normalizedQuery) ||
        deal.target.toLowerCase().includes(normalizedQuery);

      const matchesIndustry =
        selectedIndustry === "All industries" ||
        deal.industry === selectedIndustry;

      return matchesQuery && matchesIndustry;
    });
  }, [deals, query, selectedIndustry]);

  return (
    <section id="deals" className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-slate-950/30 backdrop-blur md:p-6">
        <div className="grid gap-4 md:grid-cols-[1fr_260px]">
          <label className="relative block">
            <span className="sr-only">Search companies</span>
            <Search
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search Microsoft, Discover, VMware..."
              className="h-14 w-full rounded-2xl border border-white/10 bg-slate-950/80 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:ring-4 focus:ring-cyan-300/10"
            />
          </label>

          <label className="relative block">
            <span className="sr-only">Filter by industry</span>
            <Filter
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <select
              value={selectedIndustry}
              onChange={(event) => setSelectedIndustry(event.target.value)}
              className="h-14 w-full appearance-none rounded-2xl border border-white/10 bg-slate-950/80 pl-12 pr-4 text-sm text-white outline-none transition focus:border-cyan-300/60 focus:ring-4 focus:ring-cyan-300/10"
            >
              <option>All industries</option>
              {industries.map((industry) => (
                <option key={industry}>{industry}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {filteredDeals.map((deal) => (
            <DealCard key={deal.slug} deal={deal} />
          ))}
        </div>

        {filteredDeals.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-dashed border-white/15 bg-slate-950/50 p-8 text-center">
            <p className="text-lg font-semibold text-white">
              No deals match that search.
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Try another company name or reset the industry filter.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
