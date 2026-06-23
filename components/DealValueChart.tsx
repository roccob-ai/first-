import { formatBillions, getSectorTotals } from "@/lib/deals";

type DealValueChartProps = {
  activeSector?: string;
};

export function DealValueChart({ activeSector }: DealValueChartProps) {
  const sectorTotals = Object.entries(getSectorTotals()).sort(
    (a, b) => b[1] - a[1],
  );
  const largestValue = Math.max(...sectorTotals.map(([, value]) => value));

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Deal value by industry
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Simple market map
          </h2>
        </div>
        <p className="text-sm text-slate-400">
          Values shown in announced transaction size
        </p>
      </div>

      <div className="mt-7 space-y-5">
        {sectorTotals.map(([sector, value]) => {
          const width = `${Math.max((value / largestValue) * 100, 8)}%`;
          const isActive = sector === activeSector;

          return (
            <div key={sector}>
              <div className="mb-2 flex items-center justify-between gap-4 text-sm">
                <span className={isActive ? "text-white" : "text-slate-300"}>
                  {sector}
                </span>
                <span className="font-semibold text-white">
                  {formatBillions(value)}
                </span>
              </div>
              <div className="h-4 overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full rounded-full ${
                    isActive
                      ? "bg-cyan-300"
                      : "bg-gradient-to-r from-slate-500 to-slate-300"
                  }`}
                  style={{ width }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
