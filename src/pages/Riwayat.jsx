import { useState, useEffect } from 'react';
import Api from '../api/Api';
import Sidebar from '../components/Sidebar';
import { fetchBookings } from '../api/Api';

export default function Riwayat() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const bookingData = await fetchBookings();
        setBookings(bookingData);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookingData();
  }, []);

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col flex-grow">
          <nav className="sm:hidden w-full h-16 -mt-8 bg-slate-500 px-5 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 ml-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </nav>
          <section className="flex-grow relative">
            <div className="px-3 sm:px-5 py-10">
              <h1 className="text-2xl font-semibold mb-6">Riwayat Booking</h1>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-4 py-2">ID</th>
                      <th className="border border-gray-300 px-4 py-2">Nama</th>
                      <th className="border border-gray-300 px-4 py-2">Email</th>
                      <th className="border border-gray-300 px-4 py-2">No. Telepon</th>
                      <th className="border border-gray-300 px-4 py-2">Problem</th>
                      <th className="border border-gray-300 px-4 py-2">Konsultasi</th>
                      <th className="border border-gray-300 px-4 py-2">Tanggal Booking</th>
                      <th className="border border-gray-300 px-4 py-2">Mulai Booking</th>
                      <th className="border border-gray-300 px-4 py-2">Selesai Booking</th>
                      <th className="border border-gray-300 px-4 py-2">Opsi</th>
                      <th className="border border-gray-300 px-4 py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map(booking => (
                      <tr key={booking.id}>
                        <td className="border border-gray-300 px-4 py-2">{booking.id}</td>
                        <td className="border border-gray-300 px-4 py-2">{booking.name}</td>
                        <td className="border border-gray-300 px-4 py-2">{booking.email}</td>
                        <td className="border border-gray-300 px-4 py-2">{booking.no_telepon}</td>
                        <td className="border border-gray-300 px-4 py-2">{booking.problem}</td>
                        <td className="border border-gray-300 px-4 py-2">{booking.consultation}</td>
                        <td className="border border-gray-300 px-4 py-2">{booking.booking_date}</td>
                        <td className="border border-gray-300 px-4 py-2">{booking.booking_start}</td>
                        <td className="border border-gray-300 px-4 py-2">{booking.booking_end}</td>
                        <td className="border border-gray-300 px-4 py-2">{booking.option}</td>
                        <td className="border border-gray-300 px-4 py-2">{booking.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
