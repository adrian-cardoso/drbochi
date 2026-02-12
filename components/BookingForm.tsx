"use client";

import { useForm } from "react-hook-form";
import { CalendarDays } from "lucide-react";

interface BookingData {
  date: string;
  time: string;
  type: string;
  notes: string;
}

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingData>();

  const onSubmit = (data: BookingData) => {
    alert(
      `Booking request submitted!\n\nDate: ${data.date}\nTime: ${data.time}\nType: ${data.type}\n\nWe'll confirm your appointment shortly.`
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-text">
          Appointment Type
        </label>
        <select
          className="w-full rounded-lg border border-cream-dark bg-white px-4 py-3 text-sm text-text focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          {...register("type", { required: "Please select a type" })}
        >
          <option value="">Select type...</option>
          <option value="initial">Initial Consultation (60 min)</option>
          <option value="followup">Follow-Up Visit (30 min)</option>
          <option value="acupuncture">Acupuncture Session (45 min)</option>
          <option value="nutrition">Nutritional Counseling (45 min)</option>
        </select>
        {errors.type && (
          <p className="mt-1 text-xs text-red-500">{errors.type.message}</p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-text">
            Preferred Date
          </label>
          <input
            type="date"
            className="w-full rounded-lg border border-cream-dark bg-white px-4 py-3 text-sm text-text focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            {...register("date", { required: "Date is required" })}
          />
          {errors.date && (
            <p className="mt-1 text-xs text-red-500">{errors.date.message}</p>
          )}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-text">
            Preferred Time
          </label>
          <select
            className="w-full rounded-lg border border-cream-dark bg-white px-4 py-3 text-sm text-text focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            {...register("time", { required: "Time is required" })}
          >
            <option value="">Select time...</option>
            <option value="9:00">9:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="13:00">1:00 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="15:00">3:00 PM</option>
            <option value="16:00">4:00 PM</option>
          </select>
          {errors.time && (
            <p className="mt-1 text-xs text-red-500">{errors.time.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-text">
          Notes (optional)
        </label>
        <textarea
          rows={3}
          className="w-full rounded-lg border border-cream-dark bg-white px-4 py-3 text-sm text-text placeholder:text-text/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="Any additional information..."
          {...register("notes")}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
      >
        <CalendarDays className="h-4 w-4" />
        Request Appointment
      </button>
    </form>
  );
}
