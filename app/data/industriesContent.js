const G1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB2QhRCfafxtCEF_VRhOau0IDgmm60IwjSjSHLihPS97L55HGnW777w9UHu3qyb1QSy5WjlqXwLc2-v6-DpYWTAwH_f8Bt80_6ejsnG9fcNvg8kCXh4onXqlwmrty6063-dx7bLHiqrYZkInfItB2MDfgnJYj75m0Ki-a6Hb6iKMQcwP6XDcfnQw81ZVlO7ZajgFk1WiAdqCaAgnWQXjJAhuEGcSoQ59EixoHYMHkKs4cNQMYJ2neFrKOr386Gau6a_dTNKUQm-X2iO";
const G2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCetZZ4i9_T2L0g3JP9Fgfk_8PzA9cgErWqCYaR-EdTz1SYSbdcaP-bZYa-XuGC7k8eKBC0IpRR95O7OU0CaMyEpyQoEzWAdkRVEXvkWVoa6ATrgqqjU1T2kfmE8hvyspB0d4Y61TVTkBsH7BN2pPSEeQvb2-pfuR9iRWZ-Todm8aQQ8MD1TtWZ-xLX3mlQc-oy2f_-Zft5efYchN78k_5wZUFCgVWD3fiYs7IFaM7B5v8i5Ejy4YZ5Qkdh9Nauq_Tc0UrS5nLsZayN";
const G3 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDAMq-qQ9lAikmrfvSIE2sst31Jp9Wl2fFG7aAvGbQ8_rfu1ymyTBnebOt8nQIidgffZeb_hKLdDGuMmNVw-X-qFNTVmbY_DwY06eVfeRQvmFJ-oq6LUadM4IizlkAoZIcTba0-Dr3RiK6AbdGNDZcrJke4f2CDntXeLviQZAlFqiLPDqHVd6_RAtnDdxHlT4kDKmsX4r6t28OKmWohY6orYgmA8ixtMYY5LetMhz4uxe7EEamSZqcGBvEwLcZbvg_-oYSzpPlKOY_g";
const G4 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAO45fmOlBu8r4Yv-0ZRy6zZNiZ5RGcTqj_0EvfE7M4kIj1FVGC7WhBYyDgMT8lwsWnjt1ILG6sVYpqwwCtgimp8lFfNmV-Xiy-J0dHQFECJOP7oP8zBAHkgx6WcUd3z1rbdsVeG4dszdAN-T58691qvDvjcf3_H6u8M0QGMcZP-XJD7ELnOuccgil6il-p4xzAVeu1LF6zarjGC7U_bRfpuUW5UE1Pl2CygRwskONt4A4AQ2hT5V8FaC3UTIPQ8DYTuzWjhFnN_tCy";
const G5 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBeS1NTNiarV9UVPZtAbB2fO-Faku4iydtpTdJyiHilUYpDvVBlx3EuKUE9nZJxtMtst0C_8fm3sg7Q3vUOAiCsKvAcWzBuzA6m-K8Hoa1-o8TRb_c_KT6owZVChMX7p2FYZWWM91vQa7k5SixZPMByTIxJ0BVttNJX4rGLm8BCnGoqLB-o6B-IILc4vauVxm4-YkLQwr1v3xO0xLBXB19F5Bpe6YcG3fiyBBBmF9h1tUSyUiOhgOzBPDP5-EOGH67iiCe3K0pj5Z_b";

