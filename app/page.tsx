"use client";

import { useMemo, useState } from "react";

const SERVICES = [
  "Residential Cleaning",
  "Deep Cleaning",
  "Move-In / Move-Out Cleaning",
  "Recurring Cleaning",
  "Other",
];

export default function Home() {
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "Residential Cleaning",
    date: "",
    time: "",
    notes: "",
  });

  const mailtoHref = useMemo(() => {
    const toEmail = "gail121381@gmail.com";
    const subject = encodeURIComponent(
      "Booking Request - Pinay Pride Cleaning Services"
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Phone: ${form.phone}`,
        `Email: ${form.email}`,
        `Address: ${form.address}`,
        `Service: ${form.service}`,
        `Preferred Date: ${form.date}`,
        `Preferred Time: ${form.time}`,
        `Notes: ${form.notes}`,
      ].join("\n")
    );
    return `mailto:${toEmail}?subject=${subject}&body=${body}`;
  }, [form]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50 text-gray-900">
      {/* Top bar */}
      <header className="max-w-6xl mx-auto px-6 pt-8 flex items-center justify-between gap-4">
        <div className="text-left">
          <p className="text-xs tracking-widest uppercase text-pink-700/80">
            San Antonio, Texas
          </p>
          <h1 className="text-2xl font-bold text-gray-900">
            Pinay Pride <span className="text-pink-600">Cleaning</span>
          </h1>
        </div>

        <div className="flex gap-2">
          <a
            href="tel:2109065791"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full border border-pink-600 text-pink-700 hover:bg-pink-50"
          >
            Call
          </a>
          <a
            href="sms:2109065791"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full border border-pink-600 text-pink-700 hover:bg-pink-50"
          >
            Text
          </a>
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-pink-600 text-white hover:bg-pink-700"
          >
            Book Now
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-10">
        <div className="rounded-3xl bg-white/80 backdrop-blur border border-pink-100 shadow-sm p-8 md:p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">
            Pinay Pride Cleaning Services
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Professional, reliable, and proudly Filipina-owned cleaning services
            you can trust — with attention to detail and flexible scheduling.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setOpen(true)}
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-xl text-lg shadow-sm"
            >
              Book a Cleaning
            </button>
            <a
              href="tel:2109065791"
              className="bg-white border border-pink-600 text-pink-700 hover:bg-pink-50 px-8 py-4 rounded-xl text-lg text-center"
            >
              Call: (210) 906-5791
            </a>
            <a
              href="sms:2109065791"
              className="bg-white border border-pink-600 text-pink-700 hover:bg-pink-50 px-8 py-4 rounded-xl text-lg text-center"
            >
              Text Us
            </a>
          </div>

          <div className="mt-6 text-sm text-gray-600">
            <span className="font-semibold text-gray-800">Service area:</span>{" "}
            San Antonio + nearby (Universal City, Converse, Live Oak, Leon
            Valley, Alamo Heights, Kirby, Selma).
          </div>
        </div>
      </section>

      {/* Content cards */}
      <section className="max-w-6xl mx-auto px-6 pb-14">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Services */}
          <div className="bg-white rounded-2xl shadow-sm border border-pink-100 p-6">
            <h3 className="text-xl font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Residential Cleaning</li>
              <li>• Deep Cleaning</li>
              <li>• Move-In / Move-Out</li>
              <li>• Recurring Cleaning</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Add-ons available (upon request): inside fridge, inside oven,
              cabinets, baseboards, etc.
            </p>
          </div>

          {/* Pricing */}
          <div className="bg-white rounded-2xl shadow-sm border border-pink-100 p-6">
            <h3 className="text-xl font-semibold mb-3">Pricing (Estimate)</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center justify-between">
                <span>Standard Clean</span>
                <span className="font-semibold">$120+</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Deep Clean</span>
                <span className="font-semibold">$200+</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Move-In/Move-Out</span>
                <span className="font-semibold">$250+</span>
              </div>
              <div className="pt-3 border-t text-sm text-gray-600">
                Final price depends on home size, condition, pets, and requested
                add-ons. We’ll confirm after your booking request.
              </div>
            </div>
          </div>

          {/* Why choose us */}
          <div className="bg-white rounded-2xl shadow-sm border border-pink-100 p-6">
            <h3 className="text-xl font-semibold mb-3">Why Choose Us</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Trusted & experienced cleaners</li>
              <li>• Detail-focused</li>
              <li>• Flexible scheduling</li>
              <li>• Proudly Pinay-owned</li>
            </ul>
            <button
              onClick={() => setOpen(true)}
              className="mt-6 w-full bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl"
            >
              Request a Booking
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 pb-10 text-sm text-gray-600">
        <div className="bg-white/70 border border-pink-100 rounded-2xl p-5 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div>
            <div className="font-semibold text-gray-800">
              Pinay Pride Cleaning Services
            </div>
            <div>San Antonio, TX</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <a
              className="px-4 py-2 rounded-full border border-pink-600 text-pink-700 hover:bg-pink-50 text-center"
              href="tel:2109065791"
            >
              Call: (210) 906-5791
            </a>
            <a
              className="px-4 py-2 rounded-full border border-pink-600 text-pink-700 hover:bg-pink-50 text-center"
              href="sms:2109065791"
            >
              Text Us
            </a>
            <button
              onClick={() => setOpen(true)}
              className="px-4 py-2 rounded-full bg-pink-600 text-white hover:bg-pink-700"
            >
              Book
            </button>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold">Booking Request</h2>
                <p className="text-sm text-gray-600">
                  Fill this out and we’ll confirm your schedule.
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-gray-100"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = mailtoHref;
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
            >
              <div>
                <label className="block text-sm font-medium mb-1">Full Name *</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Phone *</label>
                <input
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="(xxx) xxx-xxxx"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Service *</label>
                <select
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Address *</label>
                <input
                  required
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="Street, City, ZIP"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Preferred Date</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Preferred Time</label>
                <input
                  type="time"
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Notes</label>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2 min-h-[90px]"
                  placeholder="Pets, parking info, special requests, number of rooms, etc."
                />
              </div>

              <div className="md:col-span-2 flex flex-col sm:flex-row gap-3 justify-end mt-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-5 py-3 rounded-lg border hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-3 rounded-lg bg-pink-600 hover:bg-pink-700 text-white"
                >
                  Send Booking Request
                </button>
              </div>

              <p className="md:col-span-2 text-xs text-gray-500 mt-2">
                This opens your email app with the booking details pre-filled (to{" "}
                <span className="font-semibold">gail121381@gmail.com</span>).
              </p>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}