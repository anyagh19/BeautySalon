"use client";
import { useState } from "react";
import Head from "next/head";

const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

export default function Appointment() {
  const [selectedDate, setSelectedDate] = useState(null);
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0-indexed
  const startDay = new Date(year, month, 1).getDay(); // 0 (Sun) - 6 (Sat)
  const totalDays = daysInMonth(year, month);

  const weeks = [];
  let days = [];

  // Fill empty slots before the 1st of the month
  for (let i = 0; i < (startDay === 0 ? 6 : startDay - 1); i++) {
    days.push(null);
  }

  for (let d = 1; d <= totalDays; d++) {
    days.push(d);
    if (days.length === 7) {
      weeks.push(days);
      days = [];
    }
  }

  if (days.length > 0) {
    while (days.length < 7) {
      days.push(null);
    }
    weeks.push(days);
  }

  return (
    <>
      <Head>
        <title>Appointment - Nelson</title>
      </Head>

      <div className="min-h-screen bg-white text-black p-6">
        

        <main className="mt-10 max-w-4xl mx-auto">
          <h2 className="text-2xl text-center mb-8">May {year}</h2>

          <div className="grid grid-cols-7 gap-2 text-center">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(day => (
              <div key={day} className="font-semibold">{day}</div>
            ))}

            {weeks.flat().map((day, index) => (
              <div
                key={index}
                className={`h-16 flex items-center justify-center border rounded-lg cursor-pointer ${
                  day ? "hover:bg-yellow-500 hover:text-black transition" : ""
                } ${selectedDate === day ? "bg-yellow-400 text-black font-bold" : ""}`}
                onClick={() => day && setSelectedDate(day)}
              >
                {day || ""}
              </div>
            ))}
          </div>

          {/* Booking Box */}
          {selectedDate && (
            <div className="mt-8 bg-white text-black p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Book Appointment for May {selectedDate}, {year}</h3>
              <p className="mb-4">Select a time slot:</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"].map(time => (
                  <button key={time} className="bg-yellow-400 hover:bg-yellow-300 px-4 py-2 rounded-lg font-medium">
                    {time}
                  </button>
                ))}
              </div>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">
                Book Appointment
              </button>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
