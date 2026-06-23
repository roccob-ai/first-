export type Deal = {
  slug: string;
  acquirer: string;
  target: string;
  value: number;
  valueLabel: string;
  industry: string;
  sector: string;
  announcementDate: string;
  whyItMatters: string;
  rationale: string;
  financing: string;
  risks: string[];
  acquirerOverview: string;
  targetOverview: string;
  synergies: string[];
  valuationDiscussion: string;
  interviewQuestions: string[];
};

export const deals: Deal[] = [
  {
    slug: "microsoft-activision-blizzard",
    acquirer: "Microsoft",
    target: "Activision Blizzard",
    value: 68.7,
    valueLabel: "$68.7B",
    industry: "Technology / Gaming",
    sector: "Technology",
    announcementDate: "January 18, 2022",
    whyItMatters:
      "This transaction reshaped the gaming landscape by giving Microsoft ownership of major franchises and more content for Xbox Game Pass.",
    rationale:
      "Expands Microsoft's gaming content library and strengthens Xbox Game Pass.",
    financing: "Cash",
    risks: [
      "Regulatory scrutiny",
      "Integration risk",
      "Gaming market competition",
    ],
    acquirerOverview:
      "Microsoft is a global technology platform with major businesses across cloud, productivity software, devices, and gaming.",
    targetOverview:
      "Activision Blizzard is a leading game publisher behind franchises such as Call of Duty, World of Warcraft, and Candy Crush.",
    synergies: [
      "More exclusive and first-party content for Xbox Game Pass",
      "Cross-platform distribution across console, PC, and mobile",
      "Potential operating leverage across game development and publishing",
    ],
    valuationDiscussion:
      "The deal valued Activision Blizzard at a large absolute purchase price, but Microsoft could justify the premium through recurring subscription revenue, franchise ownership, and long-term strategic control of gaming IP.",
    interviewQuestions: [
      "Why would Microsoft use cash instead of stock for this acquisition?",
      "How would you think about valuing a video game publisher?",
      "What regulatory concerns could arise from owning major gaming content?",
    ],
  },
  {
    slug: "exxonmobil-pioneer-natural-resources",
    acquirer: "ExxonMobil",
    target: "Pioneer Natural Resources",
    value: 59.5,
    valueLabel: "$59.5B",
    industry: "Energy",
    sector: "Energy",
    announcementDate: "October 11, 2023",
    whyItMatters:
      "The acquisition increased Exxon's exposure to one of the most important U.S. shale basins and reinforced scale as a key advantage in energy M&A.",
    rationale:
      "Expands Exxon's Permian Basin presence and increases long-term oil production.",
    financing: "All-stock",
    risks: [
      "Commodity price volatility",
      "Environmental pressure",
      "Execution risk",
    ],
    acquirerOverview:
      "ExxonMobil is one of the world's largest integrated energy companies, with operations across exploration, production, refining, and chemicals.",
    targetOverview:
      "Pioneer Natural Resources was a major independent exploration and production company focused on high-quality Permian Basin assets.",
    synergies: [
      "Operational scale in the Permian Basin",
      "Lower per-barrel costs through shared infrastructure",
      "Longer inventory life and improved capital allocation flexibility",
    ],
    valuationDiscussion:
      "An all-stock structure lets both shareholder bases participate in future oil-price upside while reducing cash outlay for Exxon. Bankers would focus heavily on reserve quality, production profiles, and commodity-cycle assumptions.",
    interviewQuestions: [
      "Why are all-stock deals common in large energy acquisitions?",
      "How do oil price assumptions affect valuation for an E&P company?",
      "What makes Permian Basin scale strategically valuable?",
    ],
  },
  {
    slug: "broadcom-vmware",
    acquirer: "Broadcom",
    target: "VMware",
    value: 69,
    valueLabel: "$69B",
    industry: "Technology / Software",
    sector: "Technology",
    announcementDate: "May 26, 2022",
    whyItMatters:
      "The deal demonstrated Broadcom's strategy of using large acquisitions to build a diversified enterprise technology platform.",
    rationale:
      "Helps Broadcom expand deeper into enterprise software and cloud infrastructure.",
    financing: "Cash and stock",
    risks: ["Customer retention", "Debt load", "Regulatory review"],
    acquirerOverview:
      "Broadcom is a global semiconductor and infrastructure software company known for disciplined acquisition integration.",
    targetOverview:
      "VMware provides virtualization, cloud infrastructure, and enterprise software used by large organizations worldwide.",
    synergies: [
      "Cross-selling infrastructure software into enterprise customers",
      "Cost efficiencies from combining software operations",
      "A broader platform spanning chips, infrastructure, and cloud software",
    ],
    valuationDiscussion:
      "The transaction mixed cash and stock, creating a balance between certainty of value and continued seller participation. A banker would analyze VMware's recurring software revenue, margins, and Broadcom's ability to improve profitability.",
    interviewQuestions: [
      "How do software margins affect acquisition valuation?",
      "What are the pros and cons of using both cash and stock?",
      "Why might customers worry after a large enterprise software acquisition?",
    ],
  },
  {
    slug: "capital-one-discover",
    acquirer: "Capital One",
    target: "Discover",
    value: 35.3,
    valueLabel: "$35.3B",
    industry: "Financial Services",
    sector: "Financial Services",
    announcementDate: "February 19, 2024",
    whyItMatters:
      "The deal would combine a major credit card issuer with a payments network, creating a larger competitor in consumer finance.",
    rationale: "Creates a stronger payments and credit card platform.",
    financing: "All-stock",
    risks: [
      "Regulatory approval",
      "Credit risk",
      "Consumer lending cycle",
    ],
    acquirerOverview:
      "Capital One is a diversified financial services company with a large credit card, auto finance, and consumer banking presence.",
    targetOverview:
      "Discover operates a credit card business, consumer lending products, and its own payments network.",
    synergies: [
      "Greater scale in credit cards and consumer payments",
      "Network economics from routing more volume through Discover",
      "Technology and marketing efficiencies across card portfolios",
    ],
    valuationDiscussion:
      "Financial services M&A requires close attention to credit quality, capital requirements, and regulatory approvals. The stock-for-stock structure aligns both investor groups around the combined company's future earnings power.",
    interviewQuestions: [
      "Why would regulators scrutinize a large credit card merger?",
      "How does credit risk influence valuation in consumer finance?",
      "What strategic value does owning a payments network create?",
    ],
  },
];

export const industries = Array.from(
  new Set(deals.map((deal) => deal.industry)),
).sort();

export const totalDealValue = deals.reduce((sum, deal) => sum + deal.value, 0);

export const biggestDeal = deals.reduce((largest, deal) =>
  deal.value > largest.value ? deal : largest,
);

export function formatBillions(value: number) {
  return `$${value.toFixed(value % 1 === 0 ? 0 : 1)}B`;
}

export function getDealBySlug(slug: string) {
  return deals.find((deal) => deal.slug === slug);
}

export function getSectorTotals() {
  return deals.reduce<Record<string, number>>((totals, deal) => {
    totals[deal.sector] = (totals[deal.sector] ?? 0) + deal.value;
    return totals;
  }, {});
}

export function getMostActiveSector() {
  const counts = deals.reduce<Record<string, number>>((totals, deal) => {
    totals[deal.sector] = (totals[deal.sector] ?? 0) + 1;
    return totals;
  }, {});

  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "N/A";
}
