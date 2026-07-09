import { getBreadcrumbSchema } from "@/lib/schema";

interface BreadcrumbItem {
  name: string;
  url: string;
}

export default function BreadcrumbsJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    ...items,
  ]);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
