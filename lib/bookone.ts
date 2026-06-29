const BASE_URL = "https://bookone.io/Stay-Casa-Inn-Hotel";

export const BOOKING_ENGINE_URL = `${BASE_URL}?bookingEngine=true`;

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

export function getDefaultBookingUrl(): string {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  return buildBookingUrl(now, tomorrow, 1);
}
