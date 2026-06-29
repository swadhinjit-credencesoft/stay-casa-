import type { RoomSuite } from "@/lib/mockData";

interface Props {
  room: RoomSuite;
}

export default function RoomDetailGallery({ room }: Props) {
  if (room.images.length <= 1) return null;
  return (
    <section className="bg-neutral-950 py-4 overflow-x-auto flex gap-2 px-4">
      {room.images.map((img, i) => (
        <div key={i} className="shrink-0 w-48 h-32 rounded-lg overflow-hidden">
          <img src={img} alt={`${room.name} - view ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer" />
        </div>
      ))}
    </section>
  );
}
