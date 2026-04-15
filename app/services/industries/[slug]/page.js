import { notFound } from "next/navigation";
import {
  getIndustry,
  getAdjacentIndustries,
  industries,
} from "../../../data/industriesContent";
import IndustryDetailClient from "./IndustryDetailClient";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return { title: "Industry | HINDLAND Infrastructure" };
  return {
    title: `${industry.title} | HINDLAND Infrastructure`,
    description: industry.summary,
  };
}

export default async function IndustryDetailPage({ params }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const { prev, next } = getAdjacentIndustries(slug);

  return (
    <IndustryDetailClient
      industry={industry}
      prev={prev ? { slug: prev.slug, title: prev.title } : null}
      next={next ? { slug: next.slug, title: next.title } : null}
    />
  );
}
