import { BookingForm } from "@/components/bookings/booking-form";

export default function NewBookingPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">New Booking</h1>
      </div>
      <BookingForm />
    </div>
  );
}
