import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { roomsSuites } from "@/lib/mockData";
import { getRoomSchema } from "@/lib/schema";
import RoomDetailHero from "@/components/rooms/RoomDetailHero";
import RoomDetailGallery from "@/components/rooms/RoomDetailGallery";
import RoomDetailContent from "@/components/rooms/RoomDetailContent";
import RoomDetailSidebar from "@/components/rooms/RoomDetailSidebar";
import RoomRelated from "@/components/rooms/RoomRelated";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return roomsSuites.map((r) => ({ id: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const room = roomsSuites.find((r) => r.slug === id);
  if (!room) return { title: "Suite Not Found" };
  return {
    title: room.name,
    description: room.description,
  };
}

export default async function RoomDetailPage({ params }: Props) {
  const { id } = await params;
  const room = roomsSuites.find((r) => r.slug === id);
  if (!room) notFound();

  const schema = getRoomSchema(room);
  const relatedRooms = roomsSuites.filter((r) => r.id !== room.id).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <RoomDetailHero room={room} />
      <RoomDetailGallery room={room} />
      <section className="py-16 px-6 bg-[#FCFCFF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <RoomDetailContent room={room} />
            <RoomDetailSidebar room={room} />
          </div>
        </div>
      </section>
      <RoomRelated rooms={relatedRooms} />
    </>
  );
}
