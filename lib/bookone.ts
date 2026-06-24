export const BOOKING_ENGINE_URL = "https://bookone.io/Stay-Casa-Inn-Hotel?bookingEngine=true";
export const BASE_URL = "https://bookone.io/Stay-Casa-Inn-Hotel";
export const PROPERTY_ID = 3576;
export const AVAILABILITY_API_BASE = "https://api.thehotelmate.co/api/thm";

export function buildBookingUrl(checkIn: Date, checkOut: Date, adults: number): string {
  const ciDay = checkIn.getDate();
  const ciMonth = checkIn.getMonth() + 1;
  const ciYear = checkIn.getFullYear();
  const coDay = checkOut.getDate();
  const coMonth = checkOut.getMonth() + 1;
  const coYear = checkOut.getFullYear();
  const ciStr = `${ciYear}-${String(ciMonth).padStart(2, "0")}-${String(ciDay).padStart(2, "0")}`;
  const coStr = `${coYear}-${String(coMonth).padStart(2, "0")}-${String(coDay).padStart(2, "0")}`;
  const nights = Math.max(1, Math.ceil((checkOut.getTime() - checkIn.getTime()) / 86400000));

  return `${BASE_URL}?bookingEngine=true&checkinDay=${ciDay}&checkinMonth=${ciMonth}&checkinYear=${ciYear}&checkoutDay=${coDay}&checkoutMonth=${coMonth}&checkoutYear=${coYear}&checkOut=${coStr}&toDate=${coStr}&date_to=${coStr}&nights=${nights}&numGuests=${adults}&numAdults=${adults}&Children=0&rooms=1`;
}

export function buildAvailabilityUrl(fromDate: string, toDate: string, noOfRooms = 1, noOfPersons = 1): string {
  return `${AVAILABILITY_API_BASE}/checkAvailability/${PROPERTY_ID}?fromDate=${fromDate}&toDate=${toDate}&noOfRooms=${noOfRooms}&noOfPersons=${noOfPersons}`;
}

export function getDefaultBookingUrl(): string {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  return buildBookingUrl(now, tomorrow, 1);
}
