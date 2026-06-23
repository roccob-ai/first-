import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertTriangle,
  ArrowLeft,
  BadgeDollarSign,
  Building,
  HandCoins,
  Lightbulb,
  MessageSquareQuote,
  ShieldCheck,
} from "lucide-react";
import { DealValueChart } from "@/components/DealValueChart";
import { deals, getDealBySlug } from "@/lib/deals";

type DealPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return deals.map((deal) => ({ slug: deal.slug }));
}

export async function generateMetadata({ params }: DealPageProps) {
  const { slug } = await params;
  const deal = getDealBySlug(slug);

  if (!deal) {
    return {
      title: "Deal not found | DealRoom",
    };
  }

  return {
    title: `${deal.acquirer} acquires ${deal.target} | DealRoom`,
    description: deal.whyItMatters,
  };
}

export default async function DealPage({ params }: DealPageProps) {
  const { slug } = await params;
  const deal = getDealBySlug(slug);

  if (!deal) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/50 hover:bg-white/10 hover:text-white"
      >
        <ArrowLeft size={16} />
        Back to dashboard
      </Link>

      <section className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] shadow-2xl shadow-slate-950/30 backdrop-blur">
        <div className="grid gap-8 p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Deal breakdown
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              {deal.acquirer} acquires {deal.target}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              {deal.whyItMatters}
            </p>
          </div>

          <div className="grid gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-5">
            <Metric label="Deal value" value={deal.valueLabel} />
            <Metric label="Industry" value={deal.industry} />
            <Metric label="Announced" value={deal.announcementDate} />
            <Metric label="Financing" value={deal.financing} />
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <InfoPanel
          icon={Lightbulb}
          eyebrow="Deal summary"
          title="What happened?"
          body={deal.rationale}
        />
        <InfoPanel
          icon={HandCoins}
          eyebrow="Financing method"
          title="How the buyer paid"
          body={`${deal.financing} financing shaped the risk and return profile for both shareholder groups.`}
        />
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
          <SectionHeading
            icon={Building}
            eyebrow="Company overview"
            title="Acquirer and target"
          />
          <div className="mt-6 grid gap-4">
            <CompanyBlock name={deal.acquirer} description={deal.acquirerOverview} />
            <CompanyBlock name={deal.target} description={deal.targetOverview} />
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
          <SectionHeading
            icon={ShieldCheck}
            eyebrow="Strategic rationale"
            title="Potential synergies"
          />
          <ul className="mt-6 space-y-3">
            {deal.synergies.map((synergy) => (
              <li
                key={synergy}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm leading-6 text-slate-300"
              >
                {synergy}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
          <SectionHeading
            icon={AlertTriangle}
            eyebrow="Key risks"
            title="What could go wrong?"
          />
          <ul className="mt-6 space-y-3">
            {deal.risks.map((risk) => (
              <li
                key={risk}
                className="flex items-center gap-3 rounded-2xl border border-amber-300/15 bg-amber-300/10 p-4 text-sm text-amber-50"
              >
                <span className="h-2 w-2 rounded-full bg-amber-200" />
                {risk}
              </li>
            ))}
          </ul>
        </div>

        <InfoPanel
          icon={BadgeDollarSign}
          eyebrow="Valuation discussion"
          title="How bankers might frame value"
          body={deal.valuationDiscussion}
        />
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <DealValueChart activeSector={deal.sector} />

        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
          <SectionHeading
            icon={MessageSquareQuote}
            eyebrow="Interview prep"
            title="Questions to practice"
          />
          <ol className="mt-6 space-y-3">
            {deal.interviewQuestions.map((question, index) => (
              <li
                key={question}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm leading-6 text-slate-300"
              >
                <span className="mr-3 font-semibold text-cyan-200">
                  {index + 1}.
                </span>
                {question}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
        {label}
      </p>
      <p className="mt-2 text-lg font-semibold text-white">{value}</p>
    </div>
  );
}

function SectionHeading({
  icon: Icon,
  eyebrow,
  title,
}: {
  icon: typeof Lightbulb;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
        <Icon size={20} />
      </span>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-white">{title}</h2>
      </div>
    </div>
  );
}

function InfoPanel({
  icon,
  eyebrow,
  title,
  body,
}: {
  icon: typeof Lightbulb;
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
      <SectionHeading icon={icon} eyebrow={eyebrow} title={title} />
      <p className="mt-6 text-base leading-8 text-slate-300">{body}</p>
    </div>
  );
}

function CompanyBlock({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
      <p className="text-lg font-semibold text-white">{name}</p>
      <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
    </div>
  );
}
