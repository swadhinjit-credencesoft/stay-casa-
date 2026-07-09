import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { attractions, getAttractionBySlug } from "@/lib/tourist-data";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import AttractionHero from "@/components/tourist/AttractionHero";
import AttractionContent from "@/components/tourist/AttractionContent";
import VisitorSidebar from "@/components/tourist/VisitorSidebar";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return attractions.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const place = getAttractionBySlug(slug);
  if (!place) return {};
  return {
    title: `${place.name} | Tourist Attractions Near Stay Casa Inn, Jaipur`,
    description: `${place.name} — ${place.description} Located ${place.distance} from Stay Casa Inn, Sodala, Jaipur. Plan your visit with our complete guide.`,
    alternates: {
      canonical: `https://hotelstaycasainn.com/tourist/${place.slug}`,
    },
    openGraph: {
      title: `${place.name} | Near Stay Casa Inn, Jaipur`,
      description: `${place.description} Located ${place.distance} from Stay Casa Inn.`,
      url: `https://hotelstaycasainn.com/tourist/${place.slug}`,
      images: [{ url: place.image, alt: place.name }],
    },
  };
}

export default async function AttractionDetailPage({ params }: Props) {
  const { slug } = await params;
  const place = getAttractionBySlug(slug);
  if (!place) notFound();

  return (
    <>
      <BreadcrumbsJsonLd items={[
        { name: "Tourist Attractions", url: "/tourist" },
        { name: place.name, url: `/tourist/${place.slug}` },
      ]} />
      <AttractionHero
        name={place.name}
        image={place.image}
        rating={place.rating}
        reviews={place.reviews}
        distance={place.distance}
        duration={place.duration}
        category={place.category}
      />
      <section className="py-16 px-6 bg-[#FCFCFF]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <AttractionContent
              name={place.name}
              longDescription={place.longDescription}
              highlights={place.highlights}
              tips={place.tips}
            />
            <VisitorSidebar
              name={place.name}
              bestTime={place.bestTime}
              duration={place.duration}
              distance={place.distance}
            />
          </div>
        </div>
      </section>
    </>
  );
}