export const industries = [
  {
    slug: "thermal-power-plants",
    icon: "bolt",
    title: "Thermal Power Plants",
    teaser:
      "BTG, CHP, AHP, piping, structural works for power stations",
    heroImage: G1,
    summary:
      "Hindland supports thermal power clients with fabrication, erection, CHP execution, piping, and commissioning assistance — built around safety, schedule, and quality.",
    focusAreas: [
      "Boiler and turbine building structures",
      "Coal handling plant (CHP) expansion and greenfield execution",
      "Ash handling, CW piping, and utility systems",
      "Equipment erection, alignment, and pre-commissioning support",
    ],
    facts: [
      { icon: "bolt", label: "Core", value: "Thermal power delivery" },
      { icon: "precision_manufacturing", label: "Scope", value: "BTG / CHP / AHP" },
      { icon: "groups", label: "Execution", value: "Multi-crew sites" },
      { icon: "verified", label: "Quality", value: "Client QA alignment" },
    ],
    highlights: [
      { label: "Track record", value: "EPC-grade" },
      { label: "Safety", value: "PTW-led" },
      { label: "Schedule", value: "Milestone-based" },
      { label: "Handover", value: "Documented" },
    ],
    gallery: [G1, G2, G3],
    scope: [
      {
        icon: "foundation",
        title: "Boiler & TG structures",
        description:
          "Boiler and turbine building structures with coordinated lifts and alignment.",
      },
      {
        icon: "conveyor_belt",
        title: "CHP execution",
        description:
          "Coal handling plant expansion and greenfield execution including conveyors and transfer points.",
      },
      {
        icon: "plumbing",
        title: "Ash & utilities",
        description:
          "Ash handling, CW piping, and utility systems integrated with plant operations.",
      },
      {
        icon: "engineering",
        title: "Equipment support",
        description:
          "Equipment erection, alignment, and pre-commissioning support through energization readiness.",
      },
    ],
  },
  {
    slug: "industrial-manufacturing",
    icon: "factory",
    title: "Industrial Manufacturing",
    teaser:
      "Steel, cement, chemical plant fabrication and erection",
    heroImage: G2,
    summary:
      "We execute heavy fabrication and erection for steel, cement, chemicals, and allied industries — integrating with client engineering teams and EPC schedules.",
    focusAreas: [
      "Plant structures, pipe racks, and equipment supports",
      "Bulk material handling and process area steel",
      "Shutdown and expansion support with minimal disruption",
      "Fabrication quality plans and site welding controls",
    ],
    facts: [
      { icon: "factory", label: "Focus", value: "Industrial plants" },
      { icon: "architecture", label: "Steel", value: "Shop + field" },
      { icon: "schedule", label: "Outages", value: "Shutdown-ready" },
      { icon: "shield", label: "QA/QC", value: "Welding mapped" },
    ],
    highlights: [
      { label: "Disciplines", value: "Multi-trade" },
      { label: "Fabrication", value: "Heavy steel" },
      { label: "Coordination", value: "EPC sync" },
      { label: "Delivery", value: "India-wide" },
    ],
    gallery: [G2, G1, G4],
    scope: [
      {
        icon: "domain",
        title: "Plant structures & racks",
        description:
          "Plant structures, pipe racks, and equipment supports fabricated and erected to tight tolerances.",
      },
      {
        icon: "warehouse",
        title: "Bulk & process steel",
        description:
          "Bulk material handling and process area steel for continuous production environments.",
      },
      {
        icon: "build_circle",
        title: "Shutdown & expansion",
        description:
          "Shutdown and expansion support with minimal disruption to operating units.",
      },
      {
        icon: "fact_check",
        title: "Welding & QA",
        description:
          "Fabrication quality plans and site welding controls with traceable inspections.",
      },
    ],
  },
  {
    slug: "mining-minerals",
    icon: "terrain",
    title: "Mining & Minerals",
    teaser:
      "Crushing, screening, bulk material handling systems",
    heroImage: G4,
    summary:
      "Our teams support mining and minerals projects with structural and mechanical execution for crushing, screening, conveying, and bulk handling infrastructure.",
    focusAreas: [
      "Crusher and screening plant structures",
      "Conveyor galleries, transfer towers, and chutes",
      "Site erection in challenging terrain and logistics",
      "Coordination with OEM packages and client schedules",
    ],
    facts: [
      { icon: "terrain", label: "Sites", value: "Remote & rugged" },
      { icon: "local_shipping", label: "Logistics", value: "Heavy lifts" },
      { icon: "hub", label: "Systems", value: "Crush / screen / convey" },
      { icon: "handshake", label: "Partners", value: "OEM-aligned" },
    ],
    highlights: [
      { label: "Throughput", value: "Optimized" },
      { label: "Steel", value: "Bulk structures" },
      { label: "Safety", value: "Terrain-aware" },
      { label: "Schedule", value: "Season-ready" },
    ],
    gallery: [G4, G3, G2],
    scope: [
      {
        icon: "precision_manufacturing",
        title: "Crushing & screening",
        description:
          "Crusher and screening plant structures engineered for vibration and dynamic loads.",
      },
      {
        icon: "conveyor_belt",
        title: "Conveying systems",
        description:
          "Conveyor galleries, transfer towers, and chutes installed with precision alignment.",
      },
      {
        icon: "map",
        title: "Remote execution",
        description:
          "Site erection in challenging terrain and logistics with mobilization planning.",
      },
      {
        icon: "sync_alt",
        title: "Package integration",
        description:
          "Coordination with OEM packages and client schedules for seamless handoffs.",
      },
    ],
  },
  {
    slug: "renewable-energy",
    icon: "solar_power",
    title: "Renewable Energy",
    teaser:
      "Solar EPC execution, ground & rooftop projects, O&M",
    heroImage: G5,
    summary:
      "Renewables are a growing pillar of our portfolio: solar EPC, rooftop programs, and selective O&M support with the same execution discipline as our industrial work.",
    focusAreas: [
      "Ground-mounted and rooftop solar EPC",
      "Civil balance, MMS, module installation, and electrical works",
      "Testing, commissioning support, and documentation",
      "O&M readiness and handover to operations",
    ],
    facts: [
      { icon: "solar_power", label: "Offer", value: "Solar EPC" },
      { icon: "roofing", label: "Formats", value: "Roof + ground" },
      { icon: "electrical_services", label: "Grid", value: "Test-ready" },
      { icon: "eco", label: "Impact", value: "Low-carbon" },
    ],
    highlights: [
      { label: "EPC", value: "Disciplined" },
      { label: "Electrical", value: "Documented" },
      { label: "Safety", value: "Site-first" },
      { label: "O&M", value: "Handover-ready" },
    ],
    gallery: [G5, G3, G1],
    scope: [
      {
        icon: "solar_power",
        title: "Solar EPC delivery",
        description:
          "Ground-mounted and rooftop solar EPC with coordinated civil and electrical balance.",
      },
      {
        icon: "construction",
        title: "Civil & MMS",
        description:
          "Civil balance, MMS, module installation, and electrical works under integrated schedules.",
      },
      {
        icon: "science",
        title: "Testing & commissioning",
        description:
          "Testing, commissioning support, and documentation for energization and grid compliance.",
      },
      {
        icon: "support_agent",
        title: "Operations readiness",
        description:
          "O&M readiness and handover to operations with training and documentation packages.",
      },
    ],
  },
];

export function getIndustry(slug) {
  return industries.find((i) => i.slug === slug) ?? null;
}

export function getAdjacentIndustries(slug) {
  const i = industries.findIndex((x) => x.slug === slug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i > 0 ? industries[i - 1] : null,
    next: i < industries.length - 1 ? industries[i + 1] : null,
  };
}
