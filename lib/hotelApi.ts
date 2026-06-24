export interface ApiRoom {
  id: number;
  name: string;
  description: string;
  propertyId: number;
  roomOnlyPrice: number;
  minimumOccupancy: number;
  maximumOccupancy: number;
  extraChargePerPerson: number | null;
  noOfRooms: number;
  roomDetails: string | null;
  imageList: { url: string }[];
  minimumLengthOfStay: number;
  maximumLengthOfStay: number;
  size: number | null;
  ranking: number;
  roomFacilities: string[];
}

export interface HotelData {
  id: number;
  name: string;
  localCurrency: string;
  roomList: ApiRoom[];
  taxDetails: { percentage: number }[];
}

export interface AvailabilityResult {
  roomId: number;
  roomName: string;
  price: number;
  available: boolean;
  availableRooms: number;
  totalRooms: number;
  maxOccupancy: number;
  images: string[];
  description: string;
}

const PROPERTY_ID = 3576;
const HOTEL_API_BASE = "https://api.thehotelmate.co/api/thm";

export async function checkAvailability(
  fromDate: string,
  toDate: string,
  noOfPersons: number
): Promise<{ results: AvailabilityResult[]; currency: string; taxPercent: number } | null> {
  try {
    const [availRes, hotelRes] = await Promise.all([
      fetch(
        `${HOTEL_API_BASE}/checkAvailability/${PROPERTY_ID}?fromDate=${fromDate}&toDate=${toDate}&noOfRooms=1&noOfPersons=${noOfPersons}`
      ),
      fetch(`${HOTEL_API_BASE}/getDetailedView/${PROPERTY_ID}`),
    ]);

    if (!availRes.ok || !hotelRes.ok) return null;

    const availData = await availRes.json();
    const hotelData: HotelData = await hotelRes.json();

    const taxPercent = hotelData.taxDetails?.[0]?.percentage ?? 0;
    const results: AvailabilityResult[] = hotelData.roomList
      .filter((r) => noOfPersons >= r.minimumOccupancy)
      .sort((a, b) => a.roomOnlyPrice - b.roomOnlyPrice)
      .map((r) => ({
        roomId: r.id,
        roomName: r.name,
        price: r.roomOnlyPrice,
        available: availData?.available ?? true,
        availableRooms: r.noOfRooms,
        totalRooms: r.noOfRooms,
        maxOccupancy: r.maximumOccupancy,
        images: r.imageList?.map((i) => i.url) ?? [],
        description: r.description?.replace(/<[^>]*>/g, ""),
      }));

    return { results, currency: hotelData.localCurrency ?? "INR", taxPercent };
  } catch {
    return null;
  }
}
