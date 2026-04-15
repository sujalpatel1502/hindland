import { notFound } from "next/navigation";
import {
  getService,
  getAdjacentServices,
  services,
} from "../../data/servicesContent";
import ServiceDetailClient from "./ServiceDetailClient";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service | HINDLAND Infrastructure" };
  return {
    title: `${service.title} | HINDLAND Infrastructure`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const { prev, next } = getAdjacentServices(slug);

  return (
    <ServiceDetailClient
      service={service}
      prev={prev ? { slug: prev.slug, title: prev.title } : null}
      next={next ? { slug: next.slug, title: next.title } : null}
    />
  );
}
